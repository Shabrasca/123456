const usernameField = document.getElementById('username');
const passwordField = document.getElementById('password');
const loginButton = document.getElementById('login-button');
const readyButton = document.getElementById('ready-button');

loginButton.addEventListener('click', function(event) {
	event.preventDefault();

	// Realizar a autenticação do usuário
	// ...

	// Se a autenticação for bem sucedida, habilitar o botão "Pronto?"
	if (usernameField.value && passwordField.value) {
		readyButton.removeAttribute('disabled');
	}
});

readyButton.addEventListener('click', function(event) {
	event.preventDefault();

	// Redirecionar o usuário para outra página
	window.location.href = 'file:///C:/Users/Gustavo/Desktop/Untitled-2.html';
});
