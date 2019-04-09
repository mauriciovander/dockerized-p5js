global.debug = false;
require("../p5adapter");

const p5 = require("p5");

var app = new p5(function(p) {

  var img;
  var y, x;
  var width=300;
  var height=300;

  p.setup = function() {
    p.mCanvas = p.createCanvas(width, height).elt;
    img = p.loadImage('assets/n2048.png');

    x = y = 0;
  }

  p.draw = function() {
    p.background(0);
    p.image(img,p.random(-60,-40),p.random(-60,-40));

    p.stroke(200,0,0,200);
    p.line(0,y,width,y);

    p.stroke(200,100);
    p.line(0,y-30,width,y-30);
    
    p.stroke(200,30);
    for(var i = 0; i<100; i++) {
      var yp = p.random(0, height);
      p.line(0,yp,width,yp);
    }
    
    p.stroke(200,0,0,60);
    p.line(x,0,x,height);

    p.stroke(200,40);
    p.line(x-20,0,x-20,height);
    
    y+=0.4;
    y++;
    y+= p.random(-1,1);
    if(y>height / 5 ){
      y=0;
      console.log(p.mCanvas.toDataURL());
      p.noLoop();
    } 
    
    x+=0.4;
    x++;
    x+= p.random(-1,1);
    if(x>width) x=0;

    // console.error(y*100/height);
    // p.noLoop();
  }

});