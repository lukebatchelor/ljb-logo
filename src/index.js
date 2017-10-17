/* global document, window */
import Canvas from './Canvas';


const canvasRef = document.getElementById('canvas');
const turtleRef = document.getElementsByClassName('turtle').item(0);

const canvas = new Canvas(canvasRef, turtleRef);
const canvasElPosition = canvasRef.getBoundingClientRect();


function run() {
  console.log(canvas);
}

// TODO: Figure out a better way to expose these
window.run = run;
