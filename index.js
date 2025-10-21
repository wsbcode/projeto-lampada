// PROJETO LÂMPADA

// --- 1. ARMAZENANDO OS ELEMENTOS HTML EM VARIÁVEIS ---

// Pega o elemento do botão "Ligar/Desligar" do HTML e guarda ele na variável 'ligarDesligar'.
const ligarDesligar = document.getElementById("ligarDesligar");
// Pega o elemento da imagem da lâmpada do HTML e guarda ele na variável 'lampada'.
const lampada = document.getElementById("lampada");

// Define a imagem inicial da lâmpada como desligada
lampada.src = "imagens/desligada.jpg";

// --- 2. AS FUNÇÕES (AS AÇÕES QUE SUA LÂMPADA PODE FAZER) ---

// Função: Acende a lâmpada. Muda a imagem para a lâmpada ligada, mas só se ela não estiver quebrada.
function lampadaLigada() {
   // Se a lâmpada NÃO estiver quebrada (o '!' inverte o resultado de 'verificarLampada()').
   if (!verificarLampada()) {
      // Muda a imagem da lâmpada para a versão 'ligada.jpg'.
      lampada.src = "imagens/ligada.jpg";
   }
}

// Função: Desliga a lâmpada. Muda a imagem para a lâmpada desligada, mas só se ela não estiver quebrada.
function lampadaDesligada() {
   // Se a lâmpada NÃO estiver quebrada.
   if (!verificarLampada()) {
      // Muda a imagem da lâmpada para a versão 'desligada.jpg'.
      lampada.src = "imagens/desligada.jpg";
   }
}

// Função: Quebra a lâmpada. Muda a imagem para a lâmpada quebrada.
// Uma vez quebrada, as outras funções de ligar/desligar param de funcionar.
function lampadaQuebrada() {
   lampada.src = "imagens/quebrada.jpg";
}

// Função: Gerencia o clique do botão "Ligar/Desligar".
// Ela alterna o estado da lâmpada (ligar/desligar) e o texto do botão.
function ligaDesliga() {
   // Verifica o texto atual do botão 'ligarDesligar'.
   if (ligarDesligar.textContent == "Ligar") {
      // Se o botão estiver escrito "Ligar":
      lampadaLigada(); // Acende a lâmpada.
      ligarDesligar.textContent = "Desligar"; // E muda o texto do botão para "Desligar".
   } else {
      // Se o botão estiver escrito "Desligar":
      lampadaDesligada(); // Desliga a lâmpada.
      ligarDesligar.textContent = "Ligar"; // E muda o texto do botão de volta para "Ligar".
   }
}

// Função: Verifica se a lâmpada está quebrada.
// Retorna 'true' (verdadeiro) se a palavra "quebrada" estiver no caminho da imagem,
// e 'false' (falso) caso contrário.
function verificarLampada() {
   // 'indexOf("quebrada") > -1' significa que a palavra "quebrada" foi encontrada no caminho da imagem.
   return lampada.src.indexOf("quebrada") > -1;
}
// Pega o botão de consertar
const consertar = document.getElementById("consertar");

// Função: Conserta a lâmpada
function lampadaConsertar() {
   lampada.src = "imagens/desligada.jpg"; // Volta para a imagem desligada
   ligarDesligar.textContent = "Ligar"; // Garante que o botão volte para "Ligar"
   consertar.style.display = "none"; // Esconde o botão de consertar
}

// Atualize a função lampadaQuebrada para mostrar o botão de consertar
function lampadaQuebrada() {
   lampada.src = "imagens/quebrada.jpg";
   consertar.style.display = "inline"; // Mostra o botão de consertar
}

// Adiciona o evento de clique ao botão de consertar
consertar.addEventListener("click", lampadaConsertar);

// --- 3. ESCUTANDO O QUE ACONTECE NA PÁGINA (EVENT LISTENERS) ---

// Adiciona um "escutador" ao botão 'ligarDesligar'.
// Quando ele for clicado ("click"), a função 'ligaDesliga' será ativada.
ligarDesligar.addEventListener("click", ligaDesliga);

// Adiciona um "escutador" à imagem da lâmpada.
// Quando o mouse passar por cima dela ("mouseover"), a função 'lampadaLigada' será ativada.
lampada.addEventListener("mouseover", lampadaLigada);

// Adiciona outro "escutador" à imagem da lâmpada.
// Quando o mouse sair de cima dela ("mouseleave"), a função 'lampadaDesligada' será ativada.
lampada.addEventListener("mouseleave", lampadaDesligada);

// Adiciona mais um "escutador" à imagem da lâmpada.
// Quando a lâmpada for clicada duas vezes ("dblclick"), a função 'lampadaQuebrada' será ativada.
lampada.addEventListener("dblclick", lampadaQuebrada);
