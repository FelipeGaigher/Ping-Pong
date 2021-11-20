//variaveis bolinha
let xBolinha = 300
let yBolinha = 200
let diametro = 20
let raio = diametro / 2

let velocidadeXBolinha = 8
let velocidadeYBolinha = 6

//variaveis raquete
let xRaquete = 5
let yRaquete = 150
let larguraRaquete = 10
let alturaRaquete = 90

//variaveis raquete oponente
let xRaqueteOponente = 585
let yRaqueteOponente = 150
let velocidadeYRaquete;

//pontuacao
let meuPonto = 0
let pontoOponente = 0

//chance Erro = 0
let chanceDeErrar = 0


let colisao = false


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  
  criarBolinha()
  movimentarBolinha()
  colisaoBordas()
  
  criarRaquete(xRaquete, yRaquete)
  moverRaquete()
  colisaoRaquete(xRaquete, yRaquete)
  
  criarRaquete(xRaqueteOponente, yRaqueteOponente)
  movimentarRaqueteOponente()
  colisaoRaquete(xRaqueteOponente, yRaqueteOponente)
  
  incluiPonto()
  marcarPonto()
  calcularErro()
}

function criarBolinha(){
  circle(xBolinha, yBolinha, diametro)
}

function movimentarBolinha(){
  xBolinha += velocidadeXBolinha
  yBolinha += velocidadeYBolinha
}

function colisaoBordas(){
  if(xBolinha + raio > width || xBolinha - raio < 0){
     velocidadeXBolinha *= -1
     }
  if(yBolinha + raio > height || yBolinha - raio < 0){
     velocidadeYBolinha *= -1
     }
}

function criarRaquete(x, y){
  rect(x, y, larguraRaquete, alturaRaquete)
}

function moverRaquete(){
  if(keyIsDown(UP_ARROW)){
     yRaquete -= 5
     }
  if(keyIsDown(DOWN_ARROW)){
     yRaquete += 5
     }
}

function colisaoRaquete(x, y){
  colisao = collideRectCircle(x, y, larguraRaquete, alturaRaquete, xBolinha, yBolinha, diametro);
  if(colisao){
    velocidadeXBolinha *= -1
  }
}

function movimentarRaqueteOponente(){
  velocidadeYRaquete = yRaqueteOponente - larguraRaquete - alturaRaquete / 2 - 30
  yRaqueteOponente = yBolinha
}

function incluiPonto(){
  fill(255)
  textAlign(CENTER)
  textSize(20)
  
  
  fill(color(255, 120, 0))
  rect(140, 13, 50, 20)
  
  fill(255)
  text(meuPonto, 165, 30)
  
  
  fill(color(255, 120, 0))
  rect(440, 13, 50, 20)
  
  fill(255)
  text(pontoOponente, 465, 30)
  
}

function marcarPonto(){
  if(xBolinha > 590){
     meuPonto++
     }
  if(xBolinha < 10){
     pontoOponente++
     }
}

function calcularErro(){
  if (pontoOponente >= meuPonto) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1 
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}

 