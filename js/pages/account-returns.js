require([
	'underscore',
	'jquery',
	'backbone',
	'templates',
	'pages/returns/return-steps',
	'pages/returns/return-label'
	], function(_, $, Backbone, Templates) {

	MP.AccountReturnView = Backbone.View.extend({

		events: {
			'click #return-slip': 'openReturnLabel'
		},

		initialize: function(){
			Utils.scrollBodyTo(0, 0); // always scroll to top when refreshed
			MP.dispatcher.on('returnOverlay', this.toggleOverlay, this);
			MP.dispatcher.on('returnsStepNext', this.showNextStep, this);
			MP.dispatcher.on('returnsEditStep', this.editClicked, this);
			MP.dispatcher.on('returnsBeforeSubmission', this.hideErrors, this);
			MP.dispatcher.on('returnsSubmissionSuccess', this.postSubmission, this);
			MP.dispatcher.on('returnsSubmissionsError', this.showErrors, this);
			MP.dispatcher.on('csRequestSubmissionSuccess', this.postCsSubmission, this);
			this.lastStepVisited = false;
		},

		render: function(){
			// Hide/ show the return diagram section based on the screen size
			if(Utils.MediaQuery.isMobile()){
				this.$('.return-header-accordion .border-header').hide();
				this.$('.return-header-accordion').accordion();
			}
			else{
				this.$('.return-header-accordion .accordion-header').hide();
				this.$('.return-header-accordion .accordion-body').removeClass('height-transition-hidden');
			}

			if(this.$('#return-before-submission:visible').length > 0){
				// fetch the return items
				new MP.ReturnItems().fetch({
					success: _.bind(function(collection){
						this.collection = collection;
						this.itemSelectionView = new MP.ReturnsItemSelectionView({el: '#return-products', name: 'itemSelection', collection: this.collection}).render();
						this.PaymentInfoView = new MP.ReturnsPaymentInfoView({el: '#return-paymentinfo', name: 'paymentInfo'}).render();
						this.confirmationView = new MP.ReturnsConfirmationView({el: '#return-confirmation', name: 'confirmation'}).render();
						this.$overlay = this.$('.return-overlay');
						this.$csModal = this.$('.modal-cs-request');
					}, this),
					error: _.find(function(data){
						console.log('Server Error occurred:');
					}, this)
				}).always(_.bind(function(){
					this.$('.item-loading').addClass('hidden');
					this.$('.item-loaded').removeClass('hidden');
				}, this));
			}
		},

		toggleOverlay: function(modalOn){
			this.$overlay.toggleClass('modal-on', modalOn);
		},

		showNextStep: function(stepName, opts){
			if(stepName === 'itemSelection'){
				this.paymentTypes = opts;
				this.PaymentInfoView.show(opts);
				this.$el.removeClass('finished'); // if this step is changed, it gets reset.
				this.toggleEditMode(true);
			}
			if(stepName === 'paymentInfo'){
				$.when(this.PaymentInfoView.updateMode('finalized')).done(_.bind(function(){
					this.confirmationView.show(this.paymentTypes);
					// '.finished' keeps track of if the user has already been to confirmation step
					this.lastStepVisited = true;
					this.$el.addClass('finished');
					this.toggleEditMode(false);
				}, this));
			}
		},

		editClicked: function(){
			this.toggleEditMode(true);
		},

		// if any of the step is being edited, keep on
		toggleEditMode: function(on){
			this.$el.toggleClass('in-edit', on);
		},

		showErrors: function(strErrors){
			this.toggleErrors(strErrors, true);
		},

		hideErrors: function(){
			this.toggleErrors(null, false);
		},

		toggleErrors: function(strErrors, show){
			this.$errorMessages = this.$errorMessages || this.$('.error-messages');
			if(show){
				this.$errorMessages.html(strErrors);
				this.$errorMessages.removeClass('hidden');
			}
			else {
				this.$errorMessages.addClass('hidden');
			}
		},

		postSubmission: function(requestId, shippingSlipUrl){
			this.$('#return-before-submission').hide();
			// show the request no.
			var $postView = this.$('#return-after-submission');
			$postView.find('#return-request-id').html(requestId);
			$postView.find('#return-slip').attr('href', shippingSlipUrl);
			// hide/show the payment methods based on the user's item selection
			_.each(["cc", "cod", "paidy","paypal"], _.bind(function(type){
				$postView.find('.payment-type-' + type).toggleClass('payment-type-selected', _.contains(this.paymentTypes, type));
			}, this));

			$postView.show();
		},

		postCsSubmission: function(requestId, remove, model){
			// in the case of CS submission, the overlay is still covering the page for selecting the item product
			// so we need to remove this first
			this.toggleOverlay(false);

			// render the newly submitted request ID
			this.$csModal.find('[name=return-request-id]').html(requestId);

			// Hook the event handler when the CSModal dialog is closed
			if(remove){
				this.$csModal.one('hidden', _.bind(function(){
					this.collection.remove(model);
					if(this.collection.length <= 0){
						Utils.reloadWindow();
					}
				}, this));
			}

			this.$csModal.modal('show');
		},

		openReturnLabel: function(ev){
			ev.preventDefault();
			this.openReturnLabelWindow(this.$(ev.target).attr('href'));
		}
	});

	_.extend(MP.AccountReturnView.prototype, MP.ReturnLabel);

});



