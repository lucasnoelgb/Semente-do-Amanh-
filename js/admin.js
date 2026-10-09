// Painel de demonstração: cadastrar, editar e remover projetos (nada é salvo).
var form = document.getElementById("form-projeto");
var lista = document.getElementById("lista-projetos");
var mensagem = document.getElementById("status-projeto");

// Cria os botões Editar e Remover dentro da última célula da linha
function colocarBotoes(linha) {
	var celula = linha.cells[3];
	celula.innerHTML = '<button type="button" class="editar">Editar</button>' +
		'<button type="button" class="remover">Remover</button>';

	celula.querySelector(".remover").addEventListener("click", function () {
		linha.remove();
		mensagem.textContent = "Projeto removido. (simulação)";
	});

	// Editar: joga os dados da linha no formulário e tira a linha da tabela.
	// Ao salvar, o projeto volta para a tabela com os dados novos.
	celula.querySelector(".editar").addEventListener("click", function () {
		document.getElementById("proj-nome").value = linha.cells[0].textContent;
		document.getElementById("proj-categoria").value = linha.cells[1].textContent;
		document.getElementById("proj-meta").value = linha.cells[2].textContent;
		linha.remove();
		mensagem.textContent = "Edite os dados e clique em Salvar projeto.";
	});
}

// As linhas que já estão no HTML também ganham os botões
for (var i = 0; i < lista.rows.length; i++) {
	colocarBotoes(lista.rows[i]);
}

form.addEventListener("submit", function (evento) {
	evento.preventDefault();

	var linha = lista.insertRow();
	linha.insertCell().textContent = document.getElementById("proj-nome").value;
	linha.insertCell().textContent = document.getElementById("proj-categoria").value;
	linha.insertCell().textContent = document.getElementById("proj-meta").value;
	linha.insertCell();
	colocarBotoes(linha);

	mensagem.textContent = "Projeto salvo. (simulação)";
	form.reset();
});
