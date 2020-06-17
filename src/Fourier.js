import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
// import sketch from './Resource/FourierSketch.js'
let time = 0;
let wave = [];
function sketch(p){

  p.setup = function() {
    p.createCanvas(1200,400);

  };
  p.draw = function(){
    p.background(0);
    p.translate(200, 200);
    let radius = 75;

    p.stroke(255);
    p.noFill();
    p.ellipse(0, 0, radius * 2);

    let x = radius * p.cos(time);
    let y = radius * p.sin(time);
    wave.push(y);
    p.fill(255);
    p.ellipse(x,y, 15);
    p.line(0,0,x,y);
    p.beginShape();
    p.noFill();
    p.translate(150,0);
    for (let i = 0; i< wave.length; i++){

      p.vertex(i, wave[i]);
    }
    p.endShape();
    time -= 0.045;
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
