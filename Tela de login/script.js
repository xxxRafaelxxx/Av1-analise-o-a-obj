
function redirectToNewPage() {
    // Aqui você pode definir a URL da página para a qual deseja redirecionar após o login.
    var newPageURL = '../Tela de cadastro/tela_de_cadastro.html';
    window.location.href = newPageURL;
}

function fazerLogin() {
    var emailCpf = document.getElementById("emailCpf").value;
    var senha = document.getElementById("senha").value;
    var newPageURL
    if (emailCpf.trim() !== "" && senha.trim() !== "") {
        if (emailCpf.includes("@professor.com")) {
            newPageURL = '../Portal De Acesso Professor/index.html';
            window.location.href = newPageURL;
        } else if (emailCpf.includes("@coordenador.com")) {
            newPageURL = '../Portal do coordenador/index.html';
            window.location.href = newPageURL;
        } else if (emailCpf.includes("@aluno.com")) {
            newPageURL = '../Portal De Acesso Aluno/index.html';
            window.location.href = newPageURL;
        }
    } else {
        // Caso contrário, exiba uma mensagem de erro ou realize outra ação adequada.
        alert("Por favor, preencha todos os campos.");
    }
}
