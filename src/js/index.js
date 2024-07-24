$(document).ready(() => {
    iniciar();
});

function iniciar(){
    exibirSenha();
}

function exibirSenha(){
    $("#mostrarSenha").on("click", () => {
        var senha = $("#inputSenha");
        var type  = senha.attr("type");

        if(type == "password"){
            senha.attr("type", "text");
        }else{
            senha.attr("type", "password");
        }

        $("#mostrarSenha").toggleClass('glyphicon-eye-open glyphicon-eye-close');
    });
}