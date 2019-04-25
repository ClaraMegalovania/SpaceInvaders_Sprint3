function menuIntro () {
    
    //CREAR Y CARGAR EL CONTEXTO
    var canvas = document.getElementById("lienzo");
    var contexto = canvas.getContext("2d");
    
    //CREAR Y CARGAR LA MÚSICA
    var select = document.getElementById("menuSelect");

    //CREAR Y CARGAR LOS SPRITES
    var pantalla = new Image();
    pantalla.src = "Menús/MenuIntro.png";
    
    var fundido = 0;
    var parpadeo = true;
    
    pantalla.onload = function () {
        
        function continuar (e) {
            
            if (e.keyCode === 13) {
                window.removeEventListener("keydown", continuar, false);
                window.clearInterval(frame);
                contexto.globalAlpha = 1;
                select.currentTime = 0;
                select.play();
                menuPrincipal();
            };
        }; 
        
        function dibujarMenu () {
            //CUBRIR FRAME ANTERIOR DE NEGRO
            contexto.globalAlpha = 1;
            contexto.fillStyle = "black";
            contexto.fillRect(0, 0, canvas.width, canvas.height);
            
            if (parpadeo) {
                fundido = fundido + 0.008;
            } else {
                fundido = fundido - 0.008;
            };
            if (fundido >= 1) {
                parpadeo = false;
            };
            if (fundido <= 0) {
                parpadeo = true;
            };
            contexto.globalAlpha = fundido;
            contexto.drawImage(pantalla, 0, 0, pantalla.width, pantalla.height);
        }; 
        
        window.addEventListener("keydown", continuar, false);
        var frame = window.setInterval(dibujarMenu, 10);
    };
};



