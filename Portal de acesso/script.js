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

// Dados fictícios do boletim
const notas = [
    { disciplina: "Matemática", nota: 8.5 },
    { disciplina: "História", nota: 7.0 },
    { disciplina: "Geografia", nota: 6.5 },
    { disciplina: "Inglês", nota: 9.0 },
];

// Carrega as notas na tabela do boletim
const tabelaNotas = document.getElementById("notas");

notas.forEach(item => {
    const row = tabelaNotas.insertRow();

    const disciplinaCell = row.insertCell(0);
    disciplinaCell.textContent = item.disciplina;

    const notaCell = row.insertCell(1);
    notaCell.textContent = item.nota;
});

// Formulário de perfil
const perfilForm = document.getElementById("perfil-form");

// Carrega dados fictícios no formulário de perfil
const nomeInput = document.getElementById("nome");
const emailInput = document.getElementById("email");
const idadeInput = document.getElementById("idade");

// Simula dados do perfil do aluno
nomeInput.value = "João da Silva";
emailInput.value = "joao.silva@example.com";
idadeInput.value = 20;

// Evento para salvar o perfil
perfilForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // Simula o envio dos dados do formulário
    alert("Perfil atualizado com sucesso!");
});

// Inicialmente, mostra a aba "Boletim"
abrirAba('boletim');

// Função para carregar informações fictícias do perfil
function carregarInformacoesPerfil() {
    const nomeInput = document.getElementById("nome");
    const dataNascimentoInput = document.getElementById("dataNascimento");
    const enderecoInput = document.getElementById("endereco");
    const telefoneInput = document.getElementById("telefone");
    const emailInput = document.getElementById("email");

    // Simule carregar as informações do perfil
    nomeInput.value = "João da Silva";
    dataNascimentoInput.value = "1995-01-01";
    enderecoInput.value = "Rua Exemplo, 123";
    telefoneInput.value = "1234567890";
    emailInput.value = "joao@example.com";
}

// Chama a função para carregar informações do perfil na inicialização
carregarInformacoesPerfil();

// Função para adicionar mensagem de aviso na aba "Avisos"
function adicionarAviso(mensagem) {
    const avisosContent = document.getElementById("avisos-content");
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    li.textContent = mensagem;
    ul.appendChild(li);
    avisosContent.innerHTML = '';
    avisosContent.appendChild(ul);
}

// Adicione um novo aviso chamando a função
adicionarAviso("Novo aviso: Aula extra na sexta-feira.");
