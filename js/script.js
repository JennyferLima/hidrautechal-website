document.addEventListener('DOMContentLoaded', function () {
    const intro = document.getElementById('intro');
    const content = document.getElementById('content');

    // Função para mostrar o conteúdo principal
    function showContent() {
        intro.style.display = 'none'; // Oculta a tela inicial
        content.classList.add('show'); // Mostra o conteúdo principal
        document.body.style.overflowY = 'auto'; // Restaura a rolagem vertical
    }

    // Inicializa a animação da tela inicial
    setTimeout(showContent, 3000); // Aguarda o tempo da animação (3 segundos) para mostrar o conteúdo
});
