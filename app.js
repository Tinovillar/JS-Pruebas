let ingredientes__select = $("#ingredientes");
let ingredientes__container = $(".ingredientes__container");
let btnAdd = $(".btn--add");
let acumuladora = "";
let btnCart = $(".btn--cart")
let btnTrash = $(".trash-icon");
let arrayIngredientes = [];
let pedidos = [];
let burgerName = $("#burgerName").value;

// Cargo los ingredientes dentro del select
$(window).on("DOMContentLoaded", (event) => {
  event.preventDefault();
  for(let ing of ingredients){
    ingredientes__select.append(`<option>${ing.name}</option>`);
  }
})

// Luego de apretar el boton agrego los ingredientes a ingredientes container
btnAdd.click((e) => { 
  e.preventDefault();
  acumuladora += `
  <div class="ingredientes--add">
    <p class="p--ingrediente">${ingredientes__select.val()}</p>
    <i class="far fa-trash-alt trash-icon"></i>
  </div>`;
    ingredientes__container.html(acumuladora);
});

// Al apretar el boton se añaden todos los ingredientes al carrito
btnCart.click((e) => { 
  e.preventDefault();
  arrayIngredientes = [{
    "name" : "",
    "ingredientes" : ""
  }];
  for(let i = 0; i<$(".p--ingrediente").length; i++){
    let textIn = $(".p--ingrediente")[i].textContent;
    arrayIngredientes.ingredientes.push(textIn);
    arrayIngredientes.name.push(burgerName);
  }
  if(arrayIngredientes.length != 0) {
    pedidos.push(arrayIngredientes);
  }
  acumuladora = "";
  ingredientes__container.html(acumuladora);
  console.log(pedidos);
});

  for(let i = 0; i<$(".trash-icon").length; i++){
    console.log($(".trash-icon")[i]);
    $(".trash-icon")[i].click((e) => {
      e.preventDefault();
      console.log("A")
    })
  }