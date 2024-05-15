// spa/contentLoader.js
 
export function loadHomeContent() {

    console.log('loadHomeContent chamada');

    const appElement = document.getElementById('app');
    if (!appElement) {
        console.error('Elemento com ID "app" não encontrado.');
        return;
    }

    fetch('home')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar conteúdo inicial: ' + response.statusText);
            }
            return response.text();
        })
        .then(html => {
            appElement.innerHTML = html;

            // Adicionar eventos aos botões
            document.getElementById('login-button').addEventListener('click', () => {
                window.location.pathname = '/authentication';
            });
            document.getElementById('register-button').addEventListener('click', () => {
                // Crie uma rota de registro se necessário
                window.location.pathname = '/register'; 
            });
        })
        .catch(error => {
            console.error(error);
        });
}
