let colors = ['#ffd1dc','#ffecd1','#bdd7f6','#e3d1ff','#ffbf80','#484014','#aaff80','#96ffe0','#ff9cf0','#846dcc','#b2b2b2','#00fdfd','#d98cb3','#d6ff80','#ffe080','#01fd82']
let symon = []

function showNotification(message) {
    console.log(message)
    var notification = document.getElementById('notification');
    notification.style.backgroundColor=message
    notification.style.display = 'block';

    setTimeout(function() {
        notification.style.display = 'none';
    }, parseInt(document.getElementById("myRange").value));
}

//Afegir funció iniciar partida enviant el missatge. exemple:

 async function nouNivell() {
    symon.push(colors[Math.trunc(Math.random()*colors.length)])
     posicio= 0;
     for (let i = 0; i < symon.length; i++) {
         showNotification(symon[i])
         //Crida al mètode espera
         await esperar(parseInt(document.getElementById("myRange").value)+500)
     }
}

function esperar(milliseconds){
    return new Promise(resolve => {
    setTimeout(resolve,milliseconds);
});
}

let posicio = 0
function colorBoto(color){
    if (color == symon[posicio]) {
        posicio++
        console.log(posicio + "-"+ symon.length)
        console.log(symon)
        if (symon.length == posicio){
            nouNivell();
        }
    }
    else {
        window.alert("Has perdut, el color que has pitjat no era el correcte! Si vols tornar a jugar reinicia la pàgina. ")
    }
}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
}

let intents = 0
function nivells () {
    if (symon.length == posicio) {
        intents++
        window.alert("Has completat"+intents+"nivells en total")
    }
}
//Revisar intents