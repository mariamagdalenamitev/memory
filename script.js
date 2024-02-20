let colors = ['#ffd1dc','#ffecd1','#d1ffea','#e3d1ff','#ffbf80','#ffef96','#aaff80','#96ffe0','#ff9cf0','#d1c2ff','#b2b2b2','#99e6e6','#d98cb3','#d6ff80','#ffe080','#80ffbf']
let symon = []

function mostrarColors(){
    for (let i = 0; i<colors.length; i++){
        if (symon.charAt(i) === colors.charAt(i)){
            console.log(colors.push(colors))
        }
    }
}
/*
    Mostra la notificació al panell notification
    Mostra el color hexadecimal passat per paràmetre
 */

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


function colorBoto(){
    if (){

    }
}
/*    console.table(colors.push(colors))
    for (let i = 0; i < .length; i++){
        if (colors.push(colors) === symon){
            //Que m'ensenyi un altre element de la llista
        }
    }*/

//On he de posar el push?
//La funció mostrar colors a q ho he d'enllaçar?