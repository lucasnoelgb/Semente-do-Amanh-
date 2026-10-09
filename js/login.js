// Login do administrador (demonstração: a senha fica no código, o que NÃO é seguro).
var SENHA = "semente123";

// Se já está logado, vai direto para o painel
if (sessionStorage.getItem("admin") === "sim") {
	window.location.replace("admin.html");
}

var form = document.getElementById("form-login");
var mensagem = document.getElementById("mensagem-login");

form.addEventListener("submit", function (evento) {
	evento.preventDefault();
	var digitada = document.getElementById("senha").value;

	if (digitada === SENHA) {
		sessionStorage.setItem("admin", "sim");
		window.location.href = "admin.html";
	} else {
		mensagem.textContent = "Senha incorreta. Tente novamente.";
		form.reset();
		document.getElementById("senha").focus();
	}
});
