require([
    'underscore',
    'jquery',
    'backbone',
    'category-filter',
    'size-filter',
    'product-selection',
    'login'
  ], function(_, $, Backbone) {
  MP.ShopDirectory = Backbone.Router.extend({

    routes: {
      'filter?:params': 'update'  // /filter?category=c1,c2,c3&size=s1,s2
    },

    initialize: function() {
      this.$productList = $('#product-list');

      if(this.$productList.length > 0){
        this.populate();

        this.selectedCategories = new Backbone.Model({value: ['all']});
        this.selectedSizes = new Backbone.Model({value: ['all']});

        this.categoryFilter = new MP.CategoryFilter({
          el: '.category-filter',
          categories: this.categories,
          selectedCategories: this.selectedCategories,
          selectedSizes: this.selectedSizes
        });

        this.sizeFilter = new MP.SizeFilter({
          el: '.size-filter',
          sizes: this.sizes,
          selectedCategories: this.selectedCategories,
          selectedSizes: this.selectedSizes
        });

        this.productSelections = new Backbone.Collection;

        _.each(this.products, function(product, index){
          var productModel = new Backbone.Model({
              id: product.id,
              categories: product.categories,
              sizes: product.sizes,
              saleCode: this.saleCode,
              position: index + 1,
              genre: this.genre
          });

          new MP.ProductSelectionView({
            el: product.element,
            model: productModel
          });

          this.productSelections.add(productModel);
        }, this);


        MP.dispatcher.on('filterChanged', function(cats, sizes){
          this.update('category='+ cats.join(',') + '&size=' + sizes.join(','), true);
        }, this);

        $('.loading-products').hide();
      }

      // Show the login modal if this page is presale and the user is logged out
      if(!Utils.isUserLoggedin() && typeof(fromPresale) !== "undefined" && fromPresale == 'true') {
        MP.dispatcher.trigger('quickLoginOpen', 'login', 'Presale - Auto Popup', {message: 'この先行セールを見るにはログインをしてください。'});
      }

      MP.dispatcher.on('loginSuccess', this.reloadPage, this);
      MP.dispatcher.on('signupSuccess', this.reloadPage, this);
    },

    // populate the list of products and available categories / sizes
    populate: function() {
      this.products = [];
      this.categories = new Backbone.Collection;
      this.sizes = new Backbone.Collection;
      this.saleCode = $('#sale-code').val();
      this.genre = $('#category').val();

      var allCategories = [], allSizes = [];
      var $productBlocks = $('#product-list .product-block');

      $productBlocks.each(_.bind(function(index, element) {
        var $elem = $(element),
            categories = String($elem.data('category')).split('-'), // the subcategory that has the children is concatenated with '-' (dash)
            dataSizes = $elem.data('sizes'),
            sizes = [];

        allCategories = _.union(allCategories, categories);

        // Format the escape characters
        if(dataSizes.length > 0){
          sizes = (dataSizes.replace('[', '').replace(']','').replace(/"/g, '').replace(/\\/g, '')).split(',')
        }
        else {
          sizes = ['F'];
        }
        allSizes = _.union(allSizes, sizes);

        this.products.push({
            id: $elem.data('product'),
            element: element,
            categories: categories,
            sizes: sizes
        });

        _.each(categories, function(cat){
          var catModel = this.categories.find(function(model){
            return model.get('id') == cat;
          });

          if(catModel){
            catModel.set('sizes', _.union(catModel.get('sizes'), sizes));
          }
          else {
            this.categories.add(
              new Backbone.Model({
                id: cat,
                sizes: sizes,
                available: true
              })
            );
          }
        }, this);

        _.each(sizes, function(size){
          var sizeModel = this.sizes.find(function(model){
            return model.get('id') == size;
          });

          if(sizeModel){
            sizeModel.set('categories', _.union(sizeModel.get('categories'), categories));
          }
          else {
            this.sizes.add(
              new Backbone.Model({
                id: size,
                categories: categories,
                available: true
              })
            );
          }
        }, this);

      }, this));
    },

    update: function(params, updateRoute) {
      if(updateRoute){
        // update the route
        var paramCategories = '', paramSizes = '';
        if (!_.contains(this.selectedCategories.get('value'), 'all'))  {
          paramCategories = 'category=' + this.selectedCategories.get('value').join(',');
        }
        if (!_.contains(this.selectedSizes.get('value'), 'all')) {
          paramSizes = 'size=' + this.selectedSizes.get('value').join(',');
        }

        if(paramCategories.length > 0 && paramSizes.length > 0){
          this.navigate('filter?'+ paramCategories + '&' + paramSizes);
        }
        else if(paramCategories.length == 0 && paramSizes.length == 0){
          this.navigate('filter');
        }
        else if(paramCategories.length > 0){
          this.navigate('filter?' + paramCategories);
        }
        else {
          this.navigate('filter?' + paramSizes)
        }

      }
      else {
        var p = params.split('&');
        var cats = ( p[0] && p[0].indexOf('category') >= 0 ) ? p[0].split('=')[1].split(',') : [];
        var sizes = ( p[1] = (p[1] || (p[0].indexOf('size') >= 0 ? p[0] : null) )) ? p[1].split('=')[1].split(',') : [];
        this.selectedCategories.set('value', (cats.length > 0) ? cats : ['all'] );
        this.selectedSizes.set('value', (sizes.length > 0) ? sizes : ['all'] );
        MP.dispatcher.trigger('filterChanged', this.selectedCategories.get('value'), this.selectedSizes.get('value'));
      }
    },

    reloadPage: function(opts){
      window.location = $(location).attr('href') + "?token=" + opts.token;
    }
  });
});
