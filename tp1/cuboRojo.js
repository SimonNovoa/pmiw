function cuboRojo(Y){
  push();
  translate(597,Y);
  noStroke();
  rotate(rr);
  

  for(let py = 0; py < 4; py = py + 1){
       let des = py * -13;
       let rojo= color(188,18,45);
       let violeta=color(143,45,130);
       if(mouseX>600){rojo =color(143,45,130);violeta=color(188,18,45);}
       for(let px = 0; px < 4; px = px + 1){ 
         if((px+py)%2==0){fill(rojo);}else{fill(violeta);}
         quad(px*26 + 13 + -65 + des,py*23 + -91,
         px*26 + 40 + -65 + des, py*23 + -91,
         px*26 + 27 + -65 + des, py*23 + -68,
         px*26 + -65 + des, py*23 + -68);
         
    }
  }
  
  push();
  rotate(-2.09);
   for(let py = 0; py < 4; py = py + 1){
       let rojo= color(173,90,182);
       let violeta=color(216,50,60);
       if(mouseX>600){rojo =color(216,50,60);violeta=color(173,90,182);}
       let des = py * -13; 
       for(let px = 0; px < 4; px = px + 1){ 
         if((px+py)%2==0){fill(rojo);}else{fill(violeta);}
         quad(px*26 + 13 + -65 + des,py*23 + -91,
         px*26 + 40 + -65 + des, py*23 + -91,
         px*26 + 27 + -65 + des, py*23 + -68,
         px*26 + -65 + des, py*23 + -68);
         
    }
  }
 pop();
   push();
  rotate(2.10);
   for(let py = 0; py < 4; py = py + 1){
       let rojo= color(83,39,75);
       let violeta=color(120,36,49);
       if(mouseX>600){rojo =color(120,36,49);violeta=color(83,39,75);}
       let des = py * -13; 
       for(let px = 0; px < 4; px = px + 1){ 
         if((px+py)%2==0){fill(rojo);}else{fill(violeta);}
         quad(px*26 + 13 + -65 + des,py*23 + -91,
         px*26 + 40 + -65 + des, py*23 + -91,
         px*26 + 27 + -65 + des, py*23 + -68,
         px*26 + -65 + des, py*23 + -68);
         
    }
  }
 pop();
 
 pop();
 }
