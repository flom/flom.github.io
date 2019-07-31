let elem = document.getElementById('test');

let canvas = document.createElement('canvas');
canvas.style.setProperty('width', '100%');
canvas.style.setProperty('height', '100%');

elem.appendChild(canvas);

let ctx = canvas.getContext('2d');

const scale = 5;
ctx.beginPath();
ctx.lineWidth = 2;
ctx.moveTo(0, ctx.canvas.height);

let height = ctx.canvas.height;
for (let i = 0; i < 100; i++) {
    let y_val = height - (i*i);
    ctx.lineTo(scale * i, y_val);
    //ctx.moveTo(i, y_val);
}
ctx.stroke();
