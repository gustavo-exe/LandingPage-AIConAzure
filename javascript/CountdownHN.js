// Hora-fecha que el contador se acabara
var countDownDate = new Date("Sep 25, 2021 16:00:00 GMT-06:00").getTime();

// Ejecutar la funcion cada segundo
var myfunc = setInterval(function() {

    var now = new Date().getTime();
    var timeleft = countDownDate - now;
        
    // Calculo del tiempo que falta
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        
    // TImepo restante que se ira mostrando
    document.getElementById("days").innerHTML = days 
    document.getElementById("hours").innerHTML = hours  
    document.getElementById("mins").innerHTML = minutes 
    document.getElementById("secs").innerHTML = seconds 
        
    // Mensaje que se desplegara cuando el tiempo se acabe
    if (timeleft < 0) {
        clearInterval(myfunc);
        //Se limpian para que no muestre el desbordamiento de tiempo
        document.getElementById("days").innerHTML = "00"
        document.getElementById("hours").innerHTML = "00" 
        document.getElementById("mins").innerHTML = "00"
        document.getElementById("secs").innerHTML = "00"
    }
}, 1000);