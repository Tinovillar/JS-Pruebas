class Carrito {

  vaciarCarrito() {
    $('.pedidos__container').children().remove();
    localStorage.removeItem('pedidos');
    pedidos = [];
    TOTAL = 0;
    this.refresh();
  };

  comprar() {
    $('.pedidos__container').children().remove();
    localStorage.removeItem('pedidos');
    pedidos = [];
    TOTAL = 0;
    this.refresh();
  }

  cargarPedidos() {
    if(localStorage.getItem('pedidos')) {   
        pedidos = $.parseJSON(localStorage.getItem('pedidos'));
        for(let i of pedidos){
          $('.pedidos__container').append(`
          <div class="pedido--tarjeta">
              <h3 class="h3--name">${i.name}</h3>
              <p class="p--ing">${i.ingredientes}</p>
              <p class="p--precio">${i.precio}</p>
              <i class="far fa-trash-alt trash-icon"></i>
          </div>`);
          TOTAL += parseInt(i.precio);
        }
    } else {
      $('.pedidos__container').append(`
        <h3>Lo siento, aun no agregaste nada. Regresa y arma tu hamburguesa personalizada</h3>
      `)
    }
    this.refresh();
  }

  eliminarPedido(e) {
    if(e.target.classList.contains('trash-icon')){
      $(e.target.parentNode).remove();
      TOTAL -= parseInt(e.target.parentNode.children[2].textContent);

      pedidos = [];

      $.each($('.pedido--tarjeta'), (indexInArray, valueOfElement) => {
          pedidos.push({
              "name" : `${valueOfElement.children[0].textContent}`,
              "ingredientes" : `${valueOfElement.children[1].textContent}`,
              "precio" : `${parseInt(valueOfElement.children[2].textContent)}`
          })
      });
      if($('.pedido--tarjeta').length == 0) {
        localStorage.removeItem('pedidos')
      } else {
        localStorage.setItem('pedidos', JSON.stringify(pedidos));
      }
    }
    this.refresh();
  }

  refresh() {
    $('.span_n').html(`(${pedidos.length})`);
    $('.btn--comprar').text(`Comprar: $${TOTAL}`);
  }
}