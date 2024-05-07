// lida com o carregamento do conteudo

export function loadContent(contentPath) {
    console.log('Carregando conteúdo de:', contentPath); // Adiciona esta linha para depuração

    fetch(contentPath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar conteúdo: ' + response.statusText);
            }
            return response.text();
        })
        .then(html => {
            const appElement = document.getElementById('app');
            if (appElement) {
                appElement.innerHTML = html;
            } else {
                console.error('Elemento com ID "app" não encontrado.');
            }
        })
        .catch(error => {
            console.error(error);
            // se ocorrer um erro ao carregar o conteúdo, exiba o conteúdo padrão
            const appElement = document.getElementById('app');
            if (appElement) {
                appElement.innerHTML = '<h1>Route not found: Welcome to Transcendence!</h1>';
            } else {
                console.error('Elemento com ID "app" não encontrado.');
            }        
        });
}

export function loadPongContent() {
    const appElement = document.getElementById('app');
    if (!appElement) {
        console.error('Elemento com ID "app" não encontrado.');
        return;
    }

    fetch('/pong/pong.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar conteúdo do jogo Pong: ' + response.statusText);
            }
            return response.text();
        })
        .then(html => {
            appElement.innerHTML = html;
        })
        .catch(error => {
            console.error(error);
        });
}

export function loadDefaultContent() {
    const appElement = document.getElementById('app');
    if (!appElement) {
        console.error('Elemento com ID "app" não encontrado.');
        return;
    }

    const message = '<h1>Welcome to Transcendence - Default!</h1>';
    appElement.innerHTML = message;
}

export function loadNotFoundContent() {
    const appElement = document.getElementById('app');
    if (!appElement) {
        console.error('Elemento com ID "app" não encontrado.');
        return;
    }

    const message = '<h1>404 - Not Found! </h1>';
    appElement.innerHTML = message;
}