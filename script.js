document.addEventListener('DOMContentLoaded', function() {
     const music = document.getElementById('background-music');
    
    // Tenta reproduzir automaticamente (pode ser bloqueado por alguns navegadores)
    music.volume = 0.05; // Volume moderado
    
    // Solução para navegadores que bloqueiam autoplay
    function handleFirstInteraction() {
        music.play().catch(e => console.log("Reprodução automática bloqueada:", e));
        document.removeEventListener('click', handleFirstInteraction);
        document.removeEventListener('keydown', handleFirstInteraction);
        document.removeEventListener('scroll', handleFirstInteraction);
    }
    
    // Ouvintes de eventos para desbloquear o áudio
    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('keydown', handleFirstInteraction);
    document.addEventListener('scroll', handleFirstInteraction);
    
    // Inicia quando possível (para navegadores que permitem)
    music.play().catch(e => console.log("Aguardando interação do usuário..."));

    const buttons = document.querySelectorAll('.btn');
    const photoWall = document.querySelector('.photo-wall');
    const photoCards = document.querySelectorAll('.photo-card');
    
    // Controle de tamanho das fotos
    buttons.forEach(button => {
        if (button.dataset.size) {
            button.addEventListener('click', function() {
                // Remove active de todos os botões de tamanho
                document.querySelectorAll('.btn[data-size]').forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // Adiciona active ao botão clicado
                this.classList.add('active');
                
                // Altera o tamanho de todas as fotos
                photoCards.forEach(card => {
                    card.classList.remove('small', 'medium', 'large');
                    card.classList.add(this.dataset.size);
                });
            });
        }
        
        if (button.dataset.layout) {
            button.addEventListener('click', function() {
                // Remove active de todos os botões de layout
                document.querySelectorAll('.btn[data-layout]').forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // Adiciona active ao botão clicado
                this.classList.add('active');
                
                // Altera o layout
                photoWall.classList.remove('grid-layout', 'masonry-layout');
                photoWall.classList.add(this.dataset.layout + '-layout');
            });
        }
    });
});