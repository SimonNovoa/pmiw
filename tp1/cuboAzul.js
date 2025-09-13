function cuboAzul(Y) {
  push();
  translate(597, Y);
  fill(0);
  noStroke();
  rotate(ra);


  for (let py = 0; py < 4; py = py + 1) {
    let azul= color(88, 77, 207);
    let verde= color(48, 92, 33);
    if (mouseX>600) {
      azul =color(48, 92, 33);
      verde =color(88, 77, 207);
    }
    let des = py * -13;
    for (let px = 0; px < 4; px = px + 1) {
      if ((px+py)%2==0) {
        fill(azul);
      } else {
        fill(verde);
      }
      quad(px*26 + 13 + -65 + des, py*23 + -91,
        px*26 + 40 + -65 + des, py*23 + -91,
        px*26 + 27 + -65 + des, py*23 + -68,
        px*26 + -65 + des, py*23 + -68);
    }
  }

  push();
  rotate(-2.09);
  for (let py = 0; py < 4; py = py + 1) {
    let azul= color(48, 58, 50);
    let verde= color(55, 47, 158);
    if (mouseX>600) {
      azul =color(55, 47, 158);
      verde =color(48, 58, 50);
    }
    let des = py * -13;
    for (let px = 0; px < 4; px = px + 1) {
      if ((px+py)%2==0) {
        fill(azul);
      } else {
        fill(verde);
      }
      quad(px*26 + 13 + -65 + des, py*23 + -91,
        px*26 + 40 + -65 + des, py*23 + -91,
        px*26 + 27 + -65 + des, py*23 + -68,
        px*26 + -65 + des, py*23 + -68);
    }
  }
  pop();
  push();
  rotate(2.10);
  for (let py = 0; py < 4; py = py + 1) {
    let azul= color(113, 130, 234);
    let verde= color(70, 145, 44);
    if (mouseX>600) {
      azul =color(70, 145, 44);
      verde =color(113, 130, 234);
    }
    let des = py * -13;
    for (let px = 0; px < 4; px = px + 1) {
      if ((px+py)%2==0) {
        fill(azul);
      } else {
        fill(verde);
      }
      quad(px*26 + 13 + -65 + des, py*23 + -91,
        px*26 + 40 + -65 + des, py*23 + -91,
        px*26 + 27 + -65 + des, py*23 + -68,
        px*26 + -65 + des, py*23 + -68);
    }
  }
  pop();

  pop();
}
