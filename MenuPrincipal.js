function menuPrincipal () {
    
    localStorage.setItem("puntuacion", 0);
    localStorage.setItem("vidas", 0);
                
    //CREAR Y CARGAR EL CONTEXTO
    var canvas = document.getElementById("lienzo");
    var contexto = canvas.getContext("2d");
    
    //CREAR Y CARGAR LA MÚSICA
    var musica = document.getElementById("musicaMenu");
    musica.currentTime = 0;
    musica.play();

    var move = document.getElementById("menuMover");
    var select = document.getElementById("menuSelect");
    
    //CREAR Y CARGAR LOS SPRITES
    var pantallaJugar = new Image();
    pantallaJugar.src = "Menús/MenuPrincipalJugar.png";
    
    var pantallaControles = new Image();
    pantallaControles.src = "Menús/MenuPrincipalControles.png";
    
    var pantallaCreadores = new Image();
    pantallaCreadores.src = "Menús/MenuPrincipalCreadores.png";
    
    var pantallaCreditos = new Image();
    pantallaCreditos.src = "Menús/MenuPrincipalCréditos.png"; 
    
    //VARIABLES GLOBALES
    var seleccion = 1;
    
    //RETARDO PARA CARGAR LAS IMÁGENES
    pantallaJugar.onload = function () {
        
        function mover (e) {
            
            if (e.key === 's' || e.key === 'S') {
                seleccion ++;
                move.currentTime = 0;
                move.play();
                if (seleccion > 4) {
                    seleccion = 1;
                };   
            };
            
            if (e.key === 'w' || e.key === 'W') {
                seleccion --;
                move.currentTime = 0;
                move.play();
                if (seleccion < 1) {
                    seleccion = 4;
                };
            };
            
            if (e.keyCode === 13) {
                window.removeEventListener("keydown", mover, false);
                window.clearInterval(frame);
                select.currentTime = 0;
                select.play();
                musica.pause();
                switch (seleccion) {
                    case 1:
                        menuJugar();
                        break;
                    case 2:
                        menuControles();
                        break;
                    case 3:
                        menuCreadores();
                        break;
                    case 4:
                        menuCreditos();
                        break;
                };   
            };
        };
        
        function dibujarMenu () {
            
            switch (seleccion) {
                case 1:
                    contexto.drawImage(pantallaJugar, 0, 0, pantallaJugar.width, pantallaJugar.height);
                    break;
                case 2:
                    contexto.drawImage(pantallaControles, 0, 0, pantallaControles.width, pantallaControles.height);
                    break;
                case 3:
                    contexto.drawImage(pantallaCreadores, 0, 0, pantallaCreadores.width, pantallaCreadores.height);
                    break;
                case 4:
                    contexto.drawImage(pantallaCreditos, 0, 0, pantallaCreditos.width, pantallaCreditos.height);
                    break;
            };     
        };   
        
        window.addEventListener("keydown", mover, false);
        var frame = window.setInterval(dibujarMenu, 100); 
    };   
};


