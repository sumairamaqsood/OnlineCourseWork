const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

// draw rectangle
ctx.fillStyle = 'pink';
ctx.fillRect(10, 10, 100, 100);

// draw circle
ctx.fillStyle = 'green';
ctx.arc(300, 300, 100, 0, Math.PI * 2);
ctx.fill();

// draw line

ctx.beginPath();
ctx.strokeStyle = 'orange';
ctx.lineWidth = 5;
ctx.moveTo(50, 200);
ctx.lineTo(200, 200);
ctx.stroke();

//draw a text

ctx.font = '30px Arial';
ctx.fillStyle = 'blue';
ctx.fillText('Hello World', 100, 100, 50);
// ctx.strokeText('Hello World', 100, 100, 50);
ctx.strokeStyle = 'black';
ctx.lineWidth = 5;

// Draw image
const image = document.querySelector('img');
image.addEventListener('load', () => {
  ctx.drawImage(image, 250, 250, 100, 100);
});
