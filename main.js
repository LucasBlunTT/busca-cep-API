const inputCep = document.getElementById('js-input-cep');
const btnBuscarCep = document.getElementById('js-btn-buscar-cep');

const inputBairro = document.getElementById('js-input-bairro');
const inputcepDados = document.getElementById('js-input-cep-dados');
const inputLogradouro = document.getElementById('js-input-logradouro');
const inputEstado = document.getElementById('js-input-estado');

const areaDados = document.getElementById('js-dados');
const msgErro = document.getElementById('js-msg-error');

btnBuscarCep.addEventListener('click', () => {
    if (inputCep.value != "") {

        fetch(`https://viacep.com.br/ws/${inputCep.value}/json/`)
        .then(response => response.json())
        .then(json => {
            inputBairro.value = json.bairro;
            inputcepDados.value = json.cep;
            inputLogradouro.value = json.logradouro;
            inputEstado.value = json.uf;

            areaDados.style.display = 'block'
            msgErro.style.display = 'none'
        });

    } else {
        inputBairro.value = "";
        inputcepDados.value = "";
        inputLogradouro.value = "";
        inputEstado.value = "";

        areaDados.style.display = 'none'
        msgErro.style.display = 'block'
    }
})

