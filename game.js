const canvas = document.querySelector('canvas');
canvas.height = 550;
canvas.width = 600;
canvas.style.borderColor = 'red';

// creating context as 'ctx'
const ctx = canvas.getContext('2d');

// ctx.fillStyle = 'blue';
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
ctx.lineWidth = 8;
ctx.arc(150, 150, 40, 0, Math.PI * 2);
ctx.fillStyle = 'green'
ctx.strokeStyle = 'red';
ctx.stroke(); // draw
ctx.fill();

// creating text in canvas
ctx.strokeStyle = 'blue';
ctx.lineWidth = 1;
ctx.font = '50px Calibri';
ctx.strokeText("Hello World", 350, 300);

// player example
// ctx.fillStyle = 'yellow'
// creating square as player
ctx.fillRect(400, 400, 40, 40);

// display image of labrador
const img = new Image();
img.src = 'https://static.pexels.com/photos/8700/wall-animal-dog-pet.jpg';


img.onload = () => {
  ctx.drawImage(img, 0, 0, 190, 100);
  ctx.drawImage()
}



// class Game {
//   constructor(rows, columns) {
//     this.rows = rows;
//     this.columns = columns;
//   }

//   startGame() {
//     console.log("start game")
//   }
  
// }


// edie & pablo
// katherine & pao & chris
// viktor & sylvia
// kalju & lazaro
// 