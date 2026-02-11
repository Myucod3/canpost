const canvas = document.getElementById('post');
const ctx = canvas.getContext('2d');

let

function click(e){


    const rect = canvas.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.beginPath();
    ctx.arc(x , y, 3, 0, Math.PI * 2);
    ctx.fillStyle = "black";
    ctx.fill(); 
    ctx.stroke();
}

canvas.addEventListener("pointerdown", click);
