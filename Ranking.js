function ranking (score) {
    
    //CREAR Y CARGAR EL CONTEXTO
    var canvas = document.getElementById("lienzo");
    var contexto = canvas.getContext("2d");
    
    //CREAR Y CARGAR LOS SPRITES
    var pantalla = new Image();
    pantalla.src = "Menús/RankingFondo.png";
    
    //VARIABLES GLOBALES
    var name = "";
    var nameAux = "";
    var nameLength = 0;
    
    var ranking = [];
    var nam;
    var scor;
    
    pantalla.onload = function () {
        
        for (var i = 0; i < 10; i++) {
            ranking[i] = new jugador("", "");
        };
        
        function extraer () {  
            for (var i = 0; i < 10; i++) {
                if (!localStorage.getItem("RankingName" + i) || localStorage.getItem("RankingName" + i) === "_ _ _") {
                    ranking[i].setName("_ _ _");
                    ranking[i].setScore(0); 
                } else {
                    ranking[i].setName(localStorage.getItem("RankingName" + i));
                    ranking[i].setScore(parseInt(localStorage.getItem("RankingScore" + i)));  
                };
            };
            if (ranking[9].getScore() <= score) {
                ranking[9].setName(name);
                ranking[9].setScore(score);
            };
        };            
        
        function ordenar () { 
            for (var i = 0; i < 10; i++) {
                for (var j = 0; j < 10 - i - 1; j++) {
                    if (ranking[j].getScore() < ranking[j + 1].getScore() || (ranking[j].getName() === "_ _ _" && ranking[j + 1].getName() !== "_ _ _")) {
                        nam = ranking[j + 1].getName();
                        scor = ranking[j + 1].getScore();
                        ranking[j + 1].setName(ranking[j].getName());
                        ranking[j + 1].setScore(ranking[j].getScore());
                        ranking[j].setName(nam);
                        ranking[j].setScore(scor);
                    };
                };
            };
        };
        
        function guardar () {
            for (var i = 0; i < 10; i++) {
                if (ranking[i].getName() === "_ _ _") {
                    ranking[i].setScore("_ _ _ _");
                };
                localStorage.setItem("RankingName" + i, ranking[i].getName());
                localStorage.setItem("RankingScore" + i, ranking[i].getScore());
            };
        };
        
        function mostrar () {
            contexto.clearRect(0, 0, canvas.width, canvas.height);
            contexto.drawImage(pantalla, 0, 0, pantalla.width, pantalla.height);
            contexto.textAlign = "center";
            contexto.fillStyle = "white";
            contexto.font = "30px Verdana";         
            contexto.fillText("NOMBRE", canvas.width / 2 - 200, 120); 
            contexto.fillText("PUNTUACIÓN", canvas.width / 2 + 200, 120);
            contexto.fillStyle = "blue";
            contexto.fillText("______", canvas.width / 2 - 200, 125);
            contexto.fillText("__________", canvas.width / 2 + 200, 125);
            for (var i = 0; i < 10; i++) { 
                if (ranking[i].getName() !== "_ _ _") {
                    contexto.fillStyle = "cadetBlue";
                    contexto.font = "30px Verdana";
                    contexto.fillText((i + 1) + "º -", canvas.width / 2 - 300, 215 + (75 * i));
                    contexto.fillText(".   .   .   .   .", canvas.width / 2, 208 + (75 * i));
                };
                contexto.fillStyle = "white";
                contexto.font = "40px Verdana";
                contexto.fillText(ranking[i].getName(), canvas.width / 2 - 200, 220 + (75 * i));
                contexto.fillText(ranking[i].getScore(), canvas.width / 2 + 200, 220 + (75 * i));
            };
        };

        function nameDraw () {
            contexto.clearRect(0, 0, canvas.width, canvas.height);
            contexto.drawImage(pantalla, 0, 0, pantalla.width, pantalla.height);
            contexto.textAlign = "center";
            contexto.fillStyle = "white";
            contexto.font = "30px Verdana";
            contexto.fillText("ESCRIBE TU NOMBRE", canvas.width / 2, 400);
            contexto.fillStyle = "blue";
            contexto.fillText("_________________", canvas.width / 2, 405);
            contexto.fillStyle = "white";
            contexto.font = "40px Verdana";
            contexto.fillText(name, canvas.width / 2, 500);
        };

        function requestName (e) {
            if (e.keyCode > 64 && e.keyCode < 91 && nameLength < 3) {
                nameLength++;
                name = name + String.fromCharCode(e.keyCode);
                nameDraw();
            };
            
            if (e.keyCode === 8) {
                switch (nameLength) {
                    case  1:
                        nameLength--;
                        nameAux = "";
                        name = nameAux;
                        break;
                    case  2:
                        nameLength--;
                        nameAux = name.charAt(0);
                        name = nameAux;
                        break;
                    case  3:
                        nameLength--;
                        nameAux = name.charAt(0) + name.charAt(1);
                        name = nameAux;
                        break;    
                };
                nameDraw();
            };
            
            if (e.keyCode === 13 && nameLength === 3) {
                window.removeEventListener("keydown", requestName, false);
                extraer();
                ordenar();
                guardar();
                mostrar();        
                window.addEventListener("keydown", salir, false);
            };
        };

        function salir (e) {
            if (e.keyCode === 13) {
                window.removeEventListener("keydown", salir, false);
                menuPrincipal();
            };
        };

        window.addEventListener("keydown", requestName, false);
        nameDraw();
    };
};


