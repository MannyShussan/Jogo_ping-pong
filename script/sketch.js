//http://www.erikasarti.com/html/tabela-cores/
let backx = 900, backy = 500; // parametros referentes ao background

let bolinha_x = (backx / 2), bolinha_y = (backy / 2), bolinha_dia = 15,velocidade_x = 5, velocidade_y = 5; // parametros referente a bolinha

let tamanho_raquete_x = 5, tamanho_raquete_y = 70;

let raquete1_x = 20, raquete1_y = ((backy / 2) - (tamanho_raquete_y / 2)); // raquete player

let raquete2_x = backx - 20, raquete2_y = ((backy / 2) - (tamanho_raquete_y / 2)); // raquete CPU

let pontosP1 = 0, pontosP2 = 0;

let fonte;

function setup() {
  createCanvas(backx, backy);  
}

function draw() {
  BackGround();
  comportamento_bolinha();
  comportamento_raquete1();
  comportamento_raquete2();
  mostraPlacar();
}

function comportamento_bolinha(){
  obj_bolinha();
  movimento_bolinha();
  colisao_borda();
}

function obj_bolinha(){ // criação da bolinha
  fill(0x8F,0xBC,0x8F); //preenchimento para o proximo objeto Pale Green
  circle(bolinha_x, bolinha_y, bolinha_dia); // posição x, posição y, diametro
}

function movimento_bolinha(){
  bolinha_x += velocidade_x;
  bolinha_y += velocidade_y;
}

function colisao_borda(){
  if (bolinha_x >= (backx - 7)){
    velocidade_x *= -1; // Colisão com a borda no eixo x
    pontosP1++;
  }
  if (bolinha_x <= 7){
    velocidade_x *= -1;
    pontosP2++;
  }
  if (bolinha_y >= (backy - 7) || bolinha_y <= 7) velocidade_y *= -1; // Colisão com a borda no eixo y
}

function BackGround(){
  colorMode(RGB); //trocar o modo de cor
  background(0xC0, 0xD9, 0xD9); // cor linda tirada do 
}

function comportamento_raquete1(){
  obj_raquete(raquete1_x, raquete1_y,0x59, 0x59, 0xAB);//preenchimento para o proximo objeto Rich Blue
  movimento_raquete1();
  colisao_raquete(raquete1_x, raquete1_y);
}

function obj_raquete(x, y, r, g, b){
  fill(r,g,b); //preenchimento para o proximo objeto Rich Blue
  rect(x, y, tamanho_raquete_x, tamanho_raquete_y);
}

function colisao_raquete(x, y){
  if(collideRectCircle(x, y, tamanho_raquete_x, tamanho_raquete_y, bolinha_x, bolinha_y, bolinha_dia))velocidade_x *= -1;
}

function movimento_raquete1(){
  if (keyIsDown(UP_ARROW)) {
    raquete1_y -= 6;
    if(raquete1_y <= 0) raquete1_y = 0;
  }
  if (keyIsDown(DOWN_ARROW)) {
    raquete1_y += 6;
    if(raquete1_y >= (backy - tamanho_raquete_y)) raquete1_y = backy - tamanho_raquete_y;
  }
}

function comportamento_raquete2(){
  obj_raquete((raquete2_x - tamanho_raquete_x), raquete2_y, 0xDC, 0x14, 0x3C);//preenchimento para o proximo objeto Crimson
  movimento_raquete2();
  colisao_raquete(raquete2_x, raquete2_y);
}

function movimento_raquete2(){
  if (keyIsDown(87)) {
    raquete2_y -= 6;
    if(raquete2_y <= 0) raquete2_y = 0;
  }
  if (keyIsDown(83)) {
    raquete2_y += 6;
    if(raquete2_y >= (backy - tamanho_raquete_y)) raquete2_y = backy - tamanho_raquete_y;
  }
}

function mostraPlacar(){
  textSize(50);
  textAlign(CENTER);
  fill(0x59, 0x59, 0xAB);
  rect((backx / 3) - 25, 6, 50, 50);
  fill(0xDC, 0x14, 0x3C);
  rect(((backx / 3) * 2) - 25, 6, 50, 50);
  fill(0);
  text(pontosP1, (backx / 3), 50);
  text(pontosP2, ((backx / 3) * 2), 50);
}
