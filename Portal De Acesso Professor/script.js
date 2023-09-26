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
        </tr>
    `;

    // Simula dados de alunos e notas para a matéria selecionada (pode ser substituído por dados reais)
    var dadosNotas = [];

    if (materiaSelecionada === "logica") {
        dadosNotas = [
            { aluno: "Aluno 1", nota: 8.5 },
            { aluno: "Aluno 2", nota: 7.0 },
            { aluno: "Aluno 3", nota: 5.5 },
            { aluno: "Aluno 4", nota: 7.0 },
            { aluno: "Aluno 5", nota: 8.5 },
            { aluno: "Aluno 6", nota: 4.0 },
            { aluno: "Aluno 7", nota: 3.5 },
            { aluno: "Aluno 8", nota: 7.0 },

            // Adicione mais alunos e notas conforme necessário
        ];
    } else if (materiaSelecionada === "estrutura") {
        dadosNotas = [
            { aluno: "Aluno 1", nota: 9.0 },
            { aluno: "Aluno 2", nota: 6.5 },
            { aluno: "Aluno 3", nota: 2.5 },
            { aluno: "Aluno 4", nota: 7.0 },
            { aluno: "Aluno 5", nota: 8.5 },
            { aluno: "Aluno 6", nota: 4.0 },
            { aluno: "Aluno 7", nota: 6.5 },
            { aluno: "Aluno 8", nota: 7.0 },

            // Adicione mais alunos e notas conforme necessário
        ];
    }

    // Preenche a tabela com os dados das notas
    for (var i = 0; i < dadosNotas.length; i++) {
        notasTable.innerHTML += `
            <tr>
                <td>${dadosNotas[i].aluno}</td>
                <td>${dadosNotas[i].nota}</td>
            </tr>
        `;
    }
}

// Chama a função mostrarNotas para exibir as notas iniciais
mostrarNotas();

function mostrarFaltas() {
    // Obtém o valor selecionado no dropdown de matérias
    var materiaSelecionada = document.getElementById("disciplinas-faltas").value;

    // Obtém a tabela de faltas
    var faltasTable = document.getElementById("faltas-table");

    // Limpa a tabela de faltas
    faltasTable.innerHTML = "";

    // Adiciona o cabeçalho da tabela de faltas
    faltasTable.innerHTML += `
        <tr>
            <th>Aluno</th>
            <th>Faltas</th>
        </tr>
    `;

    // Simula dados de alunos e faltas para a matéria selecionada (pode ser substituído por dados reais)
    var dadosFaltas = [];

    if (materiaSelecionada === "logica") {
        dadosFaltas = [
            { aluno: "Aluno 1", faltas: 2 },
            { aluno: "Aluno 2", faltas: 3 },
            { aluno: "Aluno 3", faltas: 1 },
            { aluno: "Aluno 4", faltas: 4 },
            { aluno: "Aluno 5", faltas: 0 },
            { aluno: "Aluno 6", faltas: 2 },
            { aluno: "Aluno 7", faltas: 5 },
            { aluno: "Aluno 8", faltas: 1 }
        ];
    } else if (materiaSelecionada === "estrutura") {
        dadosFaltas = [
            { aluno: "Aluno 1", faltas: 1 },
            { aluno: "Aluno 2", faltas: 4 },
            { aluno: "Aluno 3", faltas: 2 },
            { aluno: "Aluno 4", faltas: 3 },
            { aluno: "Aluno 5", faltas: 0 },
            { aluno: "Aluno 6", faltas: 3 },
            { aluno: "Aluno 7", faltas: 2 },
            { aluno: "Aluno 8", faltas: 1 }
        ];
    }

    // Preenche a tabela com os dados de faltas
    for (var i = 0; i < dadosFaltas.length; i++) {
        faltasTable.innerHTML += `
            <tr>
                <td>${dadosFaltas[i].aluno}</td>
                <td>${dadosFaltas[i].faltas}</td>
            </tr>
        `;
    }
}

mostrarFaltas()
