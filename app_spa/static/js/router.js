// lida com a lógica de roteamento

import { loadContent, loadPongContent, loadDefaultContent, loadNotFoundContent } from './contentLoader.js';

export function handleRouteChange() {
    const path = window.location.pathname;
    if (path === '/pong') {
        loadPongContent();
    } else if (path === '/authentication') {
        loadContent('/authentication/login.html');
        // loadAppScript('authentication') -> aqui carregamos o script do aplicativo de autenticação, se necessário
    } else if (path === '/') {
        // Carregar conteúdo padrão para a rota principal
        loadDefaultContent();
    } else {
        // Carregar conteúdo padrão para outras rotas não reconhecidas
        loadNotFoundContent();
    }
}
