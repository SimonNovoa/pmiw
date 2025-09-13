function botonesf() {

  //fill(0,255,0);text(""+mouseX+","+mouseY+"", mouseX, mouseY);
  if (botonCubo(597, cubo1,195)) {
    cursor(HAND);
  } else {
    cursor(ARROW);
  }
  if (botonCubo(597, cubo2,195)) {
    cursor(HAND);
  }
}
function botonesc() {
  if (botonCubo(597, cubo1,195)) {
    click++;
    cambio();
  }
  if (botonCubo(597, cubo2,195)) {
    click2++;
    cambio2();
  }
}

function botonCubo(cuboX, cuboY, diametro) {
  return dist(mouseX, mouseY, cuboX, cuboY) < diametro / 2
  
}
