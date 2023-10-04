// Função para alternar entre abas
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
const nomeInput = document.getElementById("nome");
const emailInput = document.getElementById("email");
const dataInput = document.getElementById("dataNascimento");
const enderecoInput = document.getElementById("endereco");
const telefoneInput = document.getElementById("telefone");

nomeInput.value = "Thiago Rodrigues";
emailInput.value = "thiago.rodrigues@professor.com";
enderecoInput.value = "Rua da Amizade, 123, Bairro da Alegria, Cidade: Salvador, CEP: 40.000-000, Bahia";
telefoneInput.value = "(71) 98765-4321";

function gerarDataAleatoria() {
    const data = new Date(+(new Date()) - Math.floor(Math.random() * 31536000000000));
    const ano = Math.floor(Math.random() * (2000 - 1900 + 1)) + 1930;
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const dia = String(data.getDate()).padStart(2, "0");
    return `${ano}-${mes}-${dia}`;
}

dataInput.value = gerarDataAleatoria();


function mostrarNotas() {

    var materiaSelecionada = document.getElementById("materias").value;


    var notasTable = document.getElementById("notas-table");


    notasTable.innerHTML = "";


    notasTable.innerHTML += `
        <tr>
            <th>Aluno</th>
            <th>Nota</th>
            <th>Ações</th> <!-- Coluna para botões de ação -->
        </tr>
    `;


    var dadosNotas = [];

    if (materiaSelecionada === "logica") {
        dadosNotas = [
            { aluno: "Amanda Almeida", nota: 8.5 },
            { aluno: "Ana Souza", nota: 8.5 },
            { aluno: "Beatriz Martins", nota: 7.0 },
            { aluno: "Bruno Rodrigues", nota: 5.5 },
            { aluno: "Camila Costa", nota: 7.0 },
            { aluno: "Felipe Pereira", nota: 4.0 },
            { aluno: "Gabriel Moreira", nota: 3.5 },
            { aluno: "Guilherme Ferreira", nota: 7.0 }

        ];
    } else if (materiaSelecionada === "estrutura") {
        dadosNotas = [
            { aluno: "Amanda Almeida", nota: 8.0 },
            { aluno: "Ana Souza", nota: 7.5 },
            { aluno: "Beatriz Martins", nota: 4.0 },
            { aluno: "Bruno Rodrigues", nota: 3.5 },
            { aluno: "Camila Costa", nota: 9.0 },
            { aluno: "Felipe Pereira", nota: 4.5 },
            { aluno: "Gabriel Moreira", nota: 7.5 },
            { aluno: "Guilherme Ferreira", nota: 6.0 }

        ];
    }


    for (var i = 0; i < dadosNotas.length; i++) {
        notasTable.innerHTML += `
            <tr>
                <td>${dadosNotas[i].aluno}</td>
                <td><input type="number" id="nota-${i}" value="${dadosNotas[i].nota}"></td>
                <td><button onclick="atualizarNota(${i})">Salvar</button></td> <!-- Botão para salvar a nota -->
            </tr>
        `;
    }
}


function atualizarNota(indice) {
    var novaNota = document.getElementById(`nota-${indice}`).value;

    mostrarNotas();
}

s
mostrarNotas();


function mostrarFaltas() {

    var materiaSelecionada = document.getElementById("disciplinas-faltas").value;


    var faltasTable = document.getElementById("faltas-table");


    faltasTable.innerHTML = "";


    faltasTable.innerHTML += `
        <tr>
            <th>Aluno</th>
            <th>Faltas</th>
            <th>Ações</th> <!-- Coluna para botões de ação -->
        </tr>
    `;

    var dadosFaltas = [];

    if (materiaSelecionada === "logica") {
        dadosFaltas = [
            { aluno: "Amanda Almeida", faltas: 2 },
            { aluno: "Ana Souza", faltas: 3 },
            { aluno: "Beatriz Martins", faltas: 1 },
            { aluno: "Bruno Rodrigues", faltas: 4 },
            { aluno: "Camila Costa", faltas: 0 },
            { aluno: "Felipe Pereira", faltas: 2 },
            { aluno: "Gabriel Moreira", faltas: 5 },
            { aluno: "Guilherme Ferreira", faltas: 1 }
        ];
    } else if (materiaSelecionada === "estrutura") {
        dadosFaltas = [
            { aluno: "Amanda Almeida", faltas: 1 },
            { aluno: "Ana Souza", faltas: 4 },
            { aluno: "Beatriz Martins", faltas: 2 },
            { aluno: "Bruno Rodrigues", faltas: 3 },
            { aluno: "Camila Costa", faltas: 0 },
            { aluno: "Felipe Pereira", faltas: 3 },
            { aluno: "Gabriel Moreira", faltas: 2 },
            { aluno: "Guilherme Ferreira", faltas: 1 }
        ];
    }


    for (var i = 0; i < dadosFaltas.length; i++) {
        faltasTable.innerHTML += `
            <tr>
                <td>${dadosFaltas[i].aluno}</td>
                <td><input type="number" id="faltas-${i}" value="${dadosFaltas[i].faltas}"></td>
                <td><button onclick="atualizarFaltas(${i})">Salvar</button></td> <!-- Botão para salvar as faltas -->
            </tr>
        `;
    }
}

const aulasList = document.querySelector("#aulas ul");
const aulaUploadInput = document.querySelector("#aula-upload");
const aulaSubmitButton = document.querySelector("#aula-submit");

aulaSubmitButton.addEventListener("click", function () {
    const nomeAula = aulaUploadInput.value;
    if (nomeAula) {

        const novoItem = document.createElement("li");
        novoItem.innerHTML = `<a href="${nomeAula}">${nomeAula}</a>`;
        aulasList.appendChild(novoItem);


        aulaUploadInput.value = "";
    }
});


document.addEventListener("DOMContentLoaded", function () {

    const novoAvisoForm = document.getElementById("novo-aviso-form");


    const listaAvisos = document.getElementById("lista-avisos");


    novoAvisoForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const novoAvisoInput = document.getElementById("novo-aviso");
        const novoAvisoTexto = novoAvisoInput.value;

        if (novoAvisoTexto.trim() !== "") {

            const novoAvisoItem = document.createElement("li");
            novoAvisoItem.textContent = novoAvisoTexto;


            listaAvisos.appendChild(novoAvisoItem);


            novoAvisoInput.value = "";
        }
    });
});

// Array de comentários fictícios
const comentarios = [
    { nome: "João", comentario: "Ótima aula!" },
    { nome: "Maria", comentario: "Gostei muito do vídeo." },
    { nome: "Carlos", comentario: "Esse assunto é muito importante." },
];

// Função para carregar os comentários na lista
function carregarComentarios() {
    const listaComentarios = document.getElementById("lista-comentarios");

    // Limpa a lista atual
    listaComentarios.innerHTML = '';

    // Adiciona os comentários à lista
    comentarios.forEach(comentario => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${comentario.nome}:</strong> ${comentario.comentario}`;
        listaComentarios.appendChild(li);
    });
}

// Função para adicionar um novo comentário
function adicionarComentario(nome, comentario) {
    comentarios.push({ nome, comentario });
    carregarComentarios();
}

// Formulário para adicionar novo comentário
const novoComentarioForm = document.getElementById("novo-comentario-form");

novoComentarioForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Obtém os valores do formulário
    const nome = "Seu Nome"; // Você pode substituir pelo nome do usuário logado
    const comentario = document.getElementById("novo-comentario").value;

    // Adiciona o novo comentário
    adicionarComentario(nome, comentario);

    // Limpa o campo de texto
    document.getElementById("novo-comentario").value = '';
});

// Chama a função para carregar os comentários na inicialização
carregarComentarios();

// No seu arquivo "script.js"

// 1. Estrutura de dados para armazenar as aulas
const aulas = [
    { nome: "Aula 1", link: "https://www.youtube.com/aula1" },
    { nome: "Aula 2", link: "https://www.youtube.com/aula2" },
];

// 2. Função para exibir as aulas na lista
function exibirAulas() {
    const listaAulas = document.getElementById("lista-aulas");

    // Limpa a lista atual
    listaAulas.innerHTML = '';

    // Percorre o array de aulas e cria elementos HTML para cada aula
    aulas.forEach(aula => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = aula.link;
        a.textContent = aula.nome;
        li.appendChild(a);
        listaAulas.appendChild(li);
    });
}

// Chama a função para exibir as aulas inicialmente
exibirAulas();

// 3. Evento de envio do formulário para adicionar novas aulas
const novoAulaForm = document.getElementById("upload-aulas-form");

novoAulaForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nomeAula = document.getElementById("nova-aula").value;
    const linkAula = document.getElementById("link-aula").value;

    // Adiciona a nova aula ao array de aulas
    aulas.push({ nome: nomeAula, link: linkAula });

    // Limpa os campos do formulário
    document.getElementById("nova-aula").value = '';
    document.getElementById("link-aula").value = '';

    // Chama a função para exibir as aulas atualizadas
    exibirAulas();
});
