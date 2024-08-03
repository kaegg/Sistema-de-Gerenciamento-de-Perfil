$(document).ready(() => {
    iniciar();
});

function iniciar(){
    exibirSenha();
    exibeModalCartao();
    // validaAtualizacao();
    eventosBotoes();
    exibeModalPix();
}

function exibirSenha(){
    $(".mostrarSenha").on("click", () => {
        var senha = $("#inputSenha");
        var type  = senha.attr("type");

        if(type == "password"){
            senha.attr("type", "text");
        }else{
            senha.attr("type", "password");
        }

        $(".mostrarSenha").toggleClass('glyphicon-eye-open glyphicon-eye-close');
    });
}

function exibeModalCartao(){
    $("#cartao").change(() => {
        var opcaoCartao = $("#cartao").val();

        if (opcaoCartao === "credito" || opcaoCartao === "debito") { 
            if(opcaoCartao === "credito"){
                $("#cartaoModalTitulo").text("Informações do cartão de crédito");
            }else{
                $("#cartaoModalTitulo").text("Informações do cartão de débito");  
            }

            $("#cartaoModal").modal("show");
        }
    });
}

function exibeModalPix(){
    $("#chavePix").change(() => {
        var opcaoCartao = $("#chavePix").val();
        var chave       = $("#chave");

        switch(opcaoCartao){
            case "celular":
                $("#pixTitulo").text("Chave pix - Celular");
                chave.attr("type", "number");
                break;
            case "email":
                $("#pixTitulo").text("Chave pix - E-mail");
                chave.attr("type", "email");
                break;
            case "cpf":
                $("#pixTitulo").text("Chave pix - CPF");
                chave.attr("type", "number");
                break;
            case "aleatoria":
                $("#pixTitulo").text("Chave pix - Aleatória");
                chave.attr("type", "text");
                break;
        }

        $("#pixModal").modal("show");
    });
}

function validaAtualizacao(){
    const form = document.getElementById('updateProfileForm');

    const nameInput = document.getElementById('name');
    const rgInput = document.getElementById('rg');
    const cpfInput = document.getElementById('cpf');
    const addressInput = document.getElementById('address');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    // const creditCardInput = document.getElementById('creditCard');
    // const debitCardInput = document.getElementById('debitCard');
    // const pixKeysInput = document.getElementById('pixKeys');

    // Adicionar máscaras aos campos
    $('#cpf').mask('000.000.000-00');
    $('#rg').mask('00.000.000-0');
    $('#phone').mask('(00)00000-0000');
    // $('#creditCard').mask('0000 0000 0000 0000');
    // $('#debitCard').mask('0000 0000 0000 0000');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let valid = true;

        // Verificar nome (não vazio)
        if (!/^[A-Za-z\s]+$/.test(nameInput.value)) {
            document.getElementById('nameError').textContent = 'Nome inválido';
            valid = false;
        } else {
            document.getElementById('nameError').textContent = '';
        }

        // Verificar RG (exatamente 9 dígitos)
        if (rgInput.value.length == 9) {
            document.getElementById('rgError').textContent = 'RG deve conter exatamente 9 dígitos';
            valid = false;
        } else {
            document.getElementById('rgError').textContent = '';
        }

        // Verificar CPF (exatamente 14 caracteres, incluindo pontos e traço)
        if (cpfInput.value.length !== 14) {
            document.getElementById('cpfError').textContent = 'CPF deve conter exatamente 14 caracteres';
            valid = false;
        } else {
            document.getElementById('cpfError').textContent = '';
        }

        // Verificar endereço (não vazio)
        if (addressInput.value.trim() === '') {
            document.getElementById('addressError').textContent = 'Endereço não pode estar vazio';
            valid = false;
        } else {
            document.getElementById('addressError').textContent = '';
        }

        // Verificar telefone (ao menos 10 dígitos)
        if (phoneInput.value.length < 10) {
            document.getElementById('phoneError').textContent = 'Telefone deve conter ao menos 10 dígitos';
            valid = false;
        } else {
            document.getElementById('phoneError').textContent = '';
        }

        // Verificar e-mail (não vazio)
        if (emailInput.value.trim() === '') {
            document.getElementById('emailError').textContent = 'E-mail não pode estar vazio';
            valid = false;
        } else {
            document.getElementById('emailError').textContent = '';
        }

        // Verificar cartão de crédito (exatamente 19 caracteres, incluindo espaços)
        if (creditCardInput.value.length !== 19) {
            document.getElementById('creditCardError').textContent = 'Cartão inválido';
            valid = false;
        } else {
            document.getElementById('creditCardError').textContent = '';
        }

        // Verificar cartão de débito (exatamente 19 caracteres, incluindo espaços)
        if (debitCardInput.value.length !== 19) {
            document.getElementById('debitCardError').textContent = 'Cartão inválido';
            valid = false;
        } else {
            document.getElementById('debitCardError').textContent = '';
        }

        // Verificar chave(s) Pix (não vazio)
        if (pixKeysInput.value.trim() === '') {
            document.getElementById('pixKeysError').textContent = 'Chave Pix não pode estar vazia';
            valid = false;
        } else {
            document.getElementById('pixKeysError').textContent = '';
        }

        if (valid) {
            // Enviar o formulário
            console.log("Formulário válido e enviado");
            form.submit();
        }
    });
}

function eventosBotoes(){
    $("#btnEntrar").on("click", () => {
        window.open("../../atualizacao.html", "_self");
    });
}