document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("meuFormulario").addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        alert("Formulário enviado!"); // Exibe um alerta ao usuário
        this.reset(); // Limpa os campos do formulário após o envio
    });
});