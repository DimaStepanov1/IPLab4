let time1 = prompt('Час сходу сонця у вигляді hh:mm', '');
let time2 = prompt('Час заходу сонця у вигляді hh:mm', '');
let time1arr = time1.split(':');
let h1 = parseInt(time1arr[0]);
let m1 = parseInt(time1arr[1]);
let time2arr = time2.split(':');
let h2 = parseInt(time2arr[0]);
let m2 = parseInt(time2arr[1]);
let d = ((h1 * 60 + m1) + (h2 * 60 + m2))/2 - 720;
let h = Math.round(d/60);
let m = d % 60;
alert(h + ' ' + m);