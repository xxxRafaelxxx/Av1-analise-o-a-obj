function validarCadastro() {

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const repetirSenha = document.getElementById("repetirSenha").value;
    const telefone = document.getElementById("telefone").value;
    const cpf = document.getElementById("cpf").value;
    const cep = document.getElementById("cep").value;
    const cidadeEstado = document.getElementById("cidadeEstado").value;
    const nascimento = document.getElementById("nascimento").value;
    const sexo = document.getElementById("sexo").value;

    if (nome.trim() === "") {
        alert("Por favor, preencha o campo Nome Completo.");
        return;
    }

    if (email.trim() === "") {
        alert("Por favor, preencha o campo Email.");
        return;
    }

    if (senha.trim() === "") {
        alert("Por favor, preencha o campo Senha.");
        return;
    }
    if (repetirSenha.trim() === "") {
        alert("Por favor, preencha o campo Repetir Senha.");
        return;
    }
    if (nascimento.trim() === "") {
        alert("Por favor, preencha o campo Nascimento.");
        return;
    }
    if (cpf.trim() === "") {
        alert("Por favor, preencha o campo CPF.");
        return;
    }
    if (cidadeEstado.trim() === "") {
        alert("Por favor, preencha o campo Cidade e estado.");
        return;
    }
    if (senha !== repetirSenha) {
        alert("As senhas não coincidem. Por favor, digite a mesma senha nos dois campos.");
        return;
    }
    function validarSenha(senha) {

        if (/\s/.test(senha)) {
            return false;
        }

        if (/(\w)\1{2,}/.test(senha)) {
            return false;
        }

        if (senha.length > 16) {
            alert("A senha deve ter no máximo 16 caracteres")
            return;
        }

        if (senha.length < 8) {
            alert("A senha deve ter pelo menos 8 caracteres")
            return;
        }

        if (String(senha).includes(" ")) {
            alert("A senha não pode conter espaços em branco")
            return;
        }

        redirectToLoginPage();
    }
    validarSenha(senha);
};


const cpfInput = document.getElementById("cpf");


cpfInput.addEventListener("input", function () {

    let cpfValue = cpfInput.value.replace(/\D/g, '');


    if (cpfValue.length > 11) {
        cpfValue = cpfValue.substring(0, 11);
    }

    let formattedCPF = "";
    for (let i = 0; i < cpfValue.length; i++) {
        formattedCPF += cpfValue[i];
        if (i === 2 || i === 5) {
            formattedCPF += ".";
        } else if (i === 8) {
            formattedCPF += "-";
        }
    }


    cpfInput.value = formattedCPF;
});


const cepInput = document.getElementById("cep");


cepInput.addEventListener("input", function () {

    let cepValue = cepInput.value.replace(/\D/g, '');


    if (cepValue.length > 8) {
        cepValue = cepValue.substring(0, 8);
    }


    let formattedCEP = "";
    for (let i = 0; i < cepValue.length; i++) {
        formattedCEP += cepValue[i];
        if (i === 4 && cepValue.length > 5) {
            formattedCEP += "-";
        }
    }


    cepInput.value = formattedCEP;
});


const telefoneInput = document.getElementById("telefone");


telefoneInput.addEventListener("input", function () {

    let telefoneValue = telefoneInput.value.replace(/\D/g, '');


    if (telefoneValue.length > 11) {
        telefoneValue = telefoneValue.substring(0, 11);
    }


    let formattedTelefone = "(";

    for (let i = 0; i < telefoneValue.length; i++) {
        formattedTelefone += telefoneValue[i];
        if (i === 1) {
            formattedTelefone += ") ";
        } else if (i === 6 && telefoneValue.length > 7) {
            formattedTelefone += " ";
        } else if (i === 6) {
            formattedTelefone += "-";
        }
    }


    telefoneInput.value = formattedTelefone;
});


const cidadeEstadoInput = document.getElementById("cidadeEstado");


cidadeEstadoInput.addEventListener("blur", function () {

    const cidadeEstadoValue = cidadeEstadoInput.value;


    const partes = cidadeEstadoValue.split("/");


    if (partes.length >= 2) {
        const cidade = partes[0].trim();
        const estado = partes[1].trim();


        const estadoFormatado = estado.toUpperCase();


        cidadeEstadoInput.value = `${cidade} / ${estadoFormatado}`;
    }
});


function redirectToLoginPage() {

    var newPageURL = '../Tela de login/tela_de_login.html';
    window.location.href = newPageURL;
}


