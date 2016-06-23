require(['jquery', 'underscore', 'backbone', '_global'], function($, _, Backbone) {
  MP.ProductSelectionView =  Backbone.View.extend({

    events: {
      'click .go-to-login': "showQuicklogin",
      'click .go-to-signup': "showQuickSignup",
      'imageLoaded img.prod-img': "prodImageLoaded",
      'click a' : 'prodClicked'
    },

    initialize: function() {
      this.model.set('name', this.$('.product-preview').data('prod-name'));
      this.model.set('price', this.$('.priceshop').data('price'));
      this.url = this.$('a').attr('href');
      MP.dispatcher.on('filterChanged', this.filterChanged, this);
    },

    filterChanged: function(categories, sizes) {
      if( this.categoryMatches(categories) && this.sizeMatches(sizes) ){
        this.$el.show();
      }
      else {
        this.$el.hide();
      }
    },

    categoryMatches: function(categories) {
      return _.contains(categories, 'all')
        || _.find(this.model.get('categories'), function(cat){
          return _.contains(categories, cat);
        });
    },

    sizeMatches: function(sizes){
      return _.contains(sizes, 'all')
        || _.find(this.model.get('sizes'), function(size){
          return _.contains(sizes, size);
        });
    },

    showQuicklogin: function(ev){
      ev.preventDefault();
      MP.dispatcher.trigger('quickLoginOpen', 'login', 'HiddenPrice');
    },

    showQuickSignup: function(ev){
      ev.preventDefault();
      MP.dispatcher.trigger('quickLoginOpen', 'signup', 'HiddenPrice');
    },

    // create a product hash for use of GA
    getGAProduct: function($target, containerName){
      if(!this.product){
        var saleCode = $target.closest('[data-product]').data('sale-code');
        this.product =
          {
           'name': this.model.get('name'),
           'id': this.model.get('id'),
           'price': this.model.get('price'),
           'brand': saleCode,
           'category': this.model.get('genre'),
           //'variant': '',
           'list': containerName,
           'position': this.model.get('position')
         };
      }
      return this.product;
    }
  });
});
