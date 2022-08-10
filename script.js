let video=document.querySelector('Video');
let playBoton = document.getElementById("Play");
let pauseBoton= document.getElementById("Pause");


function count(seconds){
    var a = new Date(seconds*1000);
    var minutes = (a.getMinutes()<10)?"0"+a.getMinutes():a.getMinutes();
    var seconds = (a.getSeconds()<10)?"0"+a.getSeconds():a.getSeconds();
    return minutes+":"+seconds;
}

let Time = document.getElementById("Video");
    Time.addEventListener("loadeddata",function(ev) {
    document.getElementById("Time").innerHTML = "Duración total: " + count(Time.duration);
},true);

let Elapsed = document.getElementById("Video");
    Elapsed.addEventListener("timeupdate",function(ev) {
    document.getElementById("Elapsed").innerHTML = "Tiempo reproducido: " + count(Elapsed.currentTime);  
},true);

Play.addEventListener('click',()=>{
    video.play()  
});

Pause.addEventListener('click',()=>{
    video.pause();
});