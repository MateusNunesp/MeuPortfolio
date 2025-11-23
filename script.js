document.addEventListener("DOMContentLoaded", function() {
        
    const formulario = document.querySelector(".contato-form");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();
        const nome = document.getElementById('form-nome').value;
        const telefone = '5531996467581';
        const mensagem = document.getElementById('form-mensagem').value;


        const texto = `Olá! me chamo ${nome}, ${mensagem}`;
        const textoformatado = encodeURIComponent(texto);

        const url = `https://wa.me/${telefone}?text=${textoformatado}`;

        window.open(url, '_blank');
    });
});