const fotos = [
  {src:"https://i.postimg.cc/ZY1tNc48/Imagem-do-Whats-App-de-2025-06-13-s-20-07-05-c8b42c8e.jpg", data:"Minha princesa, você é meu sonho bom que virou realidade."},
  {src:"https://i.postimg.cc/TPCSkjm3/Imagem-do-Whats-App-de-2025-06-13-s-20-07-05-b9f5cd28.jpg", data: "Estar ao seu lado é como viver dentro de um sonho que eu nunca quero acordar."},
  {src:"https://i.postimg.cc/52jn4cFb/Imagem-do-Whats-App-de-2025-06-13-s-20-07-05-38df9012.jpg", data: "Minha princesa, seu amor é meu lugar favorito no universo."},
  {src: "https://i.postimg.cc/C14jCJfc/Imagem-do-Whats-App-de-2025-06-13-s-20-07-05-4b9db0a4.jpg", data: "Te encontrar foi como descobrir a parte que faltava em mim. 💖"},
  {src: "https://i.postimg.cc/XYc7YhM1/Imagem-do-Whats-App-de-2025-06-13-s-20-07-05-c81f4b7d.jpg", data: "És minha paz, minha luz, minha princesa."},
  {src: "https://i.postimg.cc/GmqtjNM8/Imagem-do-Whats-App-de-2025-06-13-s-20-07-06-571536b4.jpg", data: "Cada batida do meu coração chama por você."},
 
];

let indexAtual = 0;

const fotoEl = document.getElementById("foto");
const legendaEl = document.getElementById("legenda");
const btnProximo = document.getElementById("proximo");
const btnAnterior = document.getElementById("anterior");
const botaoVideo = document.getElementById("ver-video");

const somClique = new Audio("click.mp3");
const musica = document.getElementById("musica"); // <audio> com autoplay

function mostrarFoto(index) {
  indexAtual = (index + fotos.length) % fotos.length;

  fotoEl.classList.add("fade");
  legendaEl.classList.add("fade");

  setTimeout(() => {
    fotoEl.src = fotos[indexAtual].src;
    legendaEl.textContent = fotos[indexAtual].data;

    fotoEl.classList.remove("fade");
    legendaEl.classList.remove("fade");

    // Mostra botão do vídeo na última foto
    if (indexAtual === fotos.length - 1) {
      botaoVideo.style.display = "block";
    } else {
      botaoVideo.style.display = "none";
    }
  }, 200);
}

btnAnterior.addEventListener("click", () => {
  somClique.play();
  mostrarFoto(indexAtual - 1);
});

btnProximo.addEventListener("click", () => {
  somClique.play();
  mostrarFoto(indexAtual + 1);
}); 

// Inicia a galeria
mostrarFoto(indexAtual);

// Inicia música quando a página é clicada
document.body.addEventListener('click', () => {
  const musica = document.getElementById('musica');
  if (musica.paused) {
    musica.play().catch((e) => {
      console.log("Reprodução bloqueada pelo navegador:", e);
    });
  }
}, { once: true }); // só executa uma vez
