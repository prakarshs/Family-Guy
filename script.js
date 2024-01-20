var cursor = document.querySelector("#cursor");
var cursorBlur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x-5+"px";
    cursor.style.top = dets.y-2+"px";
    cursorBlur.style.left = dets.x-50+"px";
    cursorBlur.style.top = dets.y-50+"px";
})