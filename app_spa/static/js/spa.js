/*document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.querySelector(".btn.btn-primary");
    loginButton.addEventListener("click", function () {
        window.location.href = loginURL;
    });
});
*/

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');
    
    // Verifique se estamos no index.html verificando a presença do elemento único
    if (document.getElementById('index-page')) {
        function findLoginButton() {
            const loginButton = document.querySelector("#login-button");
            if (loginButton) {
                console.log('Login button found:', loginButton);  // Log para verificar se o botão foi encontrado
                
                loginButton.addEventListener("click", function () {
                    console.log('Login button clicked');  // Log para verificar se o evento de clique foi registrado
                    console.log('Redirecting to:', loginURL);  // Log para verificar a URL de login
                    window.location.href = loginURL;  // Redireciona na mesma aba
                });
            } else {
                console.log('Login button not found');  // Log se o botão não foi encontrado
                setTimeout(findLoginButton, 500);  // Tente novamente após 500ms
            }
        }
        
        findLoginButton();
    } else {
        console.log('Index page not present on this page');  // Log se a página index não estiver presente
    }
});