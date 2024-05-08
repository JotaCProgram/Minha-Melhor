$(document).ready(function() {
    function restartAnimation() {
        $('svg').removeClass('active');
        
        setTimeout(function() {
            // Força o navegador a reconhecer a remoção da classe
            void $('svg')[0].offsetWidth;

            // Adiciona a classe 'active' novamente para reiniciar a animação
            $('svg').addClass('active');
        }, 50); // Um breve atraso antes de reiniciar a animação
    }

    // Inicia a animação
    restartAnimation();

    // Reinicia a animação a cada 5 segundos
    setInterval(restartAnimation, 5000);
});
