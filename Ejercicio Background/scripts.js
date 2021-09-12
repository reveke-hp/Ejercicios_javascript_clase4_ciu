
let color = document.getElementById("colorInputText").value;
const body = document.body

function presionarEnter(){
  var tecla_enter = event.keyCode;
  if (tecla_enter == 13){
    document.body.style.backgroundColor = color
  }
}  
function presionarBorrar(){
  var tecla_borrar = event.keyCode;
  if (tecla_borrar == 8){
    body.style.backgroundColor = "white"
  }
}

window.onkeydown = presionarEnter;
