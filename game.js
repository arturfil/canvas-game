const canvas = document.querySelector('canvas');
canvas.height = 550;
canvas.width = 600;
canvas.style.borderColor = 'red';

const ctx = canvas.getContext('2d');

ctx.fillRect(30, 30, 200, 200);
ctx.clearRect(30, 30, 200, 200)

ctx.beginPath(); // declare that we are going to put pen on the paper
ctx.lineTo(50, 50); // start at that point
ctx.lineTo(250, 50); // move to
ctx.lineTo(300, 100); // move to
ctx.stroke(); // draw
ctx.closePath(); // lift the pen from the paper

ctx.beginPath();
ctx.lineTo(30, 30);
ctx.lineTo(30, 130);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(150, 150, 40, 0, Math.PI * 3/2);
ctx.stroke(); // draw
// ctx.fill();

// class Game {
//   constructor(rows, columns) {
//     this.rows = rows;
//     this.columns = columns;
//   }

//   startGame() {
//     console.log("start game")
//   }
  
// }
