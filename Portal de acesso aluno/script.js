
function abrirAba(abaId) {
    const abas = document.querySelectorAll('.aba');
    abas.forEach(aba => {
        if (aba.id === abaId) {
            aba.style.display = 'block';
        } else {
            aba.style.display = 'none';
        }
    });
}


document.querySelector('nav ul').addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
        const alvo = e.target.getAttribute('href').substring(1);
        abrirAba(alvo);
    }
});


const notas = [
    { disciplina: "Calculo 01", nota: "-" },
    { disciplina: "Logica de Programação", nota: 7.0 },
    { disciplina: "Html e Css Básico", nota: 6.5 },
    { disciplina: "Estrutura de Dados", nota: 9.0 },
];


const tabelaNotas = document.getElementById("notas");

notas.forEach(item => {
    const row = tabelaNotas.insertRow();

    const disciplinaCell = row.insertCell(0);
    disciplinaCell.textContent = item.disciplina;

    const notaCell = row.insertCell(1);
    notaCell.textContent = item.nota;
});


const perfilForm = document.getElementById("perfil-form");


const nomeInput = document.getElementById("nome");
const emailInput = document.getElementById("email");
const dataInput = document.getElementById("dataNascimento");



function gerarDataAleatoria() {
    const data = new Date(+(new Date()) - Math.floor(Math.random() * 31536000000000));
    const ano = Math.floor(Math.random() * (2000 - 1900 + 1)) + 1930;
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const dia = String(data.getDate()).padStart(2, "0");
    return `${ano}-${mes}-${dia}`;
}

dataInput.value = gerarDataAleatoria();


perfilForm.addEventListener("submit", function (e) {
    e.preventDefault();

    alert("Perfil atualizado com sucesso!");
});


abrirAba('boletim');


function carregarInformacoesPerfil() {
    const nomeInput = document.getElementById("nome");
    const dataNascimentoInput = document.getElementById("dataNascimento");
    const enderecoInput = document.getElementById("endereco");
    const telefoneInput = document.getElementById("telefone");
    const emailInput = document.getElementById("email");

    nomeInput.value = "Felipe Pereira";
    emailInput.value = "felipe.pereira@aluno.com";
    dataNascimentoInput.value = "1995-01-01";
    enderecoInput.value = "Rua das Palmeiras 123,Bairro Jardim Tropical,Cidade: Salvador,CEP: 50.000-000,Bahia";
    telefoneInput.value = "(71) 9 8239-7237";
}


carregarInformacoesPerfil();


function adicionarAviso(mensagem) {
    const avisosContent = document.getElementById("avisos-content");
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    li.textContent = mensagem;
    ul.appendChild(li);
    avisosContent.innerHTML = '';
    avisosContent.appendChild(ul);
}


adicionarAviso("Novo aviso: Aula extra na sexta-feira.");


const telefoneInput = document.getElementById('telefone');


telefoneInput.addEventListener('input', function () {

    const numeroTelefone = this.value.replace(/\D/g, '');


    if (numeroTelefone.length >= 10) {

        const numeroFormatado = `(${numeroTelefone.slice(0, 2)}) ${numeroTelefone.slice(2, 7)}-${numeroTelefone.slice(7, 11)}`;


        this.value = numeroFormatado;
    } else {

        this.value = numeroTelefone;
    }
});

const comentarios = [
    { nome: "João", comentario: "Ótima aula!" },
    { nome: "Maria", comentario: "Gostei muito do vídeo." },
    { nome: "Carlos", comentario: "Esse assunto é muito importante." },
];

function carregarComentarios() {
    const listaComentarios = document.getElementById("lista-comentarios");


    listaComentarios.innerHTML = '';

    comentarios.forEach(comentario => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${comentario.nome}:</strong> ${comentario.comentario}`;
        listaComentarios.appendChild(li);
    });
}


function adicionarComentario(nome, comentario) {
    comentarios.push({ nome, comentario });
    carregarComentarios();
}


const novoComentarioForm = document.getElementById("novo-comentario-form");

novoComentarioForm.addEventListener("submit", function (e) {
    e.preventDefault();


    const nome = nomeInput.value;
    const comentario = document.getElementById("novo-comentario").value;


    adicionarComentario(nome, comentario);


    document.getElementById("novo-comentario").value = '';
});

carregarComentarios();
