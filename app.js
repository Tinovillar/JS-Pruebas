let ingredientes__select = $("#ingredientes");
let ingredientes__container = $(".ingredientes__container");
let btnAdd = $(".btn--add");
let acumuladora = "";
let btnCart = $(".btn--cart")
let btnTrash = $(".trash-icon");
let arrayIngredientes = [];
let pedidos = [];
let burgerName = $("input#burgerName");

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
  let ingredientesIntoArray = [];
  for(let i = 0; i<$(".p--ingrediente").length; i++){
    let textIn = $(".p--ingrediente")[i].textContent;
    ingredientesIntoArray.push(`${textIn}`);
  }
  pedidos.push({
    "name" : `${burgerName.val()}`,
    "ingredientes" : `${ingredientesIntoArray}`
  });
  acumuladora = "";
  ingredientes__container.html(acumuladora);
  localStorage.setItem("Pedidos", pedidos);
});