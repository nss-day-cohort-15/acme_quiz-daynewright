
var Store = (function(store){

    store.addCatDom = function(selector){
        store.getCategories().forEach((e,i) => $(selector[i]).html(`<a id="id-${i}" href="#">${e.name}</a>`));
        selector.click(Store.addProdDom);
    }

    store.addProdDom = function(){
           $('#store-items').html('');

            var selectedCat = parseInt($(this).children().attr('id').match(/\d+/));
            var categories = store.getCategories();
            var types = store.getTypes();
            var products = store.getProducts();

            console.log(selectedCat);

            for(p in products[0]){
                var product = products[0][p];
                var catName = categories[selectedCat];

              types.forEach(type =>(product.type === type.id && selectedCat === type.category) ? buildDiv(catName, type, product): '');
            }
    }


   function buildDiv(category, type, product){
         $('#store-items').append(`
           <div class="col-md-4 col-md-offset-1 center prod">
             <h2>${product.name}</h2>
             <h4><span>Type:</span> ${type.name} |<span> Category:</span> ${category.name}</h4>
             <hr />
             <p>${product.description}</p>
           </div>
         `);
    }

    return store;

})(Store || {})
