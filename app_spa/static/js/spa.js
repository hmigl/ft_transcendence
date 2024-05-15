// spa.js

console.log('spa.js disparado');

import { loadPongContent } from '../../../static/js/pongLoader.js';
// import { loadAuthenticationContent } from '../../../authentication/static/js/contentLoader.js';
import { loadHomeContent } from './spaLoader.js';

document.addEventListener('DOMContentLoaded', () => {

    console.log('DOM disparado');

    handleRouteChange();
    window.addEventListener('popstate', handleRouteChange);
});

function handleRouteChange() {

    console.log('handleRouteChange() chamada');

    const path = window.location.pathname;
    if (path === '/app_pong/') {
        console.log('no if do pong');
        loadPongContent();
    } else if (path === '/app_authentication') {
        loadAuthenticationContent();
    } else if (path === '/') {
        loadHomeContent();
    } else {
        console.log('HELLOOOOOOOO!!!!')
    //     loadNotFoundContent();
    }
}
