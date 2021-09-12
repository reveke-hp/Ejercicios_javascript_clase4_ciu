let img = document.getElementById("img")

img.onmousedown = function(event) {

let shiftX = event.clientX - img.getBoundingClientRect().left;
let shiftY = event.clientY - img.getBoundingClientRect().top;

img.style.position = 'absolute';
img.style.zIndex = 1000;
document.body.append(img);

moverA(event.pageX, event.pageY);


function moverA(pageX, pageY) {
    img.style.left = pageX - shiftX + 'px';
    img.style.top = pageY - shiftY + 'px';
}

function onMouseMove(event) {
    moverA(event.pageX, event.pageY);
}

document.addEventListener('mousemove', onMouseMove);

img.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    img.onmouseup = null;
    };
};

img.ondragstart = function() {
    return false;
};
       