let ingJSON = [];
let ingOption = '';

$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "ingredients.json",
        dataType: "json",
        success: function (datos) {
            ingJSON = datos;
            for(let i = 0; i < ingJSON.length; i++) {
                ingOption += `<option>${ingJSON[i].name}</option>`
            }
            $('#ingredientes').append(ingOption);
        }
    });    
});