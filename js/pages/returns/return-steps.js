require([
	'underscore',
	'jquery',
	'backbone',
	'templates',
	'_utils',
	'pages/returns/returnable-item',
	'pages/returns/return-post-request',
	], function(_, $, Backbone, Templates) {

	MP.ReturnsViewBase = Backbone.View.extend({
		initialize: function(opts){
			this.name = opts.name;
			this.updateMode('not-started');
			this.$contentMain = this.$('.section-content-main');
		},

		updateMode: function(mode){
			_.each(['not-started', 'editing', 'finalized'],_.bind(function(m){
				this.$el.toggleClass(m, (m == mode));
			}, this));
			this.mode = mode;
		},

		render: function(){
			return this;
		},

		// need to unset the max-height for the inner slider / message to work without overlapping
		show: function(){
			this.$contentMain.slideDown();
		},

		hide: function(){
			this.$contentMain.slideUp();
		},

		// send the options to send to next step
		// and the reference to edit button
		goToNextStep: function(opts, callback){
			// validation
			if(this.isValid()) {
				this.$el.removeClass('validation-errors');
				this.updateMode('finalized');
				MP.dispatcher.trigger('returnsStepNext', this.name, opts);
				this.runPostSuccess();
				if(typeof(callback) === 'function'){
					callback.call(this);
				}
			}
			else {
				this.$el.addClass('validation-errors');
				Utils.scrollBodyTo(this.$el.offset().top);
			}
		},

		editStep: function(){
			MP.dispatcher.trigger('returnsEditStep', this.name);
			this.updateMode('editing');
			this.show();
		},

		getMode: function(){
			return this.mode;
		}
	});


	MP.ReturnsItemSelectionView = MP.ReturnsViewBase.extend({

		events: {
			'click .action-next': 'proceed',
			'click #edit-return-products': 'editStep'
		},

		initialize: function(opts){
			MP.ReturnsViewBase.prototype.initialize.call(this, opts);

			MP.dispatcher.on('returnItemSelected', this.prodSelectionChanged, this);
			MP.dispatcher.on('returnItemDeselected', this.prodSelectionChanged, this);

			this.returnItemViews = [];
			this.itemSelected = false;
		},

		render: function(){
			if(this.collection.length > 0){
				this.$('.section-content-main ul').html(this.collection.map(function(item){
					var itemView = new MP.ReturnItemView({model: item}).render();
					this.returnItemViews.push(itemView);
					return itemView.el;
				}, this));
			}
			else {
				this.$('.section-content-main ul').html(Templates['return-no-item.hbs']());
			}
			this.updateMode('editing');
			this.$actionFooter = this.$('footer');
			this.$actionContainer = this.$actionFooter.find('.action-container');
			this.prodSelectionChanged();
			return this;
		},

		prodSelectionChanged: function(){
			// if at least one product is selected, show next button
			this.itemSelected = _.some(this.returnItemViews, function(item){
				return item.isSelected();
			});
			this.$btnNext = this.$btnNext || this.$('.action-next');
			this.$btnNext.toggleClass('hidden', !this.itemSelected)

			if(this.itemSelected && this.mode === 'editing'){
				// if the button locates below the viewport bottom, change to float
				Utils.$window.off('scroll.item-selected').on('scroll.item-selected', _.debounce(_.bind(function(){
					this.$actionContainer.css('left', this.$contentMain.offset().left);
					this.$actionContainer.css('width', this.$contentMain.outerWidth(true));
					this.$actionContainer.toggleClass('floating-footer', this.$actionFooter.offset().top > Utils.windowScrollBottom());
				}, this), 250));
			}
		},

		proceed: function(){
			var paymentTypes = _.uniq(_.compact(
				_.map(this.returnItemViews, function(item){
					if(item.isSelected()){
						return item.getPaymentType();
					}
				})
			));
			this.goToNextStep(paymentTypes);
			Utils.$window.off('scroll.item-selected'); // remove any window scroll event
		},

		isValid: function(){
			return this.itemSelected;
		},

		runPostSuccess: function(){
			this.buildItemsToReturn();
		},

		// Create a json data for submitting the form
		buildItemsToReturn: function(){
			var items = [];
			_.each(this.returnItemViews, function(riv){
				if(riv.isSelected()){
					items = _.union(items, riv.getItemsToReturn());
				}
			});
			// TODO this part goes into the result data as "items":
			MP.dispatcher.trigger('returnItemsReady', items);
		}
	});


	MP.ReturnsPaymentInfoView = MP.ReturnsViewBase.extend({
		events: {
			'click .action-next': 'proceed',
			'click #edit-return-bankinfo': 'editStep'
		},

		initialize: function(opts){
			MP.ReturnsViewBase.prototype.initialize.call(this, opts);
			MP.dispatcher.on('returnsEditStep', this.editClicked, this);
			this.$bankForm = this.$('.form-bankinfo');
		},

		show: function(paymentTypes){
			this.paymentTypes =  paymentTypes || this.paymentTypes;
			// hide/show the payment methods based on the user's item selection
			_.each(["cc", "cod", "paidy","paypal"], _.bind(function(type){
				this.$('.payment-type-' + type).toggleClass('payment-type-selected', _.contains(this.paymentTypes, type));
			}, this));

			this.updateMode('editing');
			MP.ReturnsViewBase.prototype.show.call(this);
		},

		proceed: function(){
			MP.ReturnsViewBase.prototype.goToNextStep.call(this, this.paymentTypes, this.displayBankInfo);
			this.$('.action-edit').toggleClass('hidden', !_.contains(this.paymentTypes, 'cod'));
		},

		// Display the bank information in the read-only format
		displayBankInfo: function(){
			if(_.contains(this.paymentTypes, 'cod')){
				var $display = this.$('.display-bankinfo');
				$display.find('.name').text(this.$bankForm.find('[name=name]').val());
				$display.find('.branch').text(this.$bankForm.find('[name=branch]').val());
				$display.find('.account_type').text(this.$bankForm.find('[name=account_type]:checked').parent().text());
				$display.find('.account_no').text(this.$bankForm.find('[name=account_no]').val());
				$display.find('.account_owner').text(this.$bankForm.find('[name=account_owner]').val());
			}
		},

		isValid: function(){
			// Validate check the bank info only if the cod is selected
			if(_.contains(this.paymentTypes, 'cod')){
				return this.validateForm();
			}
			return true;
		},

		saveBankInfo: function(){
			var bankInfo = {};
			bankInfo['bank'] = this.$bankForm.find('[name=name]').val();
			bankInfo['bankBranch'] = this.$bankForm.find('[name=branch]').val();
			bankInfo['bankAccountType'] = this.$bankForm.find('[name=account_type]:checked').val();
			bankInfo['bankAccountNumber'] = this.$bankForm.find('[name=account_no]').val();
			bankInfo['bankAccountName'] = this.$bankForm.find('[name=account_owner]').val();

			MP.dispatcher.trigger('returnRepaymentInfoReady', bankInfo);
		},

		editClicked: function(stepName){
			if(stepName != this.name){
				this.hide();
			}
		},

		runPostSuccess: function(){
			if(_.contains(this.paymentTypes, "cod")){
				this.saveBankInfo();
			}
		}
	});

	_.extend(MP.ReturnsPaymentInfoView.prototype, MP.FieldValidation);


	MP.ReturnsConfirmationView = MP.ReturnsViewBase.extend({
		events: {
			'click #return-submit': 'submitReturn'
		},

		initialize: function(opts){
			MP.ReturnsViewBase.prototype.initialize.call(this, opts);
			MP.dispatcher.on('returnsEditStep', this.hide, this);
			MP.dispatcher.on('returnItemsReady', this.setReturnItems, this);
			MP.dispatcher.on('returnRepaymentInfoReady', this.setRepaymentInfo, this);
			this.finalData = {};
		},

		show: function(paymentTypes){
			this.updateMode('editing');
			MP.ReturnsViewBase.prototype.show.call(this);
		},

		setReturnItems: function(dataItems){
			this.finalData['items'] = dataItems;
		},

		setRepaymentInfo: function(dataBankInfo){
			this.finalData = _.extend(this.finalData, dataBankInfo);
		},

		submitReturn: function(evt){
			evt.preventDefault();
			this.$form = this.$('#form-submit-return');
			MP.dispatcher.trigger('returnsBeforeSubmission');
			this.submit(
				this.finalData,
				_.bind(function(data){
					var shippingLabel = "/account/returnLabel/" + data['request-id'];
					MP.dispatcher.trigger('returnsSubmissionSuccess', data['request-external-id'], shippingLabel);
				}, this),
				_.bind(function(data){
					MP.dispatcher.trigger('returnsSubmissionsError', data.errors.join("\n"));
				}, this)
			);
		}
	});

	_.extend(MP.ReturnsConfirmationView.prototype, MP.ReturnPostRequest);

});