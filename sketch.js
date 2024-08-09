let palavra;
let imagem;
let musica;

function preload(){
  imagem = loadImage("imagem.png");
  musica = loadSound("musica.MP3");
}

function setup() {
  createCanvas(500, 500);
  palavra = canibal();
  musica.loop();
}
  
function draw() {
  background("blue");
  image(imagem, -5, 0, 600, 600);
  banana();
  batata();
  canibal();
}

function banana(){
  fill("purple");
  textSize(50);
  textAlign(CENTER, CENTER);
}

function batata(){
  let maximo = width;
  let minimo = 0;
  let quantidade = map(mouseX, 0, width, 1, palavra.length);
  let inicio = palavra.substring(0, quantidade);
  text(inicio, 300, 300);
}

function canibal(){
  let palavras = ["tesouro", "piratas", "one piece", "comida", "mar"];
  return random(palavras);
}