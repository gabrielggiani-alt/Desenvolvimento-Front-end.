// Busca os elementos na árvore DOM e guarda em variáveis
var botaoIncrementar = document.getElementById("botaoIncrementar");
var botaoDecrementar = document.getElementById("botaoDecrementar");
var valorContador = document.getElementById("valorContador");

var campoTexto = document.getElementById("campoTexto");
var totalCaracteres = document.getElementById("totalCaracteres");
var areaParagrafos = document.getElementById("areaParagrafos");

var tipoLista = document.getElementById("tipoLista");
var botaoAdicionarLista = document.getElementById("botaoAdicionarLista");
var areaListas = document.getElementById("areaListas");

var botaoResetar = document.getElementById("botaoResetar");

var contador = 0;

// Contador de cliques
botaoIncrementar.addEventListener("click", function () {
  contador = contador + 1;
  valorContador.textContent = contador;
});

botaoDecrementar.addEventListener("click", function () {
  if (contador === 0) {
    alert("O contador já está em zero, não dá para diminuir.");
  } else {
    contador = contador - 1;
    valorContador.textContent = contador;
  }
});

// Contador de caracteres em tempo real, sem contar os espaços
campoTexto.addEventListener("input", function () {
  var textoSemEspacos = campoTexto.value.split(" ").join("");
  totalCaracteres.textContent = textoSemEspacos.length;
});

// Enter no campo cria um parágrafo novo na página
campoTexto.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") {
    if (campoTexto.value.trim() === "") {
      alert("Digite alguma coisa antes de pressionar Enter.");
      return;
    }

    var paragrafo = document.createElement("p");
    paragrafo.textContent = campoTexto.value;
    areaParagrafos.appendChild(paragrafo);

    campoTexto.value = "";
    totalCaracteres.textContent = 0;
  }
});

// Adiciona uma lista ordenada ou não ordenada, conforme a escolha do usuário
botaoAdicionarLista.addEventListener("click", function () {
  var lista = document.createElement(tipoLista.value);

  for (var i = 1; i <= 3; i++) {
    var item = document.createElement("li");
    item.textContent = "Item " + i;
    lista.appendChild(item);
  }

  areaListas.appendChild(lista);
});

// Reset: zera o contador e limpa o que foi adicionado
botaoResetar.addEventListener("click", function () {
  contador = 0;
  valorContador.textContent = contador;

  campoTexto.value = "";
  totalCaracteres.textContent = 0;

  areaParagrafos.innerHTML = "";
  areaListas.innerHTML = "";
});
