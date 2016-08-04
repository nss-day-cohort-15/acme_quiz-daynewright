
var Store = (function(store){

    store.addCatDom = function(selector){
        store.getCategories().forEach((e,i) => $(selector).append(`<li><a id="id-${i}" href="#">${e.name}</a></li>`));
        selector.click(Store.addProdDom);
    }

    store.addProdDom = function(evt){
           $('#store-items').html('');
           
           var selectedCat = parseInt($(evt.target).attr('id').match(/\d+/));
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
           <div class="col-md-3 center prod">
             <h2>${product.name}</h2>
             <h4><span>Type:</span> ${type.name} |<span> Category:</span> ${category.name}</h4>
             <hr />
             <p>${product.description}</p>
           </div>
         `);
    }

    return store;

})(Store || {})
