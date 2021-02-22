$('.btn--vaciar').click( (e) => { 
    e.preventDefault();
    $('.pedidos__container').children().remove();
    localStorage.removeItem('pedidos');
});

$('.btn--comprar').click( (e) => { 
    e.preventDefault();
    $('.pedidos__container').children().remove();
    localStorage.removeItem('pedidos');
    $('.span_n').html(`(${pedidos.length})`);
});

$(document).ready( () => {
    let TOTAL = 0;
    for(let i of pedidos){
        for (const j in i.ingredientes) {
            console.log(j.search('lechuga'))
        }
        console.log(i.ingredientes);
        $('.pedidos__container').append(`
        <div class="pedido--tarjeta">
            <h3 class="h3--name">${i.name}</h3>
            <p class="p--ing">${i.ingredientes}</p>
            <p class="p--precio">${i.precio}</p>
        </div>`);
        TOTAL += i.precio;
    }
    $('.btn--comprar').text(`Comprar: $${TOTAL}`);
});