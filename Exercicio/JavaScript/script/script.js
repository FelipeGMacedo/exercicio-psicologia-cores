function alterarTitulo() {
    const titulo = document.getElementById("titulo");
    titulo.textContent = "Título Alterado!";
    titulo.style.color = "green";
}

function iniciarContagemRegressiva() {
    let contador = 10;
    const contadorElement = document.getElementById("contador");
    const intervalo = setInterval(() => {
        if (contador > 0) {
            contadorElement.textContent = contador;
            contadorElement.style.color = "orange"; 
            contador--;
        } else {
            contadorElement.textContent = "Tempo Acabou!";
            contadorElement.style.color = "green";
            clearInterval(intervalo);
        }
    }, 1000);
}

function validarFormulario(event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const mensagemErro = document.getElementById("mensagemErro");

    if (usuario === "" || senha === "") {
        mensagemErro.textContent = "Por favor, preencha todos os campos.";
        mensagemErro.style.color = "red";
    } else {
        mensagemErro.textContent = "Login realizado com sucesso!";
        mensagemErro.style.color = "green";
    }
}