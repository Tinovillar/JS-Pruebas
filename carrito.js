let TOTAL = 0;

$('.btn--vaciar').click( (e) => { 
    e.preventDefault();
    $('.pedidos__container').children().remove();
    localStorage.removeItem('pedidos');
    pedidos = [];
    $('.span_n').html(`(${pedidos.length})`);
    $('.btn--comprar').text(`Comprar: $${0}`)
});

$('.btn--comprar').click( (e) => { 
    e.preventDefault();
    $('.pedidos__container').children().remove();
    $('.btn--comprar').text(`Comprar: $0`);
    localStorage.removeItem('pedidos');
    $('.span_n').html(`(${pedidos.length})`);
});

$(document).ready( () => {
    for(let i of pedidos){
        $('.pedidos__container').append(`
        <div class="pedido--tarjeta">
            <h3 class="h3--name">${i.name}</h3>
            <p class="p--ing">${i.ingredientes}</p>
            <p class="p--precio">${i.precio}</p>
            <i class="far fa-trash-alt trash-icon"></i>
        </div>`);
        TOTAL += i.precio;
    }
    $('.btn--comprar').text(`Comprar: $${TOTAL}`);
});

$('.pedidos__container').click((e) => {
    e.preventDefault();
    if(e.target.classList.contains('trash-icon')){ //al pulsarlo devuelve un true
        $(e.target.parentNode).remove(); //busca el elemento padre del objeto clickeado y lo elimina
        TOTAL -= parseInt(e.target.parentNode.children[2].textContent);

        pedidos = [];

        $.each($('.pedido--tarjeta'), (indexInArray, valueOfElement) => {
            pedidos.push({
                "name" : `${valueOfElement.children[0].textContent}`,
                "ingredientes" : `${valueOfElement.children[1].textContent}`,
                "precio" : `${parseInt(valueOfElement.children[2].textContent)}`
            })
        });
    }
    localStorage.setItem('pedidos', JSON.stringify(pedidos));
    $('.span_n').html(`(${pedidos.length})`);
    $('.btn--comprar').text(`Comprar: $${TOTAL}`);
})