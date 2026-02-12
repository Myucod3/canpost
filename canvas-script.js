const canvas = document.getElementById('post');
const ctx = canvas.getContext('2d');

const plus = document.getElementById('plus-btn');
const minus = document.getElementById('mns-btn');

let drawing = false;
let brushSize = 1;



plus.addEventListener("click", function() {
    brushSize += 0.5;
    brushSizeInfo();
});

minus.addEventListener("click", function() {
    brushSize -= 0.5;
    brushSize = Math.max(0.5, brushSize);
    brushSizeInfo();
});

canvas.addEventListener("pointerdown", e => {
    drawing = true;

    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
});

canvas.addEventListener("pointermove", e => {
    if(!drawing) return;
    
    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";

    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
});

canvas.addEventListener("pointerup", () => drawing = false);
canvas.addEventListener("pointerleave", () => drawing = false);

document.getElementById("brs-size-inf").innerHTML = brushSize;

function brushSizeInfo(){
    document.getElementById("brs-size-inf").innerHTML = brushSize;
}

document.getElementById('upl-form').addEventListener("submit", e =>{
    e.preventDefault();

    const image = canvas.toDataURL('image/png');
    console.log('Sending image',image);
    
});

function showPosts() {
    
}