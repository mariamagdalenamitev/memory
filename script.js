let colors = ['#ffd1dc','#ffecd1','#d1ffea','#e3d1ff','#ffbf80','#ffef96','#aaff80','#96ffe0','#ff9cf0','#d1c2ff','#b2b2b2','#99e6e6','#d98cb3','#d6ff80','#ffe080','#80ffbf']
let symon = []

function showNotification(message) {
    console.log(message)
    var notification = document.getElementById('notification');
    notification.style.backgroundColor=message
    notification.style.display = 'block';

    setTimeout(function() {
        notification.style.display = 'none';
    }, 2000);
}

//Afegir funció iniciar partida enviant el missatge. exemple:

 async function nouNivell() {
    symon.push(colors[Math.trunc(Math.random()*colors.length)])
     posicio= 0;
     for (let i = 0; i < symon.length; i++) {
         showNotification(symon[i])
         //Crida al mètode espera
         await esperar(2500)
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
        if (symon.length == posicio){
            nouNivell();
        }
    }
    else {
        window.alert("Has perdut, el color que has pitjat no era el correcte!")
    }
}