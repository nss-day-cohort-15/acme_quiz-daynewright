
var Store = (function(store){

    var categories = [];
    var types = [];
    var products = [];

    store.jsonCall =  function(){
        $.getJSON('app/data/categories.json')
             .then(res => categories = res.categories)
             .then(() => $.getJSON('app/data/types.json'))
             .then(res => types = res.types)
             .then(() => $.getJSON('app/data/products.json'))
             .then(res => products = res.products)
             .then(() => store.addCatDom($('.dropdown-menu')))
    }

    store.getCategories =  function(){
        return categories;
    }

    store.getTypes = function(){
        return types;
    }

    store.getProducts = function(){
        return products;
    }

    return store;

})(Store || {})
