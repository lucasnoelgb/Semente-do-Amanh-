// Protege o painel: quem não fez login volta para a página de login.
// sessionStorage guarda a informação só enquanto a aba do navegador estiver aberta.
if (sessionStorage.getItem("admin") !== "sim") {
	window.location.replace("login.html");
}
