require([
	'jquery',
	'underscore',
	'backbone',
	//'react',
	//'backbone-react',
	'_global',
	'_utils'], function($, _, Backbone) {
	MP.ProductFilterView =  Backbone.View.extend({
		initialize: function(opts) {
			this.selectedCategories = opts.selectedCategories;
			this.selectedSizes = opts.selectedSizes;

			this.listenTo(this.selectedCategories, 'change', this.render);
			this.listenTo(this.selectedSizes, 'change', this.render);
			MP.dispatcher.on('filterClosed', this.closeSelector, this);
		},

		toggleSelector: function(ev) {
			this.$labelSelector.toggleClass('open');
			this.$selector.toggleClass("active");
			if(this.$labelSelector.hasClass('open')) {
				// Clicking anywhere other than the filter will close the dropdown list
				$('body, .brand-title, .product-filters').on('click', _.bind(function(ev){
					if($(ev.target).closest('.product-filter label').length <= 0 && $(ev.target).closest('.product-filter ul').length <= 0){
						this.closeSelector();
						$( this ).off(ev);
					}
				}, this));
			}
			ev.stopPropagation();
		},

		closeSelector: function(){
			this.$labelSelector.removeClass('open');
			this.$selector.removeClass("active");
		},

		getSelectedValues: function(newValues, existingValues){
			// convert a single value to an array of one element, array to array
			//var values = [].concat(newValues);
			var values = newValues;
			if(_.contains(values, 'all')){
				return ['all'];
			}
			else {
				// If the value is already in the exisintValues list, unselect it
				// Always conpare the first value of the array. Only time the values are more than 1 elements, they are parent category
				if(_.contains(existingValues, (values[0]))){
					existingValues.removeAll(values);

					// If all specific values are deselected, revert to all
					if(existingValues.length == 0){
						return ['all'];
					}
					return existingValues;
				}
				// if not add to the existing values (if the previous value was 'all' replace it)
				else {
					if( _.contains(existingValues, 'all')){
						return values;
					}
					else{
						return _.union(existingValues, values);
					}
				}
			}
		}
	});
});

