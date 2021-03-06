export class Tile {
  // static width = 50;
  // static height = 50;
  constructor(width,height,real_x,real_y,index) {
    this.width = width
    this.height = height
    this.real_x = real_x
    this.real_y = real_y
    this.baseX = window.innerWidth / 2;
    this.baseY = -100;
    this.vx = 0;
    this.vy = 0;
    this.index = index
    this.canvas = document.createElement('canvas')
    this.canvas.width = width
    this.canvas.height = height
    this.ctx =  this.canvas.getContext('2d')
  }
  init(img,x,y) {
    this.ctx.drawImage(img,x,y,this.width,this.height,0,0,this.width,this.height)
  }
  updatePosition() {
    this.vx = this.real_x - this.baseX;
    this.vy = this.real_y - this.baseY;
    this.vx *= 0.1;
    this.vy *= 0.1;
    this.baseX += this.vx;
    this.baseY += this.vy;
  }
}