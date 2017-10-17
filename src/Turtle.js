
export default class Turtle {
  constructor(canvasRef, turtleRef) {
    this.canvasRef = canvasRef;
    this.turtleRef = turtleRef;
    this.height = 30;
    this.width = 30;

    const canvasRect = canvasRef.getBoundingClientRect();
    this.offsetTop = canvasRect.top - this.height + (canvasRect.height / 2);
    this.offsetLeft = canvasRect.left - (this.width / 2) + (canvasRect.width / 2);
    this.setPos(0, 0);
  }

  setPos = (x, y) => {
    this.turtleRef.style.top = this.offsetTop + y;
    this.turtleRef.style.left = this.offsetLeft + x;
  }
}
