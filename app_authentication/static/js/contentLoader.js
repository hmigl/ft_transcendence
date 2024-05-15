// authentication/contentLoader.js



export function loadAuthenticationContent() {
    const appElement = document.getElementById('app');
    if (!appElement) {
        console.error('Elemento com ID "app" não encontrado.');
        return;
    }

    fetch('/authentication/login.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar conteúdo de autenticação: ' + response.statusText);
            }
            return response.text();
        })
        .then(html => {
            appElement.innerHTML = html;
            // Carregar o script específico de autenticação
            const script = document.createElement('script');
            script.src = '/static/js/authentication.js';
            document.body.appendChild(script);
        })
        .catch(error => {
            console.error(error);
        });
}
