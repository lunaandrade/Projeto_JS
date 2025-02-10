const coresMap = {
  "Vermelho": "red",
  "Azul": "blue",
  "Verde": "green",
  "Preto": "black",
  "Roxo": "purple",
  "Laranja": "orange" };

const cores = Object.keys(coresMap); 

let pontos = 0;
let corCerta = "";
let tempo = 5;
let tempoIntervalo;

function iniciarJogo() {
  corCerta = cores[Math.floor(Math.random() * cores.length)];
  const corFundo = cores[Math.floor(Math.random() * cores.length)];

  document.getElementById("cor_box").style.backgroundColor = coresMap[corFundo];  
  document.getElementById("corCerta").innerText = corCerta;
  document.getElementById("corCerta").style.color = coresMap[corFundo]; 
  document.getElementById("corCerta").style.fontSize = "24px";

  const botaoCont = document.getElementById("botaoCont");
  botaoCont.innerHTML = "";  

  cores.forEach(cor => {
    const botao = document.createElement("button"); 
    botao.innerText = cor;
    botao.classList.add("cor_b");
    botao.style.backgroundColor = coresMap[cor];
    botao.onclick = () => verificaCor(cor);
    botaoCont.appendChild(botao); });

  tempo = 5; 
  document.getElementById("timer").innerText = `Tempo restante: ${tempo}s`;

  clearInterval(tempoIntervalo);  
  tempoIntervalo = setInterval(atualizaTempo, 1000); }

function atualizaTempo() {
  tempo--; 
  document.getElementById("timer").innerText = `Tempo restante: ${tempo}s`;

  if (tempo <= 0) {
    clearInterval(tempoIntervalo);
    GameOver();  }}

function verificaCor(corSelecionada) {
  if (corSelecionada === corCerta) { pontos++; } 

  else { pontos--; }

  document.getElementById("pontos").innerText = "Pontuação: " + pontos;
  iniciarJogo(); }

function GameOver() {
  document.getElementById("pont-final").innerText = pontos;
  
  document.getElementById("game-over-modal").style.display = "flex"; }

function resetarJogo() {
  pontos = 0;
  document.getElementById("pontos").innerText = "Pontuação: 0";
  
  document.getElementById("game-over-modal").style.display = "none";
  
  iniciarJogo();  }

iniciarJogo();  