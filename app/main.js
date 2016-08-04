

$(document).ready(function(){
    var catSelector = $('.dropdown-menu li');

    var Store = {
      addCatDom : function(){
          $.getJSON('app/data/categories.json')
            .then(function(c){
              c.categories.forEach((e,i) => $(catSelector[i]).html(`<a id="id-${i}" href="#">${e.name}</a>`));
            })
            .then(function(){
              catSelector.click(getProducts);
            })
     },
     addProdDom : function(product, type, category) {
        $('#store-items').append(`
             <div class="col-md-6 center prod">
                <h2>${product.name}</h2>
                <h4><span>Type:</span> ${type[product.type].name} |<span> Category:</span> ${category}</h4>
                <hr />
                <p>${product.description}</p>
              </div>
                    `);
     }
   }

   function getProducts(){

       $('#store-items').html('');

       var selectedId = parseInt($(this).children().attr('id').match(/-(\w+)/);
       var selectedName = $(this).children().html();

     $.getJSON('app/data/types.json')
        .then(function(res){
          types = res.types;
        }).then(function () {
           return $.getJSON('app/data/products.json')
        }).then(function({products}){
                  types.forEach(type  => {
                   for(product in products[0]){
                     if(selectedId === type.category && products[0][product].type  === type.id){
                        Store.addProdDom(products[0][product], types, selectedName);
                     }
                   }
                  });
         });
   }

  Store.addCatDom();

});

