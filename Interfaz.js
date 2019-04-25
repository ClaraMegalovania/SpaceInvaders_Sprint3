function interfaz () {
    
    localStorage.setItem("puntuacion", 0);
    localStorage.setItem("vidas", 0);

    //CREAR Y CARGAR EL CONTEXTO
    var canvasIzquierda = document.getElementById("lienzoIzq");
    var contextoIzquierda = canvasIzquierda.getContext("2d");
    var canvasDerecha = document.getElementById("lienzoDer");
    var contextoDerecha = canvasDerecha.getContext("2d");

    //CREAR Y CARGAR LOS SPRITES
    var interfazIzquierdaPose = 0;
    var interfazIzquierda = [];
    interfazIzquierda[0] = new Image();
    interfazIzquierda[0].src = "Interfaz/InterfazIzquierda0.png";
    interfazIzquierda[1] = new Image();
    interfazIzquierda[1].src = "Interfaz/InterfazIzquierda1.png";
    interfazIzquierda[2] = new Image();
    interfazIzquierda[2].src = "Interfaz/InterfazIzquierda2.png";
    interfazIzquierda[3] = new Image();
    interfazIzquierda[3].src = "Interfaz/InterfazIzquierda3.png";
    interfazIzquierda[4] = new Image();
    interfazIzquierda[4].src = "Interfaz/InterfazIzquierda4.png";
    
    var interfazDerechaPose = 0;
    var interfazDerecha = [];
    interfazDerecha[0] = new Image();
    interfazDerecha[0].src = "Interfaz/InterfazDerecha0.png";
    interfazDerecha[1] = new Image();
    interfazDerecha[1].src = "Interfaz/InterfazDerecha1.png";
    interfazDerecha[2] = new Image();
    interfazDerecha[2].src = "Interfaz/InterfazDerecha2.png";
    interfazDerecha[3] = new Image();
    interfazDerecha[3].src = "Interfaz/InterfazDerecha3.png";
    interfazDerecha[4] = new Image();
    interfazDerecha[4].src = "Interfaz/InterfazDerecha4.png";
    
    
    var interfazRadarPose = 0;
    var interfazRadarPoseSiguiente = 0;
    var interfazRadar = [];
    interfazRadar[0] = new Image();
    interfazRadar[0].src = "Interfaz/InterfazRadar0.png";
    interfazRadar[1] = new Image();
    interfazRadar[1].src = "Interfaz/InterfazRadar1.png";
    interfazRadar[2] = new Image();
    interfazRadar[2].src = "Interfaz/InterfazRadar2.png";
    
    //VARIABLES GLOBALES
    var puntuacion;
    var vidas;
    var power = 5;
    contextoIzquierda.fillStyle = "chartreuse ";
    contextoIzquierda.font = "25px Verdana";     
    

    interfazRadar[2].onload = function () {
        function dibujarInterfaz() {
            puntuacion = parseInt(localStorage.getItem("puntuacion"));
            vidas = parseInt(localStorage.getItem("vidas"));
            contextoIzquierda.drawImage(interfazIzquierda[interfazIzquierdaPose], 0, 0, interfazIzquierda[interfazIzquierdaPose].width, interfazIzquierda[interfazIzquierdaPose].height);
            contextoIzquierda.textAlign = "center";
            contextoIzquierda.fillStyle = "chartreuse";
            contextoIzquierda.fillText(vidas, 190, 130);
            contextoIzquierda.fillText(puntuacion, 190, 180);
            contextoIzquierda.textAlign = "left";
            contextoIzquierda.fillStyle = "red";
            if (power > 0) {
                contextoIzquierda.fillRect(152, 203, 5, 25);
            };
            contextoIzquierda.fillStyle = "orange";
            if (power > 1) {
                contextoIzquierda.fillRect(162, 203, 5, 25);
            };
            if (power > 2) {
                contextoIzquierda.fillRect(172, 203, 5, 25);
            };
            contextoIzquierda.fillStyle = "yellow";
            if (power > 3) {
                contextoIzquierda.fillRect(182, 203, 5, 25);
            };
            if (power > 4) {
                contextoIzquierda.fillRect(192, 203, 5, 25);
            };
            if (power > 5) {
                contextoIzquierda.fillRect(202, 203, 5, 25);
            };         
            contextoIzquierda.fillStyle = "green";
            if (power > 6) {
                contextoIzquierda.fillRect(212, 203, 5, 25);
            };   
            if (power > 7) {
                contextoIzquierda.fillRect(222, 203, 5, 25);
            };   
            if (power > 8) {
                contextoIzquierda.fillRect(232, 203, 5, 25);
            };   
            if (power > 9) {
                contextoIzquierda.fillRect(242, 203, 5, 25);
            };            
            contextoDerecha.drawImage(interfazDerecha[interfazDerechaPose], 0, 0, interfazDerecha[interfazDerechaPose].width, interfazDerecha[interfazDerechaPose].height);
            contextoDerecha.drawImage(interfazRadar[interfazRadarPose], 15, 15, interfazRadar[interfazRadarPose].width, interfazRadar[interfazRadarPose].height);
            
            interfazRadarPoseSiguiente ++;
            if (interfazRadarPoseSiguiente > 40) {
                interfazRadarPoseSiguiente = 0;
                interfazRadarPose++;
                if (interfazRadarPose > 2) {
                    interfazRadarPose = 0;
                };
            };
        };

        function controles(e) {
            if (e.key === " " || e.key === " ") {
                interfazDerechaPose = 1;
            };
            if (e.key === "p" || e.key === "P") {
                interfazDerechaPose = 2;
            };
            if (e.keyCode === 13) {
                interfazDerechaPose = 3;
            };
            if (e.key === "e" || e.key === "E") {
                interfazDerechaPose = 4;
            };
            if (e.key === "a" || e.key === "A") {
                interfazIzquierdaPose = 1;
            };
            if (e.key === "d" || e.key === "D") {
                interfazIzquierdaPose = 2;
            };
            if (e.key === "s" || e.key === "S") {
                interfazIzquierdaPose = 3;
            };
            if (e.key === "w" || e.key === "W") {
                interfazIzquierdaPose = 4;
            };
        };
        
        function soltar() {
            interfazIzquierdaPose = 0;
            interfazDerechaPose = 0;
        };
        
        function cambiarPower () {
            if (random(1,2) === 1) {
                power ++;
            } else {
                power --;
            };
            if (power < 2) {
                power = 2;
            };
            if (power > 10) {
                power = 10;
            };
        };

        window.addEventListener("keydown", controles, false);
        window.addEventListener("keyup", soltar, false);
        window.setInterval(dibujarInterfaz, 10);
        window.setInterval(cambiarPower, 100);
    };
};

