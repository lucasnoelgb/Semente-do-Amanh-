// Máscaras do formulário de cadastro: CPF, telefone e CEP.

// Deixa só os números do texto
function soNumeros(texto) {
	return texto.replace(/\D/g, "");
}

var cpf = document.getElementById("cpf");
cpf.addEventListener("input", function () {
	var n = soNumeros(cpf.value).slice(0, 11);
	n = n.replace(/(\d{3})(\d)/, "$1.$2");
	n = n.replace(/(\d{3})(\d)/, "$1.$2");
	n = n.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
	cpf.value = n;
});

var telefone = document.getElementById("telefone");
telefone.addEventListener("input", function () {
	var n = soNumeros(telefone.value).slice(0, 11);
	n = n.replace(/^(\d{2})(\d)/, "($1) $2");
	n = n.replace(/(\d{4,5})(\d{4})$/, "$1-$2");
	telefone.value = n;
});

var cep = document.getElementById("cep");
cep.addEventListener("input", function () {
	var n = soNumeros(cep.value).slice(0, 8);
	n = n.replace(/(\d{5})(\d)/, "$1-$2");
	cep.value = n;
});

// Data de nascimento: só aceita quem tem 18 anos ou mais
var nascimento = document.getElementById("nascimento");
var limite = new Date();
limite.setFullYear(limite.getFullYear() - 18);
nascimento.max = limite.toISOString().slice(0, 10);
