//пеервое задание
// var circle = document.getElementById('circle');
// var radius = 100;
// var angle = 0;

// function moveCircle() {
//   var x = parseInt(window.innerWidth / 2 + radius * Math.cos(angle));
//   var y = parseInt(window.innerHeight / 2 + radius * Math.sin(angle));
//   circle.style.left = x + 'px';
//   circle.style.top = y + 'px';
//   angle += 0.02;
//   if (angle >= 2 * Math.PI) {
//     angle = 0;
//   }
//   setTimeout(moveCircle, 10);
// }

// moveCircle();







// Второе задание
var timer = document.getElementById('timer');
var message = document.getElementById('message');
var minutes = 5;
var seconds = 0;

function updateTimer() {
    if (seconds == 0 && minutes == 0) {
        message.innerHTML = "Время вышло!";
        clearInterval(interval);
    } else {
        if (seconds == 0) {
            minutes--;
            seconds = 59;
            message.innerHTML = "Прошла " + (4 - minutes) + " минут";
        } else {
            seconds--;
        }
        timer.innerHTML = minutes.toString().padStart(2, '0') + ":" + seconds.toString().padStart(2, '0');
    }
}

var interval = setInterval(updateTimer, 1000);