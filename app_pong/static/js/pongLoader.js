// pong/contentLoader.js

export function loadPongContent() {
    const appElement = document.getElementById('app');
    if (!appElement) {
        console.error('Elemento com ID "app" não encontrado.');
        return;
    }

    fetch('/static/app_pong/pong.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar conteúdo do jogo Pong: ' + response.statusText);
            }
            return response.text();
        })
        .then(html => {
            appElement.innerHTML = html;
            // Carregar o script específico do Pong
            const script = document.createElement('script');
            script.src = '/static/js/pong.js';
            document.body.appendChild(script);
        })
        .catch(error => {
            console.error(error);
        });
}