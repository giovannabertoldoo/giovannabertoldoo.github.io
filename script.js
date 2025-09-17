const button = document.getElementById('botao-alterar-cor');

button.addEventListener('click', function() {
    document.body.style.backgroundColor = "lightblue" // ERRO: falta ponto e vírgula
});
