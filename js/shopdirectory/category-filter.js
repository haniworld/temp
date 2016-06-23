require(['underscore', 'filter', '_global', '_utils'], function(_) {
  MP.CategoryFilter = MP.ProductFilterView.extend({
    events: {
      'click .category-filter-select': 'toggleSelector',
      'click #category-selector.active li a:not(.disabled)': 'filterSelected'
    },

    initialize: function(opts) {
      MP.ProductFilterView.prototype.initialize.call(this, opts);

      this.categories = opts.categories; // collection
      this.$labelCaegoryFilter = this.$labelSelector = this.$('label.category-filter-select');
      this.$selector = this.$('#category-selector');

      this.render();

      MP.dispatcher.on('filterChanged', this.updateAvailableCategories, this);
    },

    render: function() {

      this.$('a:not([data-value=all])').toggleClass('disabled', true);
      _.each(this.categories.filter(function(s){return s.get('available') == true}, this), function(s){
        this.$('a[data-value*=' + s.get('id') + ']').toggleClass('disabled', false);
      }, this);

      var categoryIds = this.selectedCategories.get('value');
      this.$('a').toggleClass('selected', false);
      if(_.contains(categoryIds, 'all')){
        this.$('a[data-value=all]').toggleClass('selected', true);
        this.$labelCaegoryFilter.text('カテゴリー');
        if(!Utils.MediaQuery.isTouchScreen()){
          this.$labelCaegoryFilter.tooltip('destroy');
          this.$labelCaegoryFilter.tooltip({
            trigger: 'hover',
            title: 'すべて'
          });
        }
      }
      else {
        var lblText = [];
        _.each(categoryIds, function(id){
          var $opt = this.$('a[data-value*=' + id + ']');
          $opt.toggleClass('selected', true);

          // if a child of sub category, also print parent menu
          if($opt.closest('ul').hasClass('flat')){
            var $parent = $opt.closest('li.sub').find('a:first');
            // if the parent cateogry is already displayed, don't include in the label
            if ( !_.contains(categoryIds, String($parent.data('value')) ) ) {
              lblText.push($parent.text() + "ー" + $opt.text());
            }
          }
          else {
            // select all children if it's a sub category
            if($opt.closest('li').hasClass('sub')){
              $opt.closest('li').find('a').toggleClass('selected', true);
              lblText.push($opt.text() + 'ーすべて');
            }
            else{
              lblText.push($opt.text());
            }
          }
        }, this);
        lblText = lblText.join(', ');
        this.$labelCaegoryFilter.text(lblText);
        if(!Utils.MediaQuery.isTouchScreen()){
          this.$labelCaegoryFilter.tooltip('destroy');
          this.$labelCaegoryFilter.tooltip({
            trigger: 'hover',
            title: lblText
          });
        }
      }
    },

    filterSelected: function(ev) {
      var $categoryElem = this.$(ev.target);
      var categories = String($categoryElem.data('value')).split('_');
      var currentCategories = this.selectedCategories.get('value');

      // If the selected filter is a subcategory add all the child categories to the list
      if($categoryElem.closest("li").hasClass('sub')){
        categories =
          _.toArray($categoryElem.closest("li").find('a').map(_.bind(function(index, elem){
              return String(this.$(elem).data('value'));
          }, this)));
      }

      this.selectedCategories.set('value', this.getSelectedValues(categories, currentCategories) );

      MP.dispatcher.trigger('filterCategoryChanged', this.selectedCategories.get('value'));
      MP.dispatcher.trigger('filterChanged', this.selectedCategories.get('value'), this.selectedSizes.get('value'));
      this.render(); // update the filter view
      Utils.$window.trigger('resize'); // trigger window resize to make lazyloaded images appear
    },

    updateAvailableCategories: function(){
      var selectedSizes  = this.selectedSizes.get('value');
      var available;
      this.categories.each(function(cat){
          available = _.some(cat.get('sizes'), function(size){
            return _.contains(selectedSizes, 'all') || _.contains(selectedSizes, size);
          }, this);
          cat.set('available', available);
      }, this);

      this.render();
    }
  });
});
