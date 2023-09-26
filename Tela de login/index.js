// index.js

function redirectToNewPage() {
    // Aqui você pode definir a URL da página para a qual deseja redirecionar após o login.
    var newPageURL = 'http://127.0.0.1:5500/analise%20orientada%20a%20objetos/Tela%20do%20sistema/tela_do_sistema.html';
    window.location.href = newPageURL;
}

function fazerLogin() {
    var emailCpf = document.getElementById("emailCpf").value;
    var senha = document.getElementById("senha").value;

    if (emailCpf.trim() !== "" && senha.trim() !== "") {
        // Ambos os campos estão preenchidos, redirecione para a próxima página.
        redirectToNewPage();
    } else {
        // Caso contrário, exiba uma mensagem de erro ou realize outra ação adequada.
        alert("Por favor, preencha todos os campos.");
    }
}
