import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
// import sketch from './Resource/FourierSketch.js'
let time = 0;
let wave = [];
let degree = 5;
function sketch(p){

  p.setup = function() {
    p.createCanvas(1200,400);

  };
  p.draw = function(){
    p.background(0);
    p.stroke(255);

    p.translate(200, 200);
    p.line(0,-(100 *  (4 / (1 * p.PI))),0, (100 *  (4 / (1 * p.PI))));
    p.line(0,0,750,0)




    let x = 0;
    let y = 0;
    for (let i = 0; i < degree; i++) {
      let prevx = x;
      let prevy = y;
      let n = i * 2 + 1;
      let radius = 100 *  (4 / (n * p.PI));
      x += radius * p.cos(n*time);
      y += radius * p.sin(n*time);


      p.stroke(255,100);
      p.noFill();
      p.ellipse(prevx, prevy, radius * 2);


      p.fill(255);
      p.stroke(255);
      p.line(prevx,prevy,x,y);
      // p.ellipse(x,y,8);


    }
    p.beginShape();
    p.noFill();
    wave.unshift(y);
    p.translate(150,0);
    p.line(x-150,y,0, wave[0]);
    for (let i = 0; i< wave.length; i++){

      p.vertex(i, wave[i]);
    }

    p.endShape();
    time -= 0.02;
    if (wave.length > 600){
      wave.pop();
    }
  }
}
export default class Fourier extends React.Component {

  render(){
    return(
      <P5Wrapper sketch={sketch}>

      </P5Wrapper>
    )
  }
}
