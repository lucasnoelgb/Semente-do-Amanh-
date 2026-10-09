# Integrantes do grupo
Lucas Noel Gomes Batista<br>
Felipe da Silva Santos <br>
Gabriel Gustavo Lins Matos<br>
Matheus Toyokawa Xisto

# Semente do Amanhã – site para ONGs

Trabalho de Desenvolvimento Front-End para Web (Engenharia de Software, Universidade Cruzeiro do Sul, 2° Semestre).
Site de uma ONG fictícia (educação, alimentação e saúde). Todos os dados são fictícios.

## Como abrir

Dê dois cliques em `index.html` (ou use a extensão Live Server do VS Code).

## Estrutura

```
index.html      Página inicial: missão, visão, valores, conquistas, equipe, impacto, galeria, novidades, newsletter, contato
projetos.html   Projetos, como doar (doação on-line simulada), voluntariado, transparência, imprensa
cadastro.html   Cadastro de voluntário (validação HTML5 + máscaras)
login.html      Login do administrador (senha de teste: semente123)
admin.html      Painel do administrador (só abre depois do login; tem botão Sair)
css/style.css   Estilos (mobile-first)
js/             formularios.js, mascaras.js, admin.js, login.js, protecao.js, sair.js
img/            Imagens
```

## Conferência com o enunciado

| Requisito | Onde está |
| --- | --- |
| 3 páginas HTML5 semânticas | `index.html`, `projetos.html`, `cadastro.html` |
| Títulos h1 > h2 > h3 e imagens | todas as páginas |
| Formulário com nome, e-mail, CPF, telefone, nascimento, endereço, CEP, cidade e estado | `cadastro.html` |
| Validação HTML5 | `required`, `pattern`, `minlength`, `type="email"`, `type="date"` |
| Agrupamento lógico | `fieldset` e `legend` |
| Máscaras de CPF, telefone e CEP | `js/mascaras.js` |
| Campanha com meta e progresso | `index.html` (`<progress>`) |
| Doação on-line, voluntariado, transparência, imprensa | `projetos.html` |
| Painel do administrador com login e saída | `login.html`, `admin.html`, `js/login.js`, `js/protecao.js`, `js/sair.js` |
| Newsletter e novidades | `index.html` |
| Responsivo (mobile-first) | `css/style.css` (`@media`) |
| Lazy loading nas imagens | atributo `loading="lazy"` |

## Limitações

- Os formulários não enviam dados (simulação). Um envio real precisa de back-end.
- O login é só de demonstração: a senha fica visível no código (`js/login.js`). Um login real precisa de servidor e banco de dados. Nada do painel é salvo.
- Os relatórios em PDF estão como "em breve".
