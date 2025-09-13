//https://youtu.be/ZDYgbZ65eYg

let victor
let ancho = 800, alto = 400

let ra=0, rr=-3.14;
let click=0, click2=0;
let cubo1=106, cubo2=285;
let espacio = false;

function preload(){
  victor = loadImage('data/victor.jpg')
  
}

function setup() {
  createCanvas(800, 400)
  victor.resize(ancho/2, alto)
}

function draw() {
  background(255)
  image(victor, 0,0)
  noStroke()
  cuboAzul(cubo1)
  cuboRojo(cubo2)
  botonesf()
}
function keyPressed(){

     if(key == 'r'){
    ra=0;
    rr=-3.14;
    click=0;
    click2=0;
    cubo1=106;//posicionY cubo azul
    cubo2=285;//posicionY cubo rojo
  }
  if(key == ' '){
    espacio = !espacio;
  if(espacio){
          cubo1=285;
      cubo2=106;
    }else{cubo1=106;
      cubo2=285;} 
 }

}
function mousePressed(){
  botonesc();
}
