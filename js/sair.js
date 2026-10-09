// Botão "Sair" do painel: apaga o login e volta para a página inicial.
document.getElementById("sair").addEventListener("click", function () {
	sessionStorage.removeItem("admin");
	window.location.href = "index.html";
});
