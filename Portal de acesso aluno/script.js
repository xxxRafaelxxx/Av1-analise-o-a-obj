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
    { disciplina: "Calculo 01", nota: "-" },
    { disciplina: "Logica de Programação", nota: 7.0 },
    { disciplina: "Html e Css Básico", nota: 6.5 },
    { disciplina: "Estrutura de Dados", nota: 9.0 },
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
const dataInput = document.getElementById("dataNascimento");



function gerarDataAleatoria() {
    const data = new Date(+(new Date()) - Math.floor(Math.random() * 31536000000000)); // 31536000000000 milissegundos equivalem a um ano
    const ano = Math.floor(Math.random() * (2000 - 1900 + 1)) + 1930; // Gere um ano aleatório entre 1900 e 2000
    const mes = String(data.getMonth() + 1).padStart(2, "0"); // Mês começa do zero
    const dia = String(data.getDate()).padStart(2, "0");
    return `${ano}-${mes}-${dia}`;
}

dataInput.value = gerarDataAleatoria();

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

    nomeInput.value = "Felipe Pereira";
    emailInput.value = "felipe.pereira@aluno.com";
    dataNascimentoInput.value = "1995-01-01";
    enderecoInput.value = "Rua das Palmeiras 123,Bairro Jardim Tropical,Cidade: Salvador,CEP: 50.000-000,Bahia";
    telefoneInput.value = "(71) 9 8239-7237";
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

// Obtém o elemento de entrada de telefone
const telefoneInput = document.getElementById('telefone');

// Adiciona um ouvinte de evento 'input' para o campo de telefone
telefoneInput.addEventListener('input', function () {
    // Remove todos os caracteres não numéricos do valor de entrada
    const numeroTelefone = this.value.replace(/\D/g, '');

    // Verifica se o número de telefone tem pelo menos 10 dígitos
    if (numeroTelefone.length >= 10) {
        // Formata o número de telefone como (XX) XXXXX-XXXX
        const numeroFormatado = `(${numeroTelefone.slice(0, 2)}) ${numeroTelefone.slice(2, 7)}-${numeroTelefone.slice(7, 11)}`;

        // Define o valor formatado de volta no campo de telefone
        this.value = numeroFormatado;
    } else {
        // Se o número não tiver pelo menos 10 dígitos, mantém o valor original
        this.value = numeroTelefone;
    }
});
