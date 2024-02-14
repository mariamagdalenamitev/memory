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
