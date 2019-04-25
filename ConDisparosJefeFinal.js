function conDisparosJefeFinal (score, lives) {      
                    
    //CREAR Y CARGAR EL CONTEXTO
    var canvas = document.getElementById("lienzo");
    var contexto = canvas.getContext("2d");
    
    //CREAR Y CARGAR LA MÚSICA
    var musica = document.getElementById("musicaMenu");
    var musicaLenta = document.getElementById("musicaMenu");

    var disparoSnd = document.getElementById("disparo");
    var explosionSnd = document.getElementById("explosion");
    var winSnd = document.getElementById("win");
    var gameOverSnd = document.getElementById("gameOver");
    var powerUpVidaSnd = document.getElementById("powerUpVida"); 
    var powerUpBunkerSnd = document.getElementById("powerUpBunker"); 
    var powerUpTiempo1Snd = document.getElementById("powerUpTiempo1"); 
    var powerUpTiempo2Snd = document.getElementById("powerUpTiempo2");
    var powerUpInmortal1Snd = document.getElementById("powerUpInmortal1"); 
    var powerUpInmortal2Snd = document.getElementById("powerUpInmortal2");
    var moveSnd = document.getElementById("menuMover");
    var selectSnd = document.getElementById("menuSelect");
   
    //CREAR Y CARGAR LOS SPRITES
    var navePoseSprite = 0;
    var naveSprite = [];
    naveSprite[0] = new Image();
    naveSprite[0].src = "ConDisparos/Nave0.png";
    naveSprite[1] = new Image();
    naveSprite[1].src = "ConDisparos/Nave1.png";
    naveSprite[2] = new Image();
    naveSprite[2].src = "ConDisparos/Nave2.png";
    naveSprite[3] = new Image();
    naveSprite[3].src = "ConDisparos/Nave3.png";
    naveSprite[4] = new Image();
    naveSprite[4].src = "ConDisparos/Nave4.png";
    naveSprite[5] = new Image();
    naveSprite[5].src = "ConDisparos/Nave5.png";  
    
    var jefeFinalPoseSprite = 0;
    var jefeFinalSprite = [];
    jefeFinalSprite[0] = new Image();
    jefeFinalSprite[0].src = "ConDisparos/JefeFinal.png";
    
    var bunkerSprite = [];
    bunkerSprite[0] = new Image();
    bunkerSprite[0].src = "ConDisparos/Bunker3.png";
    bunkerSprite[1] = new Image();
    bunkerSprite[1].src = "ConDisparos/Bunker2.png";
    bunkerSprite[2] = new Image();
    bunkerSprite[2].src = "ConDisparos/Bunker1.png";
    
    var balaNaveSprite = new Image();
    balaNaveSprite.src = "ConDisparos/BalaNave.png";
    var balaJefeFinalSprite = new Image();
    balaJefeFinalSprite.src = "ConDisparos/BalaJefeFinal.png";
    var rayoJefeFinalSprite = new Image();
    rayoJefeFinalSprite.src = "ConDisparos/RayoJefeFinal.png";
    
    var powerUpVidaSprite = new Image();
    powerUpVidaSprite.src = "ConDisparos/PowerUpVida.png";
    var powerUpBunkerSprite = new Image();
    powerUpBunkerSprite.src = "ConDisparos/PowerUpBunker.png";
    var powerUpTiempoSprite = new Image();
    powerUpTiempoSprite.src = "ConDisparos/PowerUpTiempo.png";
    var powerUpInmortalSprite = new Image();
    powerUpInmortalSprite.src = "ConDisparos/PowerUpInmortal.png";    
    
    var fondoSprite = new Image();
    fondoSprite.src = "ConDisparos/FondoJefeFinal.png"; 
    var fondoPowerUpTiempoSprite = new Image();
    fondoPowerUpTiempoSprite.src = "ConDisparos/FondoPowerUpTiempo.png";

    var gameOverSprite = new Image();
    gameOverSprite.src = "General/GameOver.png";
    
    var winSprite = new Image();
    winSprite.src = "General/Win.png";
    
    var pausaSprite = [];
    pausaSprite[0] = new Image();
    pausaSprite[0].src = "Menús/MenuPausaContinuar.png";
    pausaSprite[1] = new Image();
    pausaSprite[1].src = "Menús/MenuPausaRegresarAlMenuPrincipal.png";    
      
    //VARIABLES GLOBALES
    var distanciaX;
    var distanciaY;
    var puntuacion = score;
    var pausa = false;
    var pausaSeleccion = 1;
    var fundido = 1;
    
    //VARIABLES NAVE
    var ship;
    var velocidadNaveX = 9;
    var velocidadNaveY = 9;
    var vidasNave = lives;
    if (vidasNave < 3) {
        vidasNave = 3;
    };
    
    //VARIABLES BALA
    var bullet;
    var velocidadBalaNaveY = 7;
    var bulletJefeFinal = [];
    var railJefeFinal = [];
    var indRay = 0;
    var railActivo = false;
    
    //VARIABLES JEFE FINAL
    var finalBoss;
    var vidasJefeFinal = 50;
    var fase = 10;
    var posicionObjetivoX;
    var posicionObjetivoY;
 
    //VARIABLES BÚNKERS
    var arrBunk = [];
    var numeroBunkers = 4;
    var vidasBunker = 3;
    
    //VARIABLES POWER UPS
    var powerUpVida;
    var powerUpBunker;
    var powerUpTiempo;
    var indiceTemporal = 1;
    var horaT;
    var contadorTemporalT;
    var powerUpInmortal;
    var inmortal = false;
    var horaI;
    var contadorTemporalI;
    
    //RETARDO PARA CARGAR LAS IMÁGENES
    jefeFinalSprite[jefeFinalPoseSprite].onload = function () {

        //INICIALIZADOR NAVE
        ship = new nave(canvas.width / 2, canvas.height + naveSprite[navePoseSprite].height, velocidadNaveX, velocidadNaveY, vidasNave, true);

        //INICIALIZADOR BALAS
        bullet = new bala(0, 0, 0, -velocidadBalaNaveY, 0 , 0); 
        bulletJefeFinal[0] = new bala(0, 0, 0, 10 /1.5, false, 0);
        bulletJefeFinal[1] = new bala(0, 0, 5 /1.5, 7 /1.5, false, 0);
        bulletJefeFinal[2] = new bala(0, 0, 13 /1.5, 6 /1.5, false, 0);
        bulletJefeFinal[3] = new bala(0, 0, 15 /1.5, 2 /1.5, false, 0);
        bulletJefeFinal[4] = new bala(0, 0, -5 /1.5, 7 /1.5, false, 0);
        bulletJefeFinal[5] = new bala(0, 0, -13 /1.5, 6 /1.5, false, 0);
        bulletJefeFinal[6] = new bala(0, 0, -15 /1.5, 2 /1.5, false, 0);
        for (var i = 0; i < 20; i++) {
            railJefeFinal[i] = new bala(0, 0, 0, 0, false, 0);
        };
        
        //INICIALIZADOR JEFE FINAL
        finalBoss = new marciano(canvas.width / 2, - jefeFinalSprite[jefeFinalPoseSprite].height / 2, 0, 0, vidasJefeFinal);
 
        //INICIALIZADOR ARRAY BÚNKERS
        for (var i = 0; i < numeroBunkers; i++) {
            arrBunk[i] = new bunker(canvas.width * (0.8 - 0.2 * i), canvas.height * 0.80, vidasBunker);
        };
        
        //INICIALIZADOR POWER UP 
        powerUpVida = new powerUp(5);
        powerUpBunker = new powerUp(5);
        powerUpTiempo = new powerUp(5);
        powerUpInmortal = new powerUp(5);  
       
        //FUNCIÓN PARA EL MOVIMIENTO
        function controles (e) {

            //EJE X 
            if ((e.key === 'd' || e.key === 'D') && ship.getPosX() < canvas.width - naveSprite[navePoseSprite].width / 2 - 10 && !pausa) {
                ship.setPosX(ship.getPosX() + ship.getVelX());   
            };
            if ((e.key === 'a' || e.key === 'A') && ship.getPosX() > 0 + naveSprite[navePoseSprite].width / 2 + 10 && !pausa) {
                ship.setPosX(ship.getPosX() - ship.getVelX());
            };

            //EJE Y
            if ((e.key === 's' || e.key === 'S') && ship.getPosY() < canvas.height - naveSprite[navePoseSprite].height / 2 - 10 && !pausa) {
                ship.setPosY(ship.getPosY() + ship.getVelY());
            };
            if ((e.key === 'w' || e.key === 'W') && ship.getPosY() > 0 + naveSprite[navePoseSprite].height / 2 + 10 && !pausa) {
                ship.setPosY(ship.getPosY() - ship.getVelY());
            };
            
            //DISPARO
            if ((e.key === ' ' || e.key === ' ') && ship.getDisparo() && ship.getVidas() > 0 && !pausa) {
                bullet.setPosX(ship.getPosX());
                bullet.setPosY(ship.getPosY() - naveSprite[navePoseSprite].height / 2 - balaNaveSprite.height);
                bullet.setVelX(0);
                bullet.setVelY(-velocidadBalaNaveY);
                bullet.setVidas(1);   
                bullet.setRebotes(0);
                ship.setDisparo(false);
                disparoSnd.currentTime = 0;
                disparoSnd.play();               
            };
            
            //PAUSA
            if ((e.key === 'p' || e.key === 'P') && !(ship.getVidas() < 1 || finalBoss.getVidas() < 1) && !pausa) {
                pausa = true;
                window.clearTimeout(pu);
                window.clearInterval(animacionNave);
                pausaSeleccion = 1;              
                if (indiceTemporal !== 1) {
                    window.clearTimeout(acelTiempo);
                    musicaLenta.pause();
                    contadorTemporalT = contadorTemporalT + (new Date().getTime() - horaT);
                } else {
                    musica.pause();
                };
                if (inmortal) {
                    window.clearTimeout(desInmort);
                    contadorTemporalI = contadorTemporalI + (new Date().getTime() - horaI);
                };
                if (railActivo) {
                    window.clearInterval(ray);
                };
                selectSnd.currentTime = 0;
                selectSnd.play();
            };
            
            //CONTROLAR MENÚ PAUSA
            if ((e.key === 's' || e.key === 'S') && pausa) {
                pausaSeleccion --;
                moveSnd.currentTime = 0;
                moveSnd.play();
                if (pausaSeleccion < 1) {
                    pausaSeleccion = 2;
                };
                switch (pausaSeleccion) {
                    case 1:
                        contexto.drawImage(pausaSprite[0], 0, 0, pausaSprite[0].width, pausaSprite[0].height);
                        break;
                    case 2:
                        contexto.drawImage(pausaSprite[1], 0, 0, pausaSprite[1].width, pausaSprite[1].height);
                        break;
                };       
            };
            if ((e.key === 'w' || e.key === 'W') && pausa) {  
                pausaSeleccion++;
                moveSnd.currentTime = 0;
                moveSnd.play();
                if (pausaSeleccion > 2) {
                    pausaSeleccion = 1;
                };
                switch (pausaSeleccion) {
                    case 1:
                        contexto.drawImage(pausaSprite[0], 0, 0, pausaSprite[0].width, pausaSprite[0].height);
                        break;
                    case 2:
                        contexto.drawImage(pausaSprite[1], 0, 0, pausaSprite[1].width, pausaSprite[1].height);
                        break;
                };       
            };
            if (e.keyCode === 13 && pausa) {
                switch (pausaSeleccion) {
                    case 1:
                        pausa = false;  
                        pu = window.setTimeout(partida.powerUp, random(4000, 10000));
                        animacionNave = window.setInterval(partida.cambioPoseNave, 20);
                        if (indiceTemporal !== 1) {
                            acelTiempo = window.setTimeout(partida.acelerarTiempo, 10000 - contadorTemporalT);
                            horaT = new Date().getTime();
                            musicaLenta.play();
                        } else {
                            musica.play();
                        };
                        if (inmortal) {
                            desInmort = window.setTimeout(partida.desInmortalizacion, 10000 - contadorTemporalI);
                            horaI = new Date().getTime();
                        };
                        if (railActivo) {
                            ray = window.setInterval(partida.fase60, 30);
                        };
                        partida.jugar();
                        break;
                    case 2:
                        selectSnd.currentTime = 0;
                        selectSnd.play();
                        window.removeEventListener("keydown", controles, false); 
                        menuPrincipal();
                        break; 
                }; 
            };
            
            //GAME OVER O WIN SALIR
            if (e.keyCode === 13 && (ship.getVidas() < 1 || finalBoss.getVidas() < 1)) {
                window.removeEventListener("keydown", controles, false); 
                musica.pause();
                ranking(puntuacion);
            };
        };

        function partida () {                
            
            //FUNCIÓN PARA CAMBIAR DE POSE A LA NAVE
            this.cambioPoseNave = function () {
                if (!inmortal) {
                    navePoseSprite++;
                    if (navePoseSprite > 2) {
                        navePoseSprite = 0;
                    };
                } else {
                    navePoseSprite++;
                    if (navePoseSprite > 5) {
                        navePoseSprite = 3;
                    };
                    if (navePoseSprite < 3) {
                        navePoseSprite = 3;
                    };
                };
            };                   
            
            //FUNCIÓN PARA CREAR POWER UP 
            this.powerUp = function () {
                var aleatorio;
                var exitBucle = false;
                do {
                    aleatorio = random(1,4);
                    switch (aleatorio) {
                    case 1:
                        if (powerUpVida.getVidas() < 1) {
                            powerUpVida.setPosX(random(powerUpVidaSprite.width, canvas.width - powerUpVidaSprite.width));
                            powerUpVida.setPosY(0 - powerUpVidaSprite.height);
                            powerUpVida.setVidas(1); 
                            exitBucle = true;
                        };
                        break;
                    case 2: 
                        if (powerUpBunker.getVidas() < 1) {
                            powerUpBunker.setPosX(random(powerUpBunkerSprite.width, canvas.width - powerUpBunkerSprite.width));
                            powerUpBunker.setPosY(0 - powerUpBunkerSprite.height);
                            powerUpBunker.setVidas(1);
                            exitBucle = true;
                        };
                        break;
                    case 3:   
                        if (powerUpTiempo.getVidas() < 1 && indiceTemporal === 1) {
                            powerUpTiempo.setPosX(random(powerUpTiempoSprite.width, canvas.width - powerUpTiempoSprite.width));
                            powerUpTiempo.setPosY(0 - powerUpTiempoSprite.height);
                            powerUpTiempo.setVidas(1);   
                            exitBucle = true;
                        };
                        break;   
                    case 4:
                        if (powerUpInmortal.getVidas() < 1 && !inmortal) {
                            powerUpInmortal.setPosX(random(powerUpInmortalSprite.width, canvas.width - powerUpInmortalSprite.width));
                            powerUpInmortal.setPosY(0 - powerUpInmortalSprite.height);
                            powerUpInmortal.setVidas(1);
                            exitBucle = true;
                        };
                        break;
                    };
                } while (!exitBucle);
                if (!pausa) {
                    pu = window.setTimeout(partida.powerUp, random(4000, 10000));
                };
            };
            
            //FUNCIÓN PARA REALENTIZAR TIEMPO      
            this.ralentizarTiempo = function () {  
                powerUpTiempo1Snd.currentTime = 0;
                powerUpTiempo1Snd.play();
                musicaLenta.currentTime = musica.currentTime * 1.435;
                musica.pause();
                musicaLenta.play();
                
                indiceTemporal = 1 / 5;
                acelTiempo = window.setTimeout(partida.acelerarTiempo, 10000);
                horaT = new Date().getTime();
                contadorTemporalT = 0;
            };
            
            //FUNCIÓN PARA ACELERAR TIEMPO     
            this.acelerarTiempo = function () {
                powerUpTiempo2Snd.currentTime = 0;
                powerUpTiempo2Snd.play();

                musica.currentTime = musicaLenta.currentTime * 0.698;
                musicaLenta.pause();
                musica.play();

                indiceTemporal = 1;
            };
            
            //FUNCIÓN PARA HACERSE INMORTAL
            this.inmortalizacion = function () {
                powerUpInmortal1Snd.currentTime = 0;
                powerUpInmortal1Snd.play();
                inmortal= true;
                desInmort = window.setTimeout(partida.desInmortalizacion, 10000);
                horaI = new Date().getTime();
                contadorTemporalI = 0;
            };
            
            //FUNCIÓN PARA DEJAR DE SER INMORTAL
            this.desInmortalizacion = function () {
                powerUpInmortal2Snd.currentTime = 0;
                powerUpInmortal2Snd.play();
                inmortal = false;
            };

            //FUNCIÓN PARA CALCULAR COLISIONES 
            this.colisiones = function () {
                
                //COLISIÓN BALA NAVE-NAVE
                distanciaX = Math.abs(bullet.getPosX() - ship.getPosX());
                distanciaY = Math.abs(bullet.getPosY() - ship.getPosY());
                if (distanciaX < naveSprite[navePoseSprite].width / 2 + balaNaveSprite.width / 2 && distanciaY < naveSprite[navePoseSprite].height / 2 + balaNaveSprite.height / 2 && ship.getVidas() > 0 && bullet.getVidas() > 0 && !inmortal) {
                    ship.setVidas(ship.getVidas() - 1);
                    ship.setPosX(canvas.width / 2);
                    ship.setPosY(canvas.height * 0.95);
                    bullet.setVidas(0);
                    ship.setDisparo(true);
                    explosionSnd.currentTime = 0;
                    explosionSnd.play();
                };
                
                //COLISIÓN BALA NAVE-JEFE FINAL
                distanciaX = Math.abs(bullet.getPosX() - finalBoss.getPosX());
                distanciaY = Math.abs(bullet.getPosY() - finalBoss.getPosY());
                if (distanciaX < jefeFinalSprite[jefeFinalPoseSprite].width / 2 + balaNaveSprite.width / 2 && distanciaY < jefeFinalSprite[jefeFinalPoseSprite].height / 2 + balaNaveSprite.height / 2 && finalBoss.getVidas() > 0 && bullet.getVidas() > 0) {
                    finalBoss.setVidas(finalBoss.getVidas() - 1);
                    bullet.setVidas(0);
                    ship.setDisparo(true);
                    puntuacion += 50;
                    explosionSnd.currentTime = 0;
                    explosionSnd.play();
                };
 
                //COLISIÓN BALA NAVE-BÚNKER
                for (var i = 0; i < numeroBunkers; i++) {
                    distanciaX = Math.abs(arrBunk[i].getPosX() - bullet.getPosX());
                    distanciaY = Math.abs(arrBunk[i].getPosY() - bullet.getPosY());
                    if (distanciaX < balaNaveSprite.width / 2 + bunkerSprite[0].width / 2 && distanciaY < balaNaveSprite.height / 2 + bunkerSprite[0].height / 2 && bullet.getVidas() > 0 && arrBunk[i].getVidas() > 0) {
                        arrBunk[i].setVidas(arrBunk[i].getVidas() - 1);
                        bullet.setVidas(0);
                        ship.setDisparo(true);
                        explosionSnd.currentTime = 0;
                        explosionSnd.play();
                    };
                };
                
                //COLISIÓN BALA NAVE-POWER UP VIDA
                distanciaX = Math.abs(bullet.getPosX() - powerUpVida.getPosX());
                distanciaY = Math.abs(bullet.getPosY() - powerUpVida.getPosY());
                if (distanciaX < powerUpVidaSprite.width / 2 + balaNaveSprite.width / 2 && distanciaY < powerUpVidaSprite.height / 2 + balaNaveSprite.height / 2 && powerUpVida.getVidas() > 0 && bullet.getVidas() > 0) {
                    ship.setVidas(ship.getVidas() + 1);
                    powerUpVida.setVidas(0);
                    bullet.setVidas(0);
                    ship.setDisparo(true);
                    powerUpVidaSnd.currentTime = 0;
                    powerUpVidaSnd.play();
                };            
                
                //COLISIÓN BALA NAVE-POWER UP BÚNKER
                distanciaX = Math.abs(bullet.getPosX() - powerUpBunker.getPosX());
                distanciaY = Math.abs(bullet.getPosY() - powerUpBunker.getPosY());
                if (distanciaX < powerUpBunkerSprite.width / 2 + balaNaveSprite.width / 2 && distanciaY < powerUpBunkerSprite.height / 2 + balaNaveSprite.height / 2 && powerUpBunker.getVidas() > 0 && bullet.getVidas() > 0) {
                    for (var i = 0; i < numeroBunkers; i++) {
                        arrBunk[i].setVidas(vidasBunker);
                    };
                    powerUpBunker.setVidas(0);
                    bullet.setVidas(0);
                    ship.setDisparo(true);
                    powerUpBunkerSnd.currentTime = 0;
                    powerUpBunkerSnd.play();
                };           
                
                //COLISIÓN BALA NAVE-POWER UP TIEMPO
                distanciaX = Math.abs(bullet.getPosX() - powerUpTiempo.getPosX());
                distanciaY = Math.abs(bullet.getPosY() - powerUpTiempo.getPosY());
                if (distanciaX < powerUpTiempoSprite.width / 2 + balaNaveSprite.width / 2 && distanciaY < powerUpTiempoSprite.height / 2 + balaNaveSprite.height / 2 && powerUpTiempo.getVidas() > 0 && bullet.getVidas() > 0) {
                    partida.ralentizarTiempo();
                    powerUpTiempo.setVidas(0);
                    bullet.setVidas(0);
                    ship.setDisparo(true);
                }; 
                
                //COLISIÓN BALA NAVE-POWER UP INMORTAL
                distanciaX = Math.abs(bullet.getPosX() - powerUpInmortal.getPosX());
                distanciaY = Math.abs(bullet.getPosY() - powerUpInmortal.getPosY());
                if (distanciaX < powerUpInmortalSprite.width / 2 + balaNaveSprite.width / 2 && distanciaY < powerUpInmortalSprite.height / 2 + balaNaveSprite.height / 2 && powerUpInmortal.getVidas() > 0 && bullet.getVidas() > 0) {
                    partida.inmortalizacion();
                    powerUpInmortal.setVidas(0);
                    bullet.setVidas(0);
                    ship.setDisparo(true);
                };     
                
                //COLISIÓN BALA JEFE FINAL-NAVE
                for (var i = 0; i < 7; i++) {
                    distanciaX = Math.abs(ship.getPosX() - bulletJefeFinal[i].getPosX());
                    distanciaY = Math.abs(ship.getPosY() - bulletJefeFinal[i].getPosY());
                    if (distanciaX < balaJefeFinalSprite.width / 2 + naveSprite[navePoseSprite].width / 2 && distanciaY < balaJefeFinalSprite.height / 2 + naveSprite[navePoseSprite].height / 2 && bulletJefeFinal[i].getVidas() && ship.getVidas() > 0 && !inmortal) {
                        ship.setVidas(ship.getVidas() - 1);
                        ship.setPosX(canvas.width / 2);
                        ship.setPosY(canvas.height * 0.95);
                        bulletJefeFinal[i].setVidas(false);
                        explosionSnd.currentTime = 0;
                        explosionSnd.play();
                    };
                };   
                
                //COLISIÓN BALA JEFE FINAL-BÚNKER
                for (var i = 0; i < 7; i++) {
                    for (var j = 0; j < numeroBunkers; j++) {
                        distanciaX = Math.abs(arrBunk[j].getPosX() - bulletJefeFinal[i].getPosX());
                        distanciaY = Math.abs(arrBunk[j].getPosY() - bulletJefeFinal[i].getPosY());
                        if (distanciaX < balaJefeFinalSprite.width / 2 + bunkerSprite[0].width / 2 && distanciaY < balaJefeFinalSprite.height / 2 + bunkerSprite[0].height / 2 && bulletJefeFinal[i].getVidas() && arrBunk[j].getVidas() > 0) {
                            arrBunk[j].setVidas(arrBunk[j].getVidas() - 1);
                            bulletJefeFinal[i].setVidas(false);
                            explosionSnd.currentTime = 0;
                            explosionSnd.play();
                        };
                    };
                };
                
                //COLISIÓN BALA JEFE FINAL-BALA NAVE
                for (var i = 0; i < 7; i++) {
                    distanciaX = Math.abs(bullet.getPosX() - bulletJefeFinal[i].getPosX());
                    distanciaY = Math.abs(bullet.getPosY() - bulletJefeFinal[i].getPosY());
                    if (distanciaX < balaJefeFinalSprite.width / 2 + balaNaveSprite.width / 2 && distanciaY < balaJefeFinalSprite.height / 2 + balaNaveSprite.height / 2 && bulletJefeFinal[i].getVidas() && bullet.getVidas() > 0) {
                        bullet.setVidas(0);
                        ship.setDisparo(true);
                        explosionSnd.currentTime = 0;
                        explosionSnd.play();
                    };
                };
                
                //COLISIÓN RAYO JEFE FINAL-NAVE
                for (var i = 0; i < 20; i++) {
                    distanciaX = Math.abs(ship.getPosX() - railJefeFinal[i].getPosX());
                    distanciaY = Math.abs(ship.getPosY() - railJefeFinal[i].getPosY());
                    if (distanciaX < rayoJefeFinalSprite.width / 2 + naveSprite[navePoseSprite].width / 2 && distanciaY < rayoJefeFinalSprite.height / 2 + naveSprite[navePoseSprite].height / 2 && railJefeFinal[i].getVidas() && ship.getVidas() > 0 && !inmortal) {
                        ship.setVidas(ship.getVidas() - 1);
                        ship.setPosX(canvas.width / 2);
                        ship.setPosY(canvas.height * 0.95);
                        railJefeFinal[i].setVidas(false);
                        explosionSnd.currentTime = 0;
                        explosionSnd.play();
                    };
                };
                
                //COLISIÓN RAYO JEFE FINAL-BUNKER
                for (var i = 0; i < 20; i++) {
                    for (var j = 0; j < numeroBunkers; j++) {
                        distanciaX = Math.abs(arrBunk[j].getPosX() - railJefeFinal[i].getPosX());
                        distanciaY = Math.abs(arrBunk[j].getPosY() - railJefeFinal[i].getPosY());
                        if (distanciaX < rayoJefeFinalSprite.width / 2 + bunkerSprite[0].width / 2 && distanciaY < rayoJefeFinalSprite.height / 2 + bunkerSprite[0].height / 2 && railJefeFinal[i].getVidas() && arrBunk[j].getVidas() > 0) {
                            arrBunk[j].setVidas(arrBunk[j].getVidas() - 1);
                            explosionSnd.currentTime = 0;
                            explosionSnd.play();
                        };
                    };
                };
                
                //COLISIÓN RAYO JEFE FINAL-BALA NAVE
                for (var i = 0; i < 20; i++) {
                    distanciaX = Math.abs(bullet.getPosX() - railJefeFinal[i].getPosX());
                    distanciaY = Math.abs(bullet.getPosY() - railJefeFinal[i].getPosY());
                    if (distanciaX < rayoJefeFinalSprite.width / 2 + balaNaveSprite.width / 2 && distanciaY < rayoJefeFinalSprite.height / 2 + balaNaveSprite.height / 2 && railJefeFinal[i].getVidas() && bullet.getVidas() > 0) {
                        bullet.setVidas(0);
                        ship.setDisparo(true);
                        explosionSnd.currentTime = 0;
                        explosionSnd.play();
                    };
                };
                
                //COLISIÓN NAVE-JEFE FINAL
                distanciaX = Math.abs(ship.getPosX() - finalBoss.getPosX());
                distanciaY = Math.abs(ship.getPosY() - finalBoss.getPosY());
                if (distanciaX < jefeFinalSprite[jefeFinalPoseSprite].width / 2 + naveSprite[navePoseSprite].width / 2 && distanciaY < jefeFinalSprite[jefeFinalPoseSprite].height / 2 + naveSprite[navePoseSprite].height / 2 && finalBoss.getVidas() > 0 && ship.getVidas() > 0 && !inmortal) {
                    finalBoss.setVidas(finalBoss.getVidas() - 1);
                    ship.setVidas(ship.getVidas() - 1);
                    ship.setPosX(canvas.width / 2);
                    ship.setPosY(canvas.height * 0.95);
                    explosionSnd.currentTime = 0;
                    explosionSnd.play();
                };
                
                //COLISIÓN NAVE-BÚNKER
                for (var i = 0; i < numeroBunkers; i++) {
                    distanciaX = Math.abs(ship.getPosX() - arrBunk[i].getPosX());
                    distanciaY = Math.abs(ship.getPosY() - arrBunk[i].getPosY());
                    if (distanciaX < bunkerSprite[0].width / 2 + naveSprite[navePoseSprite].width / 2 && distanciaY < bunkerSprite[0].height / 2 + naveSprite[navePoseSprite].height / 2 && arrBunk[i].getVidas() > 0 && ship.getVidas() > 0 && !inmortal) {
                        arrBunk[i].setVidas(arrBunk[i].getVidas() - 1);
                        ship.setVidas(ship.getVidas() - 1);
                        ship.setPosX(canvas.width / 2);
                        ship.setPosY(canvas.height * 0.95);
                        explosionSnd.currentTime = 0;
                        explosionSnd.play();
                    };
                };
                
                //COLISIÓN NAVE-POWER UP VIDA
                distanciaX = Math.abs(ship.getPosX() - powerUpVida.getPosX());
                distanciaY = Math.abs(ship.getPosY() - powerUpVida.getPosY());
                if (distanciaX < powerUpVidaSprite.width / 2 + naveSprite[navePoseSprite].width / 2 && distanciaY < powerUpVidaSprite.height / 2 + naveSprite[navePoseSprite].height / 2 && powerUpVida.getVidas() > 0 && ship.getVidas() > 0) {
                    ship.setVidas(ship.getVidas() + 1);
                    powerUpVida.setVidas(0);
                    powerUpVidaSnd.currentTime = 0;
                    powerUpVidaSnd.play();
                };
                
                //COLISIÓN NAVE-POWER UP BÚNKER
                distanciaX = Math.abs(ship.getPosX() - powerUpBunker.getPosX());
                distanciaY = Math.abs(ship.getPosY() - powerUpBunker.getPosY());
                if (distanciaX < powerUpBunkerSprite.width / 2 + naveSprite[navePoseSprite].width / 2 && distanciaY < powerUpBunkerSprite.height / 2 + naveSprite[navePoseSprite].height / 2 && powerUpBunker.getVidas() > 0 && ship.getVidas() > 0) {
                    for (var i = 0; i < numeroBunkers; i++) {
                        arrBunk[i].setVidas(vidasBunker);
                    };
                    powerUpBunker.setVidas(0);
                    powerUpBunkerSnd.currentTime = 0;
                    powerUpBunkerSnd.play();
                };
                
                //COLISIÓN NAVE-POWER UP TIEMPO
                distanciaX = Math.abs(ship.getPosX() - powerUpTiempo.getPosX());
                distanciaY = Math.abs(ship.getPosY() - powerUpTiempo.getPosY());
                if (distanciaX < powerUpTiempoSprite.width / 2 + naveSprite[navePoseSprite].width / 2 && distanciaY < powerUpTiempoSprite.height / 2 + naveSprite[navePoseSprite].height / 2 && powerUpTiempo.getVidas() > 0 && ship.getVidas() > 0) {
                    partida.ralentizarTiempo();
                    powerUpTiempo.setVidas(0);
                };
                
                //COLISIÓN NAVE-POWER UP INMORTAL
                distanciaX = Math.abs(ship.getPosX() - powerUpInmortal.getPosX());
                distanciaY = Math.abs(ship.getPosY() - powerUpInmortal.getPosY());
                if (distanciaX < powerUpInmortalSprite.width / 2 + naveSprite[navePoseSprite].width / 2 && distanciaY < powerUpInmortalSprite.height / 2 + naveSprite[navePoseSprite].height / 2 && powerUpInmortal.getVidas() > 0 && ship.getVidas() > 0) {
                    partida.inmortalizacion();
                    powerUpInmortal.setVidas(0);
                };
                
                //COLISIÓN BALA NAVE-MÁRGENES 
                //ARRIBA
                if (bullet.getPosY() < 0 + balaNaveSprite.height / 2 && bullet.getVidas() > 0) {
                    if (bullet.getRebotes() === 0) {
                        bullet.setVelX(random(-velocidadBalaNaveY, velocidadBalaNaveY));
                    };
                    bullet.setVelY(bullet.getVelY() * (-1)); 
                    bullet.setRebotes(bullet.getRebotes() + 1);
                    if (bullet.getRebotes() > 0) {
                        bullet.setVidas(0);
                        ship.setDisparo(true);
                    };
                };
                //ABAJO
                if (bullet.getPosY() > canvas.height - balaNaveSprite.height / 2 && bullet.getVidas() > 0) {
                    bullet.setVelY(bullet.getVelY() * (-1)); 
                    bullet.setRebotes(bullet.getRebotes() + 1);
                };
                //IZQUIREDA
                if (bullet.getPosX() < 0 + balaNaveSprite.width / 2 && bullet.getVidas() > 0) {
                    bullet.setVelX(bullet.getVelX() * (-1));
                    bullet.setRebotes(bullet.getRebotes() + 1);
                };
                //DERECHA
                if (bullet.getPosX() > canvas.width - balaNaveSprite.width / 2 && bullet.getVidas() > 0) {
                    bullet.setVelX(bullet.getVelX() * (-1));
                    bullet.setRebotes(bullet.getRebotes() + 1);
                };  
                
                //COLISIÓN POWER UPS SUELO
                if (canvas.height + powerUpVidaSprite.height / 2 < powerUpVida.getPosY() && powerUpVida.getVidas() > 0) {
                    powerUpVida.setVidas(0);
                };
                if (canvas.height + powerUpBunkerSprite.height / 2 < powerUpBunker.getPosY() && powerUpBunker.getVidas() > 0) {
                    powerUpBunker.setVidas(0);
                };
                if (canvas.height + powerUpTiempoSprite.height / 2 < powerUpTiempo.getPosY() && powerUpTiempo.getVidas() > 0) {
                    powerUpTiempo.setVidas(0);
                };
                if (canvas.height + powerUpInmortalSprite.height / 2 < powerUpInmortal.getPosY() && powerUpInmortal.getVidas() > 0) {
                    powerUpInmortal.setVidas(0);
                };                
            };         

            //FUNCIÓN PARA MOVER LOS OBJETOS
            this.movimiento = function () {
                
                //MOVIMIENO JEFE FINAL
                finalBoss.setPosX(finalBoss.getPosX() + finalBoss.getVelX() * indiceTemporal);
                finalBoss.setPosY(finalBoss.getPosY() + finalBoss.getVelY() * indiceTemporal);

                //MOVIMIENTO BALA NAVE
                bullet.setPosX(bullet.getPosX() + bullet.getVelX());
                bullet.setPosY(bullet.getPosY() + bullet.getVelY());
                
                //MOVIMIENTO BALA JEFE FINAL
                for (var i = 0; i < 7; i++) {
                    bulletJefeFinal[i].setPosX(bulletJefeFinal[i].getPosX() + bulletJefeFinal[i].getVelX() * indiceTemporal);
                    bulletJefeFinal[i].setPosY(bulletJefeFinal[i].getPosY() + bulletJefeFinal[i].getVelY() * indiceTemporal);
                };
                
                //MOVIMIENTO RAYO JEFE FINAL
                for (var i = 0; i < 20; i++) {
                    railJefeFinal[i].setPosX(railJefeFinal[i].getPosX() + railJefeFinal[i].getVelX() * indiceTemporal);
                    railJefeFinal[i].setPosY(railJefeFinal[i].getPosY() + railJefeFinal[i].getVelY() * indiceTemporal);
                };
                
                //MOVIMIENTO POWER UP VIDA
                powerUpVida.setPosY(powerUpVida.getPosY() + powerUpVida.getVelY() * indiceTemporal);
                
                //MOVIMIENTO POWER UP BÚNKER
                powerUpBunker.setPosY(powerUpBunker.getPosY() + powerUpBunker.getVelY() * indiceTemporal);
                
                //MOVIMIENTO POWER UP TIEMPO
                powerUpTiempo.setPosY(powerUpTiempo.getPosY() + powerUpTiempo.getVelY() * indiceTemporal);
                
                //MOVIMIENTO POWER UP INMORTAL
                powerUpInmortal.setPosY(powerUpInmortal.getPosY() + powerUpInmortal.getVelY() * indiceTemporal);
            };

            //FUNCIÓN PARA DIBUJAR LOS OBJETOS
            this.dibujar = function () {
                
                //CUBRIR FRAME ANTERIOR DE NEGRO
                contexto.fillStyle = "black";
                contexto.fillRect(0, 0, canvas.width, canvas.height);
                
                //DIBUJAR FONDO
                contexto.drawImage(fondoSprite, 0, 0, fondoSprite.width, fondoSprite.height);         
                
                //DIBUJAR BALA JEFE FINAL
                for (var i = 0; i < 7; i++) {
                    if (bulletJefeFinal[i].getVidas()) {
                        contexto.drawImage(balaJefeFinalSprite, bulletJefeFinal[i].getPosX() - balaJefeFinalSprite.width / 2, bulletJefeFinal[i].getPosY() - balaJefeFinalSprite.height / 2, balaJefeFinalSprite.width, balaJefeFinalSprite.height);
                    };
                };
                
                //DIBUJAR RAYO JEFE FINAL
                for (var i = 19; i >= 0; i--) {
                    if (railJefeFinal[i].getVidas()) {
                        contexto.drawImage(rayoJefeFinalSprite, railJefeFinal[i].getPosX() - rayoJefeFinalSprite.width / 2, railJefeFinal[i].getPosY() - rayoJefeFinalSprite.height / 2, rayoJefeFinalSprite.width, rayoJefeFinalSprite.height);
                    };
                };
                
                //DIBUJAR POWER UP VIDA
                if (powerUpVida.getVidas() > 0) {
                    contexto.drawImage(powerUpVidaSprite, powerUpVida.getPosX() - powerUpVidaSprite.width / 2, powerUpVida.getPosY() - powerUpVidaSprite.height / 2, powerUpVidaSprite.width, powerUpVidaSprite.height);     
                };
                
                //DIBUJAR POWER UP BÚNKER
                if (powerUpBunker.getVidas() > 0) {
                    contexto.drawImage(powerUpBunkerSprite, powerUpBunker.getPosX() - powerUpBunkerSprite.width / 2, powerUpBunker.getPosY() - powerUpBunkerSprite.height / 2, powerUpBunkerSprite.width, powerUpBunkerSprite.height);     
                };
                
                //DIBUJAR POWER UP TIEMPO
                if (powerUpTiempo.getVidas() > 0) {
                    contexto.drawImage(powerUpTiempoSprite, powerUpTiempo.getPosX() - powerUpTiempoSprite.width / 2, powerUpTiempo.getPosY() - powerUpTiempoSprite.height / 2, powerUpTiempoSprite.width, powerUpTiempoSprite.height);     
                };
                
                //DIBUJAR POWER UP INMORTAL
                if (powerUpInmortal.getVidas() > 0) {
                    contexto.drawImage(powerUpInmortalSprite, powerUpInmortal.getPosX() - powerUpInmortalSprite.width / 2, powerUpInmortal.getPosY() - powerUpInmortalSprite.height / 2, powerUpInmortalSprite.width, powerUpInmortalSprite.height);     
                };  
                
                //DIBUJAR BÚNKERS
                for (var i = 0; i < numeroBunkers; i++) {
                    if (arrBunk[i].getVidas() > 0) {
                        contexto.drawImage(bunkerSprite[arrBunk[i].getVidas() - 1], arrBunk[i].getPosX() - bunkerSprite[0].width / 2, arrBunk[i].getPosY() - bunkerSprite[0].height / 2, bunkerSprite[0].width, bunkerSprite[0].height);
                    };
                };
                
                //DIBUJAR JEFE FINAL
                contexto.drawImage(jefeFinalSprite[jefeFinalPoseSprite], finalBoss.getPosX() - jefeFinalSprite[jefeFinalPoseSprite].width / 2, finalBoss.getPosY() - jefeFinalSprite[jefeFinalPoseSprite].height / 2, jefeFinalSprite[jefeFinalPoseSprite].width, jefeFinalSprite[jefeFinalPoseSprite].height);
                
                //DIBUJAR FONDO DE POWER UP TIEMPO
                if (indiceTemporal !== 1) {
                    contexto.drawImage(fondoPowerUpTiempoSprite, 0, 0, fondoPowerUpTiempoSprite.width, fondoPowerUpTiempoSprite.height);
                };  
                
                //DIBUJAR BALA NAVE
                if (bullet.getVidas() > 0) {
                    contexto.drawImage(balaNaveSprite, bullet.getPosX()- balaNaveSprite.width / 2, bullet.getPosY() - balaNaveSprite.height / 2, balaNaveSprite.width, balaNaveSprite.height);
                };

                //DIBUJAR NAVE
                if (ship.getVidas() > 0) {
                    contexto.drawImage(naveSprite[navePoseSprite], ship.getPosX() - naveSprite[navePoseSprite].width / 2, ship.getPosY() - naveSprite[navePoseSprite].height / 2, naveSprite[navePoseSprite].width, naveSprite[navePoseSprite].height);
                }; 
                
                //DIBUJAR VIDA JEFE FINAL
                contexto.textAlign = "center";
                contexto.fillStyle = "white";
                contexto.font = "28px Verdana";
                contexto.fillText("MARCI-ANO", canvas.width / 2, 35);
                contexto.fillStyle = "gold";
                contexto.fillRect(canvas.width / 2 - 303, 47, 606, 16);
                contexto.fillStyle = "black";
                contexto.fillRect(canvas.width / 2 - 300, 50, 600, 10);
                contexto.fillStyle = "red";
                contexto.fillRect(canvas.width / 2 - 300, 50, finalBoss.getVidas() * 12, 10);
                
                //DIBUJAR VIDAS
                contexto.drawImage(naveSprite[navePoseSprite], 1170, 32, naveSprite[navePoseSprite].width / 2, naveSprite[navePoseSprite].height / 2);
                contexto.textAlign = "left";
                contexto.fillStyle = "white";
                contexto.font = "28px Arial";
                contexto.fillText("X " + ship.getVidas(), 1210, 60);   
                
                //DIBUJAR PUNTUACIÓN
                contexto.textAlign = "left";
                contexto.fillStyle = "white";
                contexto.font = "20px Arial";
                contexto.fillText("PUNTUACIÓN: " + puntuacion, 32, 60);
                
                //DIBUJAR FASE
                contexto.textAlign = "left";
                contexto.fillStyle = "white";
                contexto.font = "20px Arial";
                contexto.fillText("FASE: " + fase, 32, 80);
            };

            //FUNCIÓN PARA PERDER
            this.gameOver = function () {

                //PINTAR EL FONDO ROJO CON OPACIDAD 0.2
                contexto.globalAlpha = 0.2;
                contexto.fillStyle = "red";
                contexto.fillRect(0, 0, canvas.width, canvas.height);

                //PINTAMOS "GAME OVER" CON OPACIDAD 1
                contexto.globalAlpha = 1;
                contexto.drawImage(gameOverSprite, 0, 0, gameOverSprite.width, gameOverSprite.height);
                
                //LIMPIAMOS LOS INTERVALOS
                window.clearTimeout(pu);
                window.clearTimeout(desInmort);
                window.clearInterval(animacionNave);
                if (indiceTemporal !== 1) {
                    window.clearTimeout(acelTiempo);
                };
                window.clearInterval(ray);
                
                if (indiceTemporal !== 1) {
                    musica.currentTime = musicaLenta.currentTime * 0.698;
                    musicaLenta.pause();
                    musica.play();
                };
                
                gameOverSnd.currentTime = 0;
                gameOverSnd.play();
            };
            
            //FUNCIÓN PARA GANAR
            this.win = function () {

                //PINTAR EL FONDO ROJO CON OPACIDAD 0.2
                contexto.globalAlpha = 0.2;
                contexto.fillStyle = "green";
                contexto.fillRect(0, 0, canvas.width, canvas.height);

                //PINTAMOS "WIN" CON OPACIDAD 1
                contexto.globalAlpha = 1;
                contexto.drawImage(winSprite, 0, 0, winSprite.width, winSprite.height);
                
                //LIMPIAMOS LOS INTERVALOS
                window.clearTimeout(pu);
                window.clearTimeout(desInmort);
                window.clearInterval(animacionNave);
                if (indiceTemporal !== 1) {
                    window.clearTimeout(acelTiempo);
                };
                window.clearInterval(ray);
                
                if (indiceTemporal !== 1) {
                    musica.currentTime = musicaLenta.currentTime * 0.698;
                    musicaLenta.pause();
                    musica.play();
                };
                
                winSnd.currentTime = 0;
                winSnd.play();              
            };
            
            //TRANSICIÓN PARA HACER EL FUNDIDO INICIAL
            this.transicionInicial = function () {
                
                contexto.globalAlpha = 1;
                
                //CUBRIR FRAME ANTERIOR DE NEGRO
                contexto.fillStyle = "black";
                contexto.fillRect(0, 0, canvas.width, canvas.height);
                
                //DIBUJAR FONDO
                contexto.drawImage(fondoSprite, 0, 0, fondoSprite.width, fondoSprite.height);
                
                //DIBUJAR BÚNKERS
                for (var i = 0; i < numeroBunkers; i++) {
                    if (arrBunk[i].getVidas() > 0) {
                        contexto.drawImage(bunkerSprite[arrBunk[i].getVidas() - 1], arrBunk[i].getPosX() - bunkerSprite[0].width / 2, arrBunk[i].getPosY() - bunkerSprite[0].height / 2, bunkerSprite[0].width, bunkerSprite[0].height);
                    };
                };
                
                //DIBUJAR JEFE FINAL
                contexto.drawImage(jefeFinalSprite[jefeFinalPoseSprite], finalBoss.getPosX() - jefeFinalSprite[jefeFinalPoseSprite].width / 2, finalBoss.getPosY() - jefeFinalSprite[jefeFinalPoseSprite].height / 2, jefeFinalSprite[jefeFinalPoseSprite].width, jefeFinalSprite[jefeFinalPoseSprite].height);  
                
                //DIBUJAR NAVE
                if (ship.getVidas() > 0) {
                    contexto.drawImage(naveSprite[navePoseSprite], ship.getPosX() - naveSprite[navePoseSprite].width / 2, ship.getPosY() - naveSprite[navePoseSprite].height / 2, naveSprite[navePoseSprite].width, naveSprite[navePoseSprite].height);
                };
                
                //PINTAR EL FUNDIDO
                contexto.globalAlpha = fundido;
                contexto.fillStyle = "black";
                contexto.fillRect(0, 0, canvas.width, canvas.height);
                fundido = fundido - 0.001;
                if (fundido < 0) {
                   fundido = 0; 
                };
                
                //MOVER NAVE
                if (ship.getPosY() > canvas.height * 0.9) {
                    ship.setPosY(ship.getPosY() - 0.3);
                } else {
                    //MOVER JEFE FINAL
                    finalBoss.setPosY(finalBoss.getPosY() + 0.5);
                };
                
                //COMPORBAR QUE EL JEFE FINAL HA LLEGADO A SU POSICIÓN
                if (finalBoss.getPosY() > 300) {
                    contexto.globalAlpha = 1;
                    musica.currentTime = 0;
                    musica.play();
                    window.clearTimeout(tran);
                    window.addEventListener("keydown", controles, false);
                    partida.jugar();
                    pu = window.setTimeout(partida.powerUp, random(4000, 10000));
                };
            };
            
            //FUNCIÓN PARA LA FASE 1.0 DEL JEFE FINAL (elegir posición aleatoria)
            this.fase10 = function () {
                if (random(1,2) === 1) {
                    posicionObjetivoX = random(jefeFinalSprite[jefeFinalPoseSprite].width / 2, canvas.width / 2 - 400);
                } else {
                    posicionObjetivoX = random(canvas.width / 2 + 400, canvas.width - jefeFinalSprite[jefeFinalPoseSprite].width / 2);
                }; 
                posicionObjetivoY = random(jefeFinalSprite[jefeFinalPoseSprite].height / 2, 500);
                finalBoss.setVelX((posicionObjetivoX - finalBoss.getPosX()) / 300);
                finalBoss.setVelY((posicionObjetivoY - finalBoss.getPosY()) / 300);
                fase = 11;
            };
            
            //FUNCIÓN PARA LA FASE 1.1 DEL JEFE FINAL (llegar a posición aleatoria)
            this.fase11 = function () {
                if (finalBoss.getPosX() > posicionObjetivoX - 5 && finalBoss.getPosX() < posicionObjetivoX + 5 && finalBoss.getPosY() > posicionObjetivoY - 5 && finalBoss.getPosY() < posicionObjetivoY + 5) {
                    finalBoss.setVelX(0);
                    finalBoss.setVelY(0);
                    fase = 20;
                };
            };
            
            //FUNCIÓN PARA LA FASE 2.0 DEL JEFE FINAL (elegir posición central)
            this.fase20 = function () {
                posicionObjetivoX = canvas.width / 2;
                posicionObjetivoY = 400;
                finalBoss.setVelX((posicionObjetivoX - finalBoss.getPosX()) / 200);
                finalBoss.setVelY((posicionObjetivoY - finalBoss.getPosY()) / 200);
                fase = 21;
            };
            
            //FUNCIÓN PARA LA FASE 2.1 DEL JEFE FINAL (llegar a posición central)
            this.fase21 = function () {
                if (finalBoss.getPosX() > posicionObjetivoX - 5 && finalBoss.getPosX() < posicionObjetivoX + 5 && finalBoss.getPosY() > posicionObjetivoY - 5 && finalBoss.getPosY() < posicionObjetivoY + 5) {
                    finalBoss.setVelX(0);
                    finalBoss.setVelY(0);
                    fase = 30;
                };
            };
            
            //FUNCIÓN PARA LA FASE 3.0 DEL JEFE FINAL (disparar múltiples balas)
            this.fase30 = function () {
                for (var i = 0; i < 7; i++) {
                    bulletJefeFinal[i].setVidas(true);
                    bulletJefeFinal[i].setPosX(finalBoss.getPosX());
                    bulletJefeFinal[i].setPosY(finalBoss.getPosY());
                };
                fase = 40;
            };
            
            //FUNCIÓN PARA LA FASE 4.0 DEL JEFE FINAL (elegir posición aleatoria)
            this.fase40 = function () {
                if (random(1,2) === 1) {
                    posicionObjetivoX = random(jefeFinalSprite[jefeFinalPoseSprite].width / 2, canvas.width / 2 - 400);
                } else {
                    posicionObjetivoX = random(canvas.width / 2 + 400, canvas.width - jefeFinalSprite[jefeFinalPoseSprite].width / 2);
                }; 
                posicionObjetivoY = random(jefeFinalSprite[jefeFinalPoseSprite].height / 2, 500);
                finalBoss.setVelX((posicionObjetivoX - finalBoss.getPosX()) / 300);
                finalBoss.setVelY((posicionObjetivoY - finalBoss.getPosY()) / 300);
                fase = 41;
            };
            
            //FUNCIÓN PARA LA FASE 4.1 DEL JEFE FINAL (llegar a posición aleatoria)
            this.fase41 = function () {
                if (finalBoss.getPosX() > posicionObjetivoX - 5 && finalBoss.getPosX() < posicionObjetivoX + 5 && finalBoss.getPosY() > posicionObjetivoY - 5 && finalBoss.getPosY() < posicionObjetivoY + 5) {
                    finalBoss.setVelX(0);
                    finalBoss.setVelY(0);
                    fase = 50;
                };
            }; 
            
            //FUNCIÓN PARA LA FASE 5.0 DEL JEFE FINAL (elegir posición central)
            this.fase50 = function () {
                posicionObjetivoX = canvas.width / 2;
                posicionObjetivoY = 250;
                finalBoss.setVelX((posicionObjetivoX - finalBoss.getPosX()) / 200);
                finalBoss.setVelY((posicionObjetivoY - finalBoss.getPosY()) / 200);
                fase = 51;
            };
            
            //FUNCIÓN PARA LA FASE 5.1 DEL JEFE FINAL (llegar a posición central)
            this.fase51 = function () {
                if (finalBoss.getPosX() > posicionObjetivoX - 5 && finalBoss.getPosX() < posicionObjetivoX + 5 && finalBoss.getPosY() > posicionObjetivoY - 5 && finalBoss.getPosY() < posicionObjetivoY + 5) {
                    finalBoss.setVelX(0);
                    finalBoss.setVelY(0);
                    fase = 999;
                    posicionObjetivoX = ship.getPosX();
                    posicionObjetivoY = ship.getPosY();
                    ray = window.setInterval(partida.fase60, 30);
                };
            };
            
            //FUNCIÓN PARA LA FASE 6.0 DEL JEFE FINAL (disparar rayo)
            this.fase60 = function () { 
                railActivo = true;
                railJefeFinal[indRay].setVidas(true);
                railJefeFinal[indRay].setPosX(finalBoss.getPosX());
                railJefeFinal[indRay].setPosY(finalBoss.getPosY());
                railJefeFinal[indRay].setVelX((posicionObjetivoX - railJefeFinal[indRay].getPosX()) / 50);
                railJefeFinal[indRay].setVelY((posicionObjetivoY - railJefeFinal[indRay].getPosY()) / 50);
                indRay++;     
                if (indRay > 19) {
                    indRay = 0;
                    railActivo = false;
                    window.clearInterval(ray);
                    fase = 10;
                };
            };
          
            //FUNCIÓN PARA EJECUTAR UN FRAME
            this.jugar = function () {
                
                partida.colisiones();
                partida.movimiento();
                partida.dibujar();    
                localStorage.setItem("puntuacion", puntuacion);
                localStorage.setItem("vidas", ship.getVidas());      
                
                switch (fase) {
                    case 10:
                        partida.fase10();
                        break;
                    case 11:
                        partida.fase11();
                        break;
                    case 20:
                        partida.fase20();
                        break;
                    case 21:
                        partida.fase21();
                        break;
                    case 30:
                        partida.fase30();
                        break;
                    case 40:
                        partida.fase40();
                        break;
                    case 41:
                        partida.fase41();
                        break;
                    case 50:
                        partida.fase50();
                        break;
                    case 51:
                        partida.fase51();
                        break;
                };
                
                //COMPROBAR SI NOS QUEDAN VIDAS
                if (ship.getVidas() < 1) {
                    partida.gameOver();
                } else {
                    if (finalBoss.getVidas() < 1) {
                        partida.win();
                    } else {
                        if (!pausa) {
                            requestAnimationFrame(partida.jugar);
                        } else {
                            contexto.drawImage(pausaSprite[0], 0, 0, pausaSprite[0].width, pausaSprite[0].height);
                        };
                    };
                };
            };
        };
 
        var partida = new partida();
        //TEMPORIZADORES
        var pu;
        var acelTiempo; 
        var desInmort; 
        var animacionNave = window.setInterval(partida.cambioPoseNave, 20);
        var tran = window.setInterval(partida.transicionInicial, 10);
        var ray;
    };
};

