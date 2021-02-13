let ingAdd = $('.btn--add');
let ingRemove = $('.trash-icon');
let ingReset = $('.ing--reset')
let ingContainer = $('.ingredientes__container');
let ingSelect = $('#ingredientes');
let cartAdd = $('.btn--cart');
let pedidos = [];

// Al apretar el boton, muestra el ingrediente
ingAdd.click((e) => { 
    e.preventDefault();
    ingContainer.append(`
    <div class="ingredientes--add">
        <p class="p--ingrediente">${ingSelect.val()}</p>
        <i class="far fa-trash-alt trash-icon"></i>
    </div>`);
});

// Al hacer click en el tacho de basura, el ingrediente se elimina
ingContainer.click((e) => {
    e.preventDefault();
    if(e.target.classList.contains('trash-icon')){ //al pulsarlo devuelve un true
        $(e.target.parentNode).remove(); //busca el elemento padre del objeto clickeado y lo elimina
    }
})

cartAdd.click((e) => {
    e.preventDefault();
    arrIn = []
    $.each($('.p--ingrediente'), (i, v) => { //por cada elemento que tenga esa clase
        arrIn.push(v.textContent) //toma el texto de los elementos y los pushea al array
    });

    if($('#burgerName').val() !== null && arrIn.length > 2) { //Para enviar el pedido se necesita que la hamburguesa tenga un nombre y tenga mas de 2 ingredientes
        pedidos.push({
            "name" : `${$('#burgerName').val()}`,
            "ingredientes" : `${arrIn}`
        })
    } else { // Si no se cumple la condicion le avisamos al cliente
        alert('Por favor, pongale nombre a su hamburguesa y/o elija mas de 2 ingredientes para que podamos procesar su pedido. Gracias!')
    }
// Muestro la cantidad de pedidos
    $('.span_n').html(`(${pedidos.length})`);
// Reseteamos el nombre y los ingredientes
    $('#burgerName').val('');
    ingContainer.children().remove();

    console.log(pedidos)
});

$('.span_n').html(`(${pedidos.length})`); //Esta aca solo para que aparezca el 0

ingReset.click((e) => {
    e.preventDefault()
    ingContainer.children().remove();
})

