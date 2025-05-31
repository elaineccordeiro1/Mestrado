// Perguntas e respostas do arquivo questions.txt
const perguntas = [
  {
    pergunta: "O que são jogos sérios?",
    opcoes: [
      "Jogos criados exclusivamente para entretenimento",
      "Jogos que têm um propósito educacional, profissional ou de treinamento",
      "Jogos que simulam batalhas históricas",
      "Jogos desenvolvidos apenas para crianças"
    ],
    correta: 1,
    dica: "São utilizados em contextos como educação, saúde e negócios."
  },
  {
    pergunta: "Qual é uma característica comum dos jogos sérios?",
    opcoes: [
      "Alta complexidade de gráficos",
      "Objetivos puramente recreativos",
      "Conteúdo voltado para aprendizado ou simulação",
      "Histórias fictícias de fantasia"
    ],
    correta: 2,
    dica: "O foco está mais no conteúdo e objetivo do que na diversão."
  },
  {
    pergunta: "Os jogos sérios podem ser usados em qual contexto?",
    opcoes: [
      "Somente escolas",
      "Apenas na área militar",
      "Diversos contextos como saúde, negócios e educação",
      "Exclusivamente em empresas privadas"
    ],
    correta: 2,
    dica: "Eles têm aplicações amplas e interdisciplinares."
  }
];

let indiceAtual = 0;
let pontuacao = 0;

const perguntaEl = document.getElementById("pergunta");
const opcoesEl = document.getElementById("opcoes");
const dicaBtn = document.getElementById("dica-btn");
const dicaEl = document.getElementById("dica");
const proximaBtn = document.getElementById("proxima");
const resultadoEl = document.getElementById("resultado");

function mostrarPergunta() {
  const q = perguntas[indiceAtual];
  perguntaEl.textContent = q.pergunta;
  dicaEl.textContent = "";
  opcoesEl.innerHTML = "";

  q.opcoes.forEach((op, idx) => {
    const li = document.createElement("li");
    li.textContent = op;
    li.addEventListener("click", () => verificarResposta(idx));
    opcoesEl.appendChild(li);
  });
}

function verificarResposta(escolhida) {
  const correta = perguntas[indiceAtual].correta;
  if (escolhida === correta) {
    pontuacao++;
  }
  indiceAtual++;
  if (indiceAtual < perguntas.length) {
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  document.getElementById("quiz-box").classList.add("hidden");
  resultadoEl.classList.remove("hidden");
  resultadoEl.textContent = `Você acertou ${pontuacao} de ${perguntas.length} perguntas! 🧠`;
}

proximaBtn.addEventListener("click", mostrarPergunta);
dicaBtn.addEventListener("click", () => {
  dicaEl.textContent = perguntas[indiceAtual].dica;
});

mostrarPergunta();
