function menuControles () {
    
    //CREAR Y CARGAR EL CONTEXTO
    var canvas = document.getElementById("lienzo");
    var contexto = canvas.getContext("2d");
    
    //CREAR Y CARGAR LA MÚSICA
    var musica = document.getElementById("musicaSubMenu");
    musica.currentTime = 0;
    musica.play();
    
    var select = document.getElementById("menuSelect");
    
    //CREAR Y CARGAR LOS SPRITES
    var pantalla = new Image();
    pantalla.src = "Menús/MenuControles.png";
    
    pantalla.onload = function () {
        
        function salir (e) {
            
            if (e.key === 'e' || e.key === 'E') {
                window.removeEventListener("keydown", salir, false);
                window.clearInterval(frame);
                select.currentTime = 0;
                select.play();
                musica.pause();
                menuPrincipal();
            };
        };
        
        function dibujarMenu () {
            contexto.drawImage(pantalla, 0, 0, pantalla.width, pantalla.height);
        };  
        
        window.addEventListener("keydown", salir, false);
        var frame = window.setInterval(dibujarMenu, 100);
    };
};


