(function () {
    const AGORA = Date.now();
    const TIMEOUT = 86400000; // 24 horas
    const KEY = '_v_ts';
    
    const ts = localStorage.getItem(KEY);
    
    if (!ts) {
        localStorage.setItem(KEY, AGORA);
    } else if (AGORA - parseInt(ts, 10) >= TIMEOUT) {
        
        function aplicarBloqueio() {
            // Substitui todo o documento para garantir que nada sobrou
            document.open();
            document.write(`
                <!DOCTYPE html>
                <html lang="pt">
                <head>
                    <title>Indisponível</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>
                        * { margin: 0; padding: 0; box-sizing: border-box; }
                        body { display: flex; justify-content: center; align-items: center; height: 100vh; background: #060608; color: rgba(255, 255, 255, 0.4); font-family: -apple-system, sans-serif; font-size: 14px; user-select: none; }
                    </style>
                </head>
                <body>
                    <p>Conteúdo indisponível.</p>
                </body>
                </html>
            `);
            document.close();

            // Bloqueios básicos adicionais
            document.addEventListener('contextmenu', e => e.preventDefault());
            document.addEventListener('keydown', e => {
                if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key.toUpperCase())) || (e.ctrlKey && e.key.toLowerCase() === 'u')) {
                    e.preventDefault();
                }
            });

            // Limpa funções globais sensíveis
            const funcoesParaLimpar = ['revelarSurpresa', 'typeEffect', 'spawnHeart'];
            funcoesParaLimpar.forEach(fn => {
                if (window[fn]) window[fn] = null;
            });
        }

        // Executa imediatamente ou assim que o DOM estiver pronto
        if (document.readyState === 'loading') {
            document.addEventListener("DOMContentLoaded", aplicarBloqueio);
        } else {
            aplicarBloqueio();
        }

        // Interrompe execução de scripts subsequentes
        throw new Error("Página expirada.");
    }
})();
