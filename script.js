document.addEventListener('DOMContentLoaded', function () {
    const music = document.getElementById('background-music');

    // Volume inicial
    if (music) music.volume = 0.05;

    // Tenta iniciar automaticamente (alguns navegadores bloqueiam autoplay)
    if (music) {
        music.play().catch(e => console.log("Aguardando interação do usuário..."));

        function handleFirstInteraction() {
            music.play().catch(e => console.log("Reprodução automática bloqueada:", e));
            document.removeEventListener('click', handleFirstInteraction);
            document.removeEventListener('keydown', handleFirstInteraction);
            document.removeEventListener('scroll', handleFirstInteraction);
        }

        document.addEventListener('click', handleFirstInteraction);
        document.addEventListener('keydown', handleFirstInteraction);
        document.addEventListener('scroll', handleFirstInteraction);
    }

    // Controle flutuante de música
    const toggleBtn = document.getElementById('music-toggle');
    if (toggleBtn && music) {
        toggleBtn.addEventListener('click', () => {
            if (music.paused) {
                music.play();
                toggleBtn.textContent = '⏸️'; // Ícone de pausa
            } else {
                music.pause();
                toggleBtn.textContent = '▶️'; // Ícone de play
            }
        });
    }

    // ==========================
    //  CONTADOR DE DIAS + TEMPO
    // ==========================
    // 29/09/2024 00:00:00 (mês 8 = setembro)
    const dataInicial = new Date(2024, 8, 29, 0, 0, 0);

    function atualizarContador() {
        const agora = new Date();
        const diferencaMs = agora - dataInicial;

        const segundosTotais = Math.floor(diferencaMs / 1000);
        const dias = Math.floor(segundosTotais / (60 * 60 * 24));
        const horas = Math.floor((segundosTotais % (60 * 60 * 24)) / 3600);
        const minutos = Math.floor((segundosTotais % 3600) / 60);
        const segundos = segundosTotais % 60;

        const contador = document.getElementById("contador");
        if (contador) {
            contador.textContent = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
        }
    }

    // Atualiza ao carregar
    atualizarContador();
    // Atualiza a cada segundo
    setInterval(atualizarContador, 1000);
});
