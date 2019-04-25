function menuJugar () {
    
    //CREAR Y CARGAR EL CONTEXTO
    var canvas = document.getElementById("lienzo");
    var contexto = canvas.getContext("2d");
    
    //CREAR Y CARGAR LA MÚSICA
    var musica = document.getElementById("musicaSubMenu");
    musica.currentTime=0;
    musica.play();
    
    var move = document.getElementById("menuMover");
    var select = document.getElementById("menuSelect");
    
    //CREAR Y CARGAR LOS SPRITES
    var pantallaSinDisparos = new Image();
    pantallaSinDisparos.src = "Menús/MenuJugarSinDisparos.png";
    
    var pantallaConDisparos = new Image();
    pantallaConDisparos.src = "Menús/MenuJugarConDisparos.png";
    
    //VARIABLES GLOBALES
    var seleccion = 1;
    
    //RETARDO PARA CARGAR LAS IMÁGENES
    pantallaSinDisparos.onload = function () {
        
        function mover (e) {
            
            if (e.key === 'a' || e.key === 'A') {
                seleccion --;
                move.currentTime = 0;
                move.play();
                if (seleccion < 1) {
                    seleccion = 2;
                };
            };
            
            if (e.key === 'd' || e.key === 'D') {
                seleccion ++;
                move.currentTime = 0;
                move.play();
                if (seleccion > 2) {
                    seleccion = 1;
                };
            };
            
            if (e.key === 'e' || e.key === 'E') {
                window.removeEventListener("keydown", mover, false);
                window.clearInterval(frame);
                select.currentTime = 0;
                select.play();
                musica.pause();
                menuPrincipal();
            };
            
            if (e.keyCode === 13) {
                window.removeEventListener("keydown", mover, false);
                window.clearInterval(frame);
                select.currentTime = 0;
                select.play();
                musica.pause();
                switch (seleccion) {
                    case 1:
                        sinDisparos();
                        break;
                    case 2:
                        //conDisparosJefeFinal(0, 0);
                        conDisparos();
                        break;
                };   
            };
        };
        
        function dibujarMenu () {
            
            switch (seleccion) {
                case 1:
                    contexto.drawImage(pantallaSinDisparos, 0, 0, pantallaSinDisparos.width, pantallaSinDisparos.height);
                    break;
                case 2:
                    contexto.drawImage(pantallaConDisparos, 0, 0, pantallaConDisparos.width, pantallaConDisparos.height);
                    break;
            };       
        };
        
        window.addEventListener("keydown", mover, false);
        var frame = window.setInterval(dibujarMenu, 100);
    };   
};



