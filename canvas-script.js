const canvas = document.getElementById('post');
const ctx = canvas.getContext('2d');

let drawing = false;
let erasing = false;
let brushSize = 2;

document.getElementById('2px-btn').addEventListener("click", () => {
    brushSize = 2;
    brushSizeInfo();
});

document.getElementById('4px-btn').addEventListener("click", () => {
    brushSize = 4;
    brushSizeInfo();
});

document.getElementById('6px-btn').addEventListener("click", () => {
    brushSize = 6;
    brushSizeInfo();
});

document.getElementById('8px-btn').addEventListener("click", () => {
    brushSize = 8;
    brushSizeInfo();
});

document.getElementById('tool-btn').addEventListener("click", () => {
    erasing = !erasing;

    if(erasing) {
        document.getElementById('tool-btn').textContent = "Pen";
    } else {
        document.getElementById('tool-btn').textContent = "Eraser";
    }
});

canvas.addEventListener("pointerdown", e => {
    drawing = true;

    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
});

canvas.addEventListener("pointermove", e => {
    if(!drawing) return;

    if(erasing) {
        ctx.globalCompositeOperation = "destination-out";
    } else {
        ctx.globalCompositeOperation = "source-over";
        ctx.strokeStyle = "black";
    }
    
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

document.getElementById('upl-form').addEventListener("submit", e => {
    e.preventDefault();

    const image = canvas.toDataURL('image/png');
    console.log('Sending image',image);
    
    
    
});

function saveCanvas(){
    
}

function showPosts() {
    

}