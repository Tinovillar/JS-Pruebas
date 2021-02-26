let carrito = new Carrito;
let TOTAL = 0;

$(document).ready( () => {
  carrito.cargarPedidos();
});

$('.btn--vaciar').click( (e) => { 
  e.preventDefault();
  carrito.vaciarCarrito();
});

$('.btn--comprar').click( (e) => { 
  e.preventDefault();
  carrito.comprar();
});

$('.pedidos__container').click((e) => {
  e.preventDefault();
  carrito.eliminarPedido(e);
})

/////////////////////////////////////

let burger = new Burger;
let pedidos = [];

$('.btn--add').click((e) => { 
  e.preventDefault();
  burger.mostrarIng();
});

$('.ingredientes__container').click((e) => {
  e.preventDefault();
  burger.eliminarIng(e);
})

$('.btn--cart').click((e) => {
  e.preventDefault();
  burger.enviarCarrito();
});

$('.ing--reset').click((e) => {
  e.preventDefault()
  burger.resetIng();
})

$(document).on('DOMContentLoaded', (e) => {
  e.preventDefault();
  burger.cargarPedidos();
})