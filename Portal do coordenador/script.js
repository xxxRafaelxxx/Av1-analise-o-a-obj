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

// Evento para alternar entre abas quando os links são clicados
document.querySelector('nav ul').addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
        const alvo = e.target.getAttribute('href').substring(1); // Remove o caractere "#" do href
        abrirAba(alvo);
    }
});
const nomeInput = document.getElementById("nome");
const emailInput = document.getElementById("email");
const dataInput = document.getElementById("dataNascimento");
const enderecoInput = document.getElementById("endereco");
const telefoneInput = document.getElementById("telefone");

// Simula dados do perfil do aluno
nomeInput.value = "Carlos Rodrigues";
emailInput.value = "carlos.rodrigues@coordenador.com";
enderecoInput.value = "Rua das Palmeiras 123, Bairro Jardim Tropical, Cidade: Salvador, CEP: 40.000-000, Bahia"
telefoneInput.value = "(71) 9 8888-8888"

function gerarDataAleatoria() {
    const data = new Date(+(new Date()) - Math.floor(Math.random() * 31536000000000)); // 31536000000000 milissegundos equivalem a um ano
    const ano = Math.floor(Math.random() * (2000 - 1900 + 1)) + 1930; // Gere um ano aleatório entre 1900 e 2000
    const mes = String(data.getMonth() + 1).padStart(2, "0"); // Mês começa do zero
    const dia = String(data.getDate()).padStart(2, "0");
    return `${ano}-${mes}-${dia}`;
}

dataInput.value = gerarDataAleatoria();

// Função para carregar notas com base na disciplina selecionada
function mostrarNotas() {
    // Obtém o valor selecionado no dropdown de matérias
    var materiaSelecionada = document.getElementById("materias").value;

    // Obtém a tabela de notas
    var notasTable = document.getElementById("notas-table");

    // Limpa a tabela de notas
    notasTable.innerHTML = "";

    // Adiciona o cabeçalho da tabela
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
            // Adicione mais alunos e notas conforme necessário
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
            // Adicione mais alunos e notas conforme necessário
        ]
    } else if (materiaSelecionada === "poo") {
        dadosNotas = [
            { aluno: "Amanda Almeida", nota: "-" },
            { aluno: "Ana Souza", nota: "-" },
            { aluno: "Beatriz Martins", nota: "-" },
            { aluno: "Bruno Rodrigues", nota: "-" },
            { aluno: "Camila Costa", nota: "-" },
            { aluno: "Felipe Pereira", nota: "-" },
            { aluno: "Gabriel Moreira", nota: "-" },
            { aluno: "Guilherme Ferreira", nota: "-" }
            // Adicione mais alunos e notas conforme necessário
        ];
    } else if (materiaSelecionada === "htmlECss") {
        dadosNotas = [
            { aluno: "Amanda Almeida", nota: 8.0 },
            { aluno: "Ana Souza", nota: 7.5 },
            { aluno: "Beatriz Martins", nota: 4.0 },
            { aluno: "Bruno Rodrigues", nota: 3.5 },
            { aluno: "Camila Costa", nota: 9.0 },
            { aluno: "Felipe Pereira", nota: 4.5 },
            { aluno: "Gabriel Moreira", nota: 7.5 },
            { aluno: "Guilherme Ferreira", nota: 6.0 }
            // Adicione mais alunos e notas conforme necessário
        ]
    } else if (materiaSelecionada === "calculo_01") {
        dadosNotas = [
            { aluno: "Amanda Almeida", nota: 8.0 },
            { aluno: "Ana Souza", nota: 7.5 },
            { aluno: "Beatriz Martins", nota: 4.0 },
            { aluno: "Bruno Rodrigues", nota: 3.5 },
            { aluno: "Camila Costa", nota: 9.0 },
            { aluno: "Felipe Pereira", nota: 4.5 },
            { aluno: "Gabriel Moreira", nota: 7.5 },
            { aluno: "Guilherme Ferreira", nota: 6.0 }
            // Adicione mais alunos e notas conforme necessário
        ]
    } else if (materiaSelecionada === "calculo_02") {
        dadosNotas = [
            { aluno: "Amanda Almeida", nota: "-" },
            { aluno: "Ana Souza", nota: "-" },
            { aluno: "Beatriz Martins", nota: "-" },
            { aluno: "Bruno Rodrigues", nota: "-" },
            { aluno: "Camila Costa", nota: "-" },
            { aluno: "Felipe Pereira", nota: "-" },
            { aluno: "Gabriel Moreira", nota: "-" },
            { aluno: "Guilherme Ferreira", nota: "-" }
            // Adicione mais alunos e notas conforme necessário
        ]
    };

    // Preenche a tabela com os dados das notas e campos de entrada para editar
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

// Função para atualizar a nota
function atualizarNota(indice) {
    var novaNota = document.getElementById(`nota-${indice}`).value;
    // Faça o processamento necessário para atualizar a nota no servidor ou armazenamento local
    // Pode ser uma chamada AJAX ou outra forma de atualização

    // Atualiza a tabela de notas
    mostrarNotas();
}


mostrarNotas();


function mostrarFaltas() {

    var materiaSelecionada = document.getElementById("disciplinas-faltas").value;


    var faltasTable = document.getElementById("faltas-table");


    faltasTable.innerHTML = "";

    // Adiciona o cabeçalho da tabela de faltas
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
    } else if (materiaSelecionada === "poo") {
        dadosFaltas = [
            { aluno: "Amanda Almeida", faltas: 0 },
            { aluno: "Ana Souza", faltas: 0 },
            { aluno: "Beatriz Martins", faltas: 0 },
            { aluno: "Bruno Rodrigues", faltas: 0 },
            { aluno: "Camila Costa", faltas: 0 },
            { aluno: "Felipe Pereira", faltas: 0 },
            { aluno: "Gabriel Moreira", faltas: 0 },
            { aluno: "Guilherme Ferreira", faltas: 0 }
        ];
    } else if (materiaSelecionada === "htmlECss") {
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
    } else if (materiaSelecionada === "calculo_01") {
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
    } else if (materiaSelecionada === "calculo_02") {
        dadosFaltas = [
            { aluno: "Amanda Almeida", faltas: 0 },
            { aluno: "Ana Souza", faltas: 0 },
            { aluno: "Beatriz Martins", faltas: 0 },
            { aluno: "Bruno Rodrigues", faltas: 0 },
            { aluno: "Camila Costa", faltas: 0 },
            { aluno: "Felipe Pereira", faltas: 0 },
            { aluno: "Gabriel Moreira", faltas: 0 },
            { aluno: "Guilherme Ferreira", faltas: 0 }
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

// Função para atualizar as faltas
function atualizarFaltas(indice) {
    var novasFaltas = document.getElementById(`faltas-${indice}`).value;
    // Faça o processamento necessário para atualizar as faltas no servidor ou armazenamento local
    // Pode ser uma chamada AJAX ou outra forma de atualização

    // Atualiza a tabela de faltas
    mostrarFaltas();
}


mostrarFaltas();

// Adiciona a funcionalidade de upload de aulas
const aulasList = document.querySelector("#aulas ul");
const aulaUploadInput = document.querySelector("#aula-upload");
const aulaSubmitButton = document.querySelector("#aula-submit");

aulaSubmitButton.addEventListener("click", function () {
    const nomeAula = aulaUploadInput.value;
    if (nomeAula) {
        // Crie um novo elemento de lista e adicione-o à lista de aulas
        const novoItem = document.createElement("li");
        novoItem.innerHTML = `<a href="${nomeAula}">${nomeAula}</a>`;
        aulasList.appendChild(novoItem);

        // Limpe o campo de upload
        aulaUploadInput.value = "";
    }
});

// Adicione o seguinte código JavaScript ao seu script.js para manipular os avisos
document.addEventListener("DOMContentLoaded", function () {
    // Seleciona o formulário de novo aviso
    const novoAvisoForm = document.getElementById("novo-aviso-form");

    // Seleciona a lista de avisos
    const listaAvisos = document.getElementById("lista-avisos");

    // Adiciona um evento de envio ao formulário de novo aviso
    novoAvisoForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Impede o envio padrão do formulário

        // Obtém o valor do novo aviso do campo de entrada
        const novoAvisoInput = document.getElementById("novo-aviso");
        const novoAvisoTexto = novoAvisoInput.value;

        if (novoAvisoTexto.trim() !== "") {
            // Cria um novo elemento de lista (li) para o aviso
            const novoAvisoItem = document.createElement("li");
            novoAvisoItem.textContent = novoAvisoTexto;

            // Adiciona o novo aviso à lista de avisos
            listaAvisos.appendChild(novoAvisoItem);

            // Limpa o campo de entrada
            novoAvisoInput.value = "";
        }
    });
});

document.querySelector('nav ul').addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
        const alvo = e.target.getAttribute('href').substring(1); // Remove o caractere "#" do href
        abrirAba(alvo);
    }
});

// Evento para matricular alunos quando o formulário de matrícula é enviado
document.getElementById("matricular-alunos-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores selecionados no formulário
    const disciplinaSelecionada = document.getElementById("disciplinas-selecionadas").value;
    const alunoSelecionado = document.getElementById("alunos-selecionados").value;

    // Realize o processamento necessário para matricular o aluno na disciplina
    // Isso pode incluir uma chamada AJAX para o servidor ou outra lógica de matrícula

    // Exemplo de mensagem de sucesso (substitua por sua lógica real)
    alert(`Aluno ${alunoSelecionado} matriculado na disciplina ${disciplinaSelecionada}.`);

    // Limpa o formulário após a matrícula
    document.getElementById("matricular-alunos-form").reset();
});
