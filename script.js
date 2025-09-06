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

    
    
    
});
// Controle flutuante de música
const toggleBtn = document.getElementById('music-toggle');
const music = document.getElementById('background-music');

toggleBtn.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        toggleBtn.textContent = '⏸️'; // Mostra ícone de pausa
    } else {
        music.pause();
        toggleBtn.textContent = '▶️'; // Mostra ícone de play
    }
});

