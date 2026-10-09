// Formulários de demonstração: mostram uma mensagem em vez de enviar os dados.
var formularios = document.querySelectorAll("form[data-mensagem]");

for (var i = 0; i < formularios.length; i++) {
	formularios[i].addEventListener("submit", function (evento) {
		evento.preventDefault();
		var form = evento.target;
		form.querySelector(".status").textContent = form.dataset.mensagem;
		form.reset();
	});
}
