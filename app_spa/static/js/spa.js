// script principal

import { handleRouteChange } from './router.js';

document.addEventListener('DOMContentLoaded', () => {
    // Inicializa a página
    handleRouteChange();

    // Escuta por mudanças na URL
    window.addEventListener('popstate', handleRouteChange);
});
