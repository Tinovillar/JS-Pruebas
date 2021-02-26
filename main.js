let pedidos = [];

// Al apretar el boton, muestra el ingrediente
$('.btn--add').click((e) => { 
    e.preventDefault();
    $('.ingredientes__container').append(`
    <div class="ingredientes--add">
        <p class="p--ingrediente">${$('#ingredientes').val()}</p>
        <i class="far fa-trash-alt trash-icon"></i>
    </div>`);
});

// Al hacer click en el tacho de basura, el ingrediente se elimina
$('.ingredientes__container').click((e) => {
    e.preventDefault();
    if(e.target.classList.contains('trash-icon')){ //al pulsarlo devuelve un true
        $(e.target.parentNode).remove(); //busca el elemento padre del objeto clickeado y lo elimina
    }
})

$('.btn--cart').click((e) => {
    e.preventDefault();
    arrIn = [];
    let precioBurger = 0;
    $.each($('.p--ingrediente'), (i, v) => { //por cada elemento que tenga esa clase
        arrIn.push(v.textContent) //toma el texto de los elementos y los pushea al array

        for(let iJson of ingJSON){
            if(v.textContent == iJson.name){
                precioBurger += parseInt(iJson.precio);
            }
        }
    });

    if($('#burgerName').val() !== '' && arrIn.length > 2) { //Para enviar el pedido se necesita que la hamburguesa tenga un nombre y tenga mas de 2 ingredientes
        pedidos.push({
            "name" : `${$('#burgerName').val()}`,
            "ingredientes" : `${arrIn}`,
            "precio" : precioBurger
        })
    } else { // Si no se cumple la condicion le avisamos al cliente
        alert('Por favor, pongale nombre a su hamburguesa y/o elija mas de 2 ingredientes para que podamos procesar su pedido. Gracias!')
    }
// Muestro la cantidad de pedidos
    $('.span_n').html(`(${pedidos.length})`);
// Guardo en el local storage los pedidos
    localStorage.setItem('pedidos', JSON.stringify(pedidos));

    console.log(pedidos)
});
// Resetea el carrito
$('.ing--reset').click((e) => {
    e.preventDefault()
    $('.ingredientes__container').children().remove();
    $('#burgerName').val('');
})

// Carga los pedidos desde el local storage
$(document).on('DOMContentLoaded', (e) => {
    e.preventDefault();
    if(localStorage.getItem('pedidos')) {   
        pedidos = $.parseJSON(localStorage.getItem('pedidos'));
    }
    $('.span_n').html(`(${pedidos.length})`);
})