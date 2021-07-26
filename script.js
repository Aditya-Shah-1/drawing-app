    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    let linewidth = 10;
    
window.addEventListener("load", () => {
    //Resizing
    canvas.height = window.innerHeight - 100;
    canvas.width = window.innerWidth - 4;

    //var
    let painting = false;

    function startPosition(){
        painting = true;
        draw(e);
    }
    function finishedPosition(){
        painting = false;
        ctx.beginPath();
    }
    
    function draw(e) {
        if (!painting) return;
        ctx.lineWidth = linewidth;
        ctx.lineCap = "round";

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }
    //EventListeners
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup",finishedPosition);
    canvas.addEventListener("mousemove", draw);
    

});

// ctx.fillStyle = "#FF0000";
// ctx.strokeStyle = "#FF0000";
// 

function changeColor(value) {
    ctx.strokeStyle = value;
    console.log(value)
}

function changeStrokeSize(value){
    linewidth=value
    document.getElementById('value').innerHTML = value;
}

function del(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}