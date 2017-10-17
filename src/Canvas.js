import Turtle from './Turtle';

export default class Canvas {
  constructor(canvasRef, turtleRef) {
    this.canvasRef = canvasRef;
    this.turtleRef = turtleRef;
    this.height = 400;
    this.width = 600;
    this.pos = {
      x: 100,
      y: 100,
      rot: 0,
    };
    this.ctx = canvasRef.getContext('2d');
    this.turtle = new Turtle(canvasRef, turtleRef);
  }

  drawTurtle = () => {

  }
}
