let menu= document.querySelector('.menu');
let flag=false;

function iniciar(){
let imagenes=document.querySelectorAll('#cajaimagenes img');
soltar=document.getElementById('cajasoltar');
soltar2 =document.getElementById('cajasoltar2');
soltar3 = document.getElementById('cajasoltar3');

for(let i=0; i<imagenes.length; i++){
imagenes[i].addEventListener('dragstart', arrastrado, false);
imagenes[i].addEventListener('dragend', finalizado, false);
}

soltar.addEventListener('dragenter', function(e){
e.preventDefault(); }, false);
soltar.addEventListener('dragover', function(e){
e.preventDefault(); }, false);
soltar.addEventListener('drop', soltado, false);

soltar2.addEventListener('dragenter', function(e){
e.preventDefault(); }, false);
soltar2.addEventListener('dragover', function(e){
e.preventDefault(); }, false);
soltar2.addEventListener('drop', soltado2, false);

soltar3.addEventListener('dragenter', function(e){
e.preventDefault(); }, false);
soltar3.addEventListener('dragover', function(e){
e.preventDefault(); }, false);
soltar3.addEventListener('drop', soltado3, false);
}

function arrastrado(e){
elemento=e.target;
e.dataTransfer.setData('Text', elemento.getAttribute('id'));
}

function finalizado(e){
elemento=e.target;
elemento.style.visibility='hidden';
}

function soltado(e){
e.preventDefault();
let id=e.dataTransfer.getData('Text');
if(id=="imagen2"){
let src=document.getElementById(id).src;
soltar.innerHTML='<img src="'+src+'" height="400px" width="275px">';
}else{
// soltar.innerHTML='la imagen no es admitida';
soltar.innerHTML='<img src="./assets/imagenes/error.jpeg" height="400px" width="275px">';
}
}

function soltado2(e){
e.preventDefault();
let id=e.dataTransfer.getData('Text');
if(id=="imagen1"){
let src=document.getElementById(id).src;
soltar2.innerHTML='<img src="'+src+'"height="400px" width="275px">';
}else{
// soltar2.innerHTML='la imagen no es admitida';
soltar2.innerHTML='<img src="./assets/imagenes/error.jpeg" height="400px" width="275px">';
}}

function soltado3(e){
e.preventDefault();
let id=e.dataTransfer.getData('Text');
if(id=="imagen3"){
let src=document.getElementById(id).src;
soltar3.innerHTML='<img src="'+src+'"height="400px" width="275px">';
}else{
// soltar3.innerHTML='la imagen no es admitida';
soltar3.innerHTML='<img src="./assets/imagenes/error.jpeg" height="400px" width="275px">';
}}

function reinicio() {
window.location.reload();
}
iniciar()
//window.addEventListener('load', iniciar, false);