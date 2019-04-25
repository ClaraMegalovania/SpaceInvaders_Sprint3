function conDisparos () {      
                    
    //CREAR Y CARGAR EL CONTEXTO
    var canvas = document.getElementById("lienzo");
    var contexto = canvas.getContext("2d");
    
    //CREAR Y CARGAR LA MÚSICA
    var musica = document.getElementById("musicaJuego");
    musica.currentTime = 0;
    musica.play();
    var musicaLenta = document.getElementById("musicaJuegoLenta");
    
    var agujeroNegro = document.getElementById("agujeroNegro");

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
    var navePoseSiguienteSprite = 0;
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
    
    var marcianoColorSprite = 0;
    var marcianoPoseSprite = 0;
    var marcianoSprite = [];
    marcianoSprite[0] = [];
    marcianoSprite[1] = [];
    marcianoSprite[0][0] = [];
    marcianoSprite[0][1] = [];
    marcianoSprite[1][0] = [];
    marcianoSprite[1][1] = [];
    marcianoSprite[0][0][0] = new Image();
    marcianoSprite[0][0][0].src = "ConDisparos/MarcianoA10.png";
    marcianoSprite[0][0][1] = new Image();
    marcianoSprite[0][0][1].src = "ConDisparos/MarcianoA11.png";
    marcianoSprite[0][1][0] = new Image();
    marcianoSprite[0][1][0].src = "ConDisparos/MarcianoA20.png";
    marcianoSprite[0][1][1] = new Image();
    marcianoSprite[0][1][1].src = "ConDisparos/MarcianoA21.png";
    marcianoSprite[1][0][0] = new Image();
    marcianoSprite[1][0][0].src = "ConDisparos/MarcianoB10.png";
    marcianoSprite[1][0][1] = new Image();
    marcianoSprite[1][0][1].src = "ConDisparos/MarcianoB11.png";
    marcianoSprite[1][1][0] = new Image();
    marcianoSprite[1][1][0].src = "ConDisparos/MarcianoB20.png";
    marcianoSprite[1][1][1] = new Image();
    marcianoSprite[1][1][1].src = "ConDisparos/MarcianoB21.png";
    
    var nodrizaColorSprite = 0;
    var nodrizaPoseSprite = 0;
    var nodrizaSprite = [];
    nodrizaSprite[0] = [];
    nodrizaSprite[1] = [];
    nodrizaSprite[0][0] = [];
    nodrizaSprite[1][0] = [];
    nodrizaSprite[0][0] = new Image();
    nodrizaSprite[0][0].src = "ConDisparos/Nodriza10.png";
    nodrizaSprite[0][1] = new Image();
    nodrizaSprite[0][1].src = "ConDisparos/Nodriza11.png";
    nodrizaSprite[1][0] = new Image();
    nodrizaSprite[1][0].src = "ConDisparos/Nodriza20.png";
    nodrizaSprite[1][1] = new Image();
    nodrizaSprite[1][1].src = "ConDisparos/Nodriza21.png";
    
    var bunkerSprite = [];
    bunkerSprite[0] = new Image();
    bunkerSprite[0].src = "ConDisparos/Bunker3.png";
    bunkerSprite[1] = new Image();
    bunkerSprite[1].src = "ConDisparos/Bunker2.png";
    bunkerSprite[2] = new Image();
    bunkerSprite[2].src = "ConDisparos/Bunker1.png";
    
    var balaNaveSprite = new Image();
    balaNaveSprite.src = "ConDisparos/BalaNave.png";
    var balaMarcianoSprite = new Image();
    balaMarcianoSprite.src = "ConDisparos/BalaMarciano.png";
    var balaNodrizaSprite = new Image();
    balaNodrizaSprite.src = "ConDisparos/BalaNodriza.png";
    
    var powerUpVidaSprite = new Image();
    powerUpVidaSprite.src = "ConDisparos/PowerUpVida.png";
    var powerUpBunkerSprite = new Image();
    powerUpBunkerSprite.src = "ConDisparos/PowerUpBunker.png";
    var powerUpTiempoSprite = new Image();
    powerUpTiempoSprite.src = "ConDisparos/PowerUpTiempo.png";
    var powerUpInmortalSprite = new Image();
    powerUpInmortalSprite.src = "ConDisparos/PowerUpInmortal.png";
    
    var portalPoseSprite = 0;
    var portalPoseSiguienteSprite = 0;
    var portalSprite = [];
    portalSprite[0] = new Image();
    portalSprite[0].src = "ConDisparos/Portal0.png";
    portalSprite[1] = new Image();
    portalSprite[1].src = "ConDisparos/Portal1.png";
    portalSprite[2] = new Image();
    portalSprite[2].src = "ConDisparos/Portal2.png";
    portalSprite[3] = new Image();
    portalSprite[3].src = "ConDisparos/Portal3.png";
    portalSprite[4] = new Image();
    portalSprite[4].src = "ConDisparos/Portal4.png";
    portalSprite[5] = new Image();
    portalSprite[5].src = "ConDisparos/Portal5.png";
    portalSprite[6] = new Image();
    portalSprite[6].src = "ConDisparos/Portal6.png";
    portalSprite[7] = new Image();
    portalSprite[7].src = "ConDisparos/Portal7.png";
    portalSprite[8] = new Image();
    portalSprite[8].src = "ConDisparos/Portal8.png";
    portalSprite[9] = new Image();
    portalSprite[9].src = "ConDisparos/Portal9.png";
    portalSprite[10] = new Image();
    portalSprite[10].src = "ConDisparos/Portal10.png";
    portalSprite[11] = new Image();
    portalSprite[11].src = "ConDisparos/Portal11.png";
    portalSprite[12] = new Image();
    portalSprite[12].src = "ConDisparos/Portal12.png";
    portalSprite[13] = new Image();
    portalSprite[13].src = "ConDisparos/Portal13.png";
    portalSprite[14] = new Image();
    portalSprite[14].src = "ConDisparos/Portal14.png";
    portalSprite[15] = new Image();
    portalSprite[15].src = "ConDisparos/Portal15.png";
    
    var fondoSprite = new Image();
    fondoSprite.src = "ConDisparos/Fondo.png"; 
    var fondoPowerUpTiempoSprite = new Image();
    fondoPowerUpTiempoSprite.src = "ConDisparos/FondoPowerUpTiempo.png";
    var fondoPortalSprite = new Image();
    fondoPortalSprite.src = "ConDisparos/FondoJefeFinal.png";
    
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
    var puntuacion = 0;
    var contador = 1;
    var pausa = false;
    var pausaSeleccion = 1;
    var fundido = 0;
    
    //VARIABLES NAVE
    var ship;
    var velocidadNaveX = 9;
    var velocidadNaveY = 9;
    var vidasNave = 3;
    
    //VARIABLES BALA
    var bullet;
    var bulletMar;
    var bulletNod;
    var velocidadBalaNaveY = 7;
    var velocidadBalaMarcianoY = 5;
    var velocidadBalaNodrizaY = 10;
    var municionMar = true;
 
    //VARIABLES MARCIANOS
    var arrMar = [];
    var filasMarcianos = 4;
    var columnasMarcianos = 9;
    var velocidadMarcianoX = 4;
    var velocidadMarcianoY = 5;
    var vidasMarciano = 1;
    
    //VARIABLES NODRIZA
    var suprema;
    var velocidadNodrizaX = 7;
    var vidasNodriza = 1;

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
    
    //VARIABLES PORTAL
    var port;
    
    //RETARDO PARA CARGAR LAS IMÁGENES
    fondoSprite.onload = function () {

        //INICIALIZADOR NAVE
        ship = new nave(canvas.width / 2, canvas.height * 0.95, velocidadNaveX, velocidadNaveY, vidasNave, true);

        //INICIALIZADOR BALAS
        bullet = new bala(0, 0, 0, -velocidadBalaNaveY, 0 , 0);
        bulletMar = new bala(0, 0, 0, velocidadBalaMarcianoY, 0, 0);
        bulletNod = new bala(0, 0, 0, velocidadBalaNodrizaY, 0, 0);
        
        //INICIALIZADOR MATRIZ MARCIANOS;
        var posisionInicialMarcianosX = marcianoSprite[0][marcianoColorSprite][marcianoPoseSprite].width / 2;
        var posisionInicialMarcianosY = marcianoSprite[0][marcianoColorSprite][marcianoPoseSprite].height / 2;
        for (var i = 0; i < filasMarcianos; i++) {
            arrMar[i] = [];
            posisionInicialMarcianosX = marcianoSprite[0][marcianoColorSprite][marcianoPoseSprite].width / 2;
            for (var j = 0; j < columnasMarcianos; j++) {
                arrMar[i][j] = new marciano(posisionInicialMarcianosX, posisionInicialMarcianosY, velocidadMarcianoX, velocidadMarcianoY, vidasMarciano);
                posisionInicialMarcianosX = posisionInicialMarcianosX + marcianoSprite[0][marcianoColorSprite][marcianoPoseSprite].width * 1.4;
            };
            posisionInicialMarcianosY = posisionInicialMarcianosY + marcianoSprite[0][marcianoColorSprite][marcianoPoseSprite].height * 1.4;
        };

        //INICIALIZADOR NODRIZA
        suprema = new nodriza(0 - nodrizaSprite[nodrizaColorSprite][nodrizaPoseSprite].width / 2, random(nodrizaSprite[nodrizaColorSprite][nodrizaPoseSprite].height / 2, nodrizaSprite[nodrizaColorSprite][nodrizaPoseSprite].height * 5), velocidadNodrizaX, 0, true);

        //INICIALIZADOR ARRAY BÚNKERS
        for (var i = 0; i < numeroBunkers; i++) {
            arrBunk[i] = new bunker(canvas.width * (0.8 - 0.2 * i), canvas.height * 0.80, vidasBunker);
        };
        
        //INICIALIZADOR POWER UP 
        powerUpVida = new powerUp(5);
        powerUpBunker = new powerUp(5);
        powerUpTiempo = new powerUp(5);
        powerUpInmortal = new powerUp(5);
        
        //INICILIZAR PORTAL
        port = new portal(canvas.width / 2, - portalSprite[portalPoseSprite].height / 2);

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
            if ((e.key === 'p' || e.key === 'P') && !(ship.getVidas() < 1 || contador === 0) && !pausa) {
                pausa = true;
                window.clearInterval(crearNod);
                window.clearInterval(disparoMar);
                window.clearTimeout(pu);
                window.clearInterval(animacionNave);
                window.clearInterval(animacionMarciano);
                window.clearInterval(animacionNodriza);
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
                        crearNod = window.setInterval(partida.naveNodriza, 10000);
                        disparoMar = window.setInterval(partida.disparoMarciano, 3000);
                        pu = window.setTimeout(partida.powerUp, random(4000, 10000));
                        animacionNave = window.setInterval(partida.cambioPoseNave, 20);
                        if (indiceTemporal !== 1) {
                            acelTiempo = window.setTimeout(partida.acelerarTiempo, 10000 - contadorTemporalT);
                            horaT = new Date().getTime();
                            musicaLenta.play();
                            animacionMarciano = window.setInterval(partida.cambioPoseMarcianos, 900);
                            animacionNodriza = window.setInterval(partida.cambioPoseNodriza, 1200);
                        } else {
                            musica.play();
                            animacionMarciano = window.setInterval(partida.cambioPoseMarcianos, 300);
                            animacionNodriza = window.setInterval(partida.cambioPoseNodriza, 400);
                        };
                        if (inmortal) {
                            desInmort = window.setTimeout(partida.desInmortalizacion, 10000 - contadorTemporalI);
                            horaI = new Date().getTime();
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
            if (e.keyCode === 13 && (ship.getVidas() < 1 || contador === 0)) {
                window.removeEventListener("keydown", controles, false); 
                musica.pause();
                if (ship.getVidas() < 1) {
                    ranking(puntuacion);
                } else {
                    tran = window.setInterval(partida.transicionPortal, 10);
                    agujeroNegro.currentTime = 0;
                    agujeroNegro.play();
                };  
            };
        };

        function partida () {

            //FUNCIÓN PARA CREAR NODRIZA
            this.naveNodriza = function () {
                if (suprema.getVidas() < 1) {
                    suprema.setPosX(0 - nodrizaSprite[nodrizaColorSprite][nodrizaPoseSprite].width / 2);
                    suprema.setPosY(random(nodrizaSprite[nodrizaColorSprite][nodrizaPoseSprite].height / 2, nodrizaSprite[nodrizaColorSprite][nodrizaPoseSprite].height * 3));
                    suprema.setVidas(vidasNodriza);
                };  
            };
            
            //FUNCIÓN PARA DISPARAR BALA NODRIZA
            this.disparoNodriza = function () {
                if (suprema.getDisparo() && suprema.getVidas() > 0 && suprema.getPosX() > ship.getPosX() - 5 && suprema.getPosX() < ship.getPosX() + 11) {
                    bulletNod.setPosX(suprema.getPosX());
                    bulletNod.setPosY(suprema.getPosY());
                    bulletNod.setVelX(0);
                    bulletNod.setVelY(velocidadBalaNodrizaY);
                    bulletNod.setVidas(1);
                    bulletNod.setRebotes(0);
                    suprema.setDisparo(false);
                    disparoSnd.currentTime = 0;
                    disparoSnd.play();
                };
            };
            
            //FUNCIÓN PARA DISPARAR BALA MARCIANO
            this.disparoMarciano = function () {
                var aleatorioI;
                var aleatorioJ;
                do {
                    aleatorioI = random(0, filasMarcianos - 1);            
                    aleatorioJ = random(0, columnasMarcianos - 1);  
                } while (arrMar[aleatorioI][aleatorioJ].getVidas() < 1);
                if (municionMar === true) {
                    bulletMar.setPosX(arrMar[aleatorioI][aleatorioJ].getPosX());
                    bulletMar.setPosY(arrMar[aleatorioI][aleatorioJ].getPosY());
                    bulletMar.setVelX(0);
                    bulletMar.setVelY(velocidadBalaMarcianoY);
                    bulletMar.setVidas(1);
                    bulletMar.setRebotes(0);
                    municionMar = false;
                    disparoSnd.currentTime = 0;
                    disparoSnd.play();
                };  
            };
            
            //FUNCIÓN PARA CAMBIAR DE COLOR A LOS MARCIANOS
            this.cambioColor = function () {     
                if (marcianoColorSprite === 0) {
                    marcianoColorSprite = 1;
                }else{  
                    marcianoColorSprite = 0;
                };   
            };         
            
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
            
            //FUNCIÓN PARA CAMBIAR DE POSE A LOS MARCIANOS
            this.cambioPoseMarcianos = function () {
                if (marcianoPoseSprite === 0) {
                    marcianoPoseSprite = 1;
                }else{  
                    marcianoPoseSprite = 0;
                }; 
            };
            
            //FUNCIÓN PARA CAMBIAR DE POSE A LA NODRIZA
            this.cambioPoseNodriza = function () {
                if (nodrizaPoseSprite === 0) {
                    nodrizaPoseSprite = 1;
                    nodrizaColorSprite = 0;
                }else{  
                    nodrizaPoseSprite = 0;
                    nodrizaColorSprite = 1;
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
                window.clearInterval(animacionMarciano);
                window.clearInterval(animacionNodriza);
                animacionMarciano = window.setInterval(partida.cambioPoseMarcianos, 900);
                animacionNodriza = window.setInterval(partida.cambioPoseNodriza, 1200);
            };
            
            //FUNCIÓN PARA ACELERAR TIEMPO     
            this.acelerarTiempo = function () {
                powerUpTiempo2Snd.currentTime = 0;
                powerUpTiempo2Snd.play();

                musica.currentTime = musicaLenta.currentTime * 0.698;
                musicaLenta.pause();
                musica.play();

                indiceTemporal = 1;
                window.clearInterval(animacionMarciano);
                window.clearInterval(animacionNodriza);
                animacionMarciano = window.setInterval(partida.cambioPoseMarcianos, 300);
                animacionNodriza = window.setInterval(partida.cambioPoseNodriza, 400);
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

                //COLISIÓN MARCIANO-PARED
                var exitBucle = true;
                for (var i = 0; i < filasMarcianos; i++) {
                    for (var j = 0; j < columnasMarcianos; j++) {
                        if ((arrMar[i][j].getPosX() > canvas.width - marcianoSprite[0][marcianoColorSprite][marcianoPoseSprite].width / 2 || arrMar[i][j].getPosX() < 0 + marcianoSprite[0][marcianoColorSprite][marcianoPoseSprite].width / 2) && arrMar[i][j].getVidas() > 0 && exitBucle) {
                            for (var k = 0; k < filasMarcianos; k++) {
                                for (var u = 0; u < columnasMarcianos; u++) {
                                    arrMar[k][u].setVelX(arrMar[k][u].getVelX() * (-1));
                                    arrMar[k][u].setPosY(arrMar[k][u].getPosY() + arrMar[k][u].getVelY());
                                };
                            };
                            exitBucle = false;
                        };
                    };
                };
                
                //COLISIÓN MARCIANO-SUELO
                var exitBucle = true;
                for (var i = 0; i < filasMarcianos; i++) {
                    for (var j = 0; j < columnasMarcianos; j++) {
                        if (arrMar[i][j].getPosY() > canvas.height - marcianoSprite[0][marcianoColorSprite][marcianoPoseSprite].height / 2 && arrMar[i][j].getVidas() > 0 && exitBucle) {
                            ship.setVidas(ship.getVidas() - 1);
                            exitBucle = false;
                        };
                    };
                };

                //COLISIÓN MARCIANO-BÚNKER
                for (var i = 0; i < filasMarcianos; i++) {
                    for (var j = 0; j < columnasMarcianos; j++) {
                        for (var k = 0; k < numeroBunkers; k++) {
                            distanciaX = Math.abs(arrBunk[k].getPosX() - arrMar[i][j].getPosX());
                            distanciaY = Math.abs(arrBunk[k].getPosY() - arrMar[i][j].getPosY());
                            if (distanciaX < marcianoSprite[0][marcianoColorSprite][marcianoPoseSprite].width / 2 + bunkerSprite[0].width / 2 && distanciaY < marcianoSprite[0][marcianoColorSprite][marcianoPoseSprite].height / 2 + bunkerSprite[0].height / 2 && arrMar[i][j].getVidas() > 0 && arrBunk[k].getVidas() > 0) {
                                arrBunk[k].setVidas(arrBunk[k].getVidas() - 1);
                                explosionSnd.currentTime = 0;
                                explosionSnd.play();
                            };
                        };
                    };
                };

                //COLISIÓN MARCIANO-NAVE
                for (var i = 0; i < filasMarcianos; i++) {
                    for (var j = 0; j < columnasMarcianos; j++) {
                        distanciaX = Math.abs(ship.getPosX() - arrMar[i][j].getPosX());
                        distanciaY = Math.abs(ship.getPosY() - arrMar[i][j].getPosY());
                        if (distanciaX < marcianoSprite[0][marcianoColorSprite][marcianoPoseSprite].width / 2 + naveSprite[navePoseSprite].width / 2 && distanciaY < marcianoSprite[0][marcianoColorSprite][marcianoPoseSprite].height / 2 + naveSprite[navePoseSprite].height / 2 && arrMar[i][j].getVidas() > 0 && ship.getVidas() > 0 && !inmortal) {
                            arrMar[i][j].setVidas(arrMar[i][j].getVidas() - 1);
                            ship.setVidas(ship.getVidas() - 1);
                            ship.setPosX(canvas.width / 2);
                            ship.setPosY(canvas.height * 0.95);
                            explosionSnd.currentTime = 0;
                            explosionSnd.play();
                            for (var i = 0; i < filasMarcianos; i++) {
                                for (var j = 0; j < columnasMarcianos; j++) {
                                    arrMar[i][j].setVelX(Math.sign(arrMar[i][j].getVelX()) * (Math.abs(arrMar[i][j].getVelX()) + 0.05));
                                    arrMar[i][j].setVelY(arrMar[i][j].getVelY() + 0.1);
                                };
                            };
                        };
                    };
                };
                
                //COLISIÓN NODRIZA-PARED DERECHA
                if (canvas.width + nodrizaSprite[nodrizaColorSprite][nodrizaPoseSprite].width / 2 < suprema.getPosX() && suprema.getVidas() > 0) {
                    suprema.setVidas(suprema.getVidas() - 1);  
                };

                //COLISIÓN NODRIZA-NAVE
                distanciaX = Math.abs(ship.getPosX() - suprema.getPosX());
                distanciaY = Math.abs(ship.getPosY() - suprema.getPosY());
                if (distanciaX < nodrizaSprite[nodrizaColorSprite][nodrizaPoseSprite].width / 2 + naveSprite[navePoseSprite].width / 2 && distanciaY < nodrizaSprite[nodrizaColorSprite][nodrizaPoseSprite].height / 2 + naveSprite[navePoseSprite].height / 2 && suprema.getVidas() > 0 && ship.getVidas() > 0 && !inmortal) {
                    suprema.setVidas(suprema.getVidas() - 1);
                    ship.setVidas(ship.getVidas() - 1);
                    ship.setPosX(canvas.width / 2);
                    ship.setPosY(canvas.height * 0.95);
                    explosionSnd.currentTime = 0;
                    explosionSnd.play();
                };
                
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
 
                //COLISIÓN BALA NAVE-MARCIANO
                for (var i = 0; i < filasMarcianos; i++) {
                    for (var j = 0; j < columnasMarcianos; j++) {
                        distanciaX = Math.abs(bullet.getPosX() - arrMar[i][j].getPosX());
                        distanciaY = Math.abs(bullet.getPosY() - arrMar[i][j].getPosY());
                        if (distanciaX < marcianoSprite[0][marcianoColorSprite][marcianoPoseSprite].width / 2 + balaNaveSprite.width / 2 && distanciaY < marcianoSprite[0][marcianoColorSprite][marcianoPoseSprite].height / 2 + balaNaveSprite.height / 2 && arrMar[i][j].getVidas() > 0 && bullet.getVidas() > 0) {
                            arrMar[i][j].setVidas(arrMar[i][j].getVidas() - 1);
                            bullet.setVidas(0);
                            ship.setDisparo(true);
                            puntuacion += 100;
                            explosionSnd.currentTime = 0;
                            explosionSnd.play();
                            for (var i = 0; i < filasMarcianos; i++) {
                                for (var j = 0; j < columnasMarcianos; j++) {
                                    arrMar[i][j].setVelX(Math.sign(arrMar[i][j].getVelX()) * (Math.abs(arrMar[i][j].getVelX()) + 0.05));
                                    arrMar[i][j].setVelY(arrMar[i][j].getVelY() + 0.1);
                                };
                            };
                        };
                    };
                };
                
                //COLISIÓN BALA NAVE-NODRIZA
                for (var i = 0; i < filasMarcianos; i++) {
                    for (var j = 0; j < columnasMarcianos; j++) {
                        distanciaX = Math.abs(bullet.getPosX() - suprema.getPosX());
                        distanciaY = Math.abs(bullet.getPosY() - suprema.getPosY());
                        if (distanciaX < nodrizaSprite[nodrizaColorSprite][nodrizaPoseSprite].width / 2 + balaNaveSprite.width / 2 && distanciaY < nodrizaSprite[nodrizaColorSprite][nodrizaPoseSprite].height / 2 + balaNaveSprite.height / 2 && suprema.getVidas() > 0 && bullet.getVidas() > 0) {
                            suprema.setVidas(suprema.getVidas() - 1);
                            bullet.setVidas(0);
                            ship.setDisparo(true);
                            puntuacion += 300;
                            explosionSnd.currentTime = 0;
                            explosionSnd.play();
                        };
                    };
                };
                
                //COLISIÓN BALA NAVE-BÚNKER
                for (var i = 0; i < numeroBunkers; i++) {
                    distanciaX = Math.abs(arrBunk[i].getPosX() - bullet.getPosX());
                    distanciaY = Math.abs(arrBunk[i].getPosY() - bullet.getPosY());
                    if (distanciaX < balaNaveSprite.width / 2 + bunkerSprite[0].width / 2 && distanciaY < balaNaveSprite.height / 2 + bunkerSprite[0].height / 2 && bullet.getVidas() > 0 && arrBunk[i].getVidas() > 0) {
                        arrBunk[i].setVidas(arrBunk[i].getVidas() - 1);
                        bullet.setVidas(0);
                        ship.setDisparo(true);
                        partida.cambioColor();
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
                
                //COLISIÓN BALA MARCIANO-NAVE
                distanciaX = Math.abs(ship.getPosX() - bulletMar.getPosX());
                distanciaY = Math.abs(ship.getPosY() - bulletMar.getPosY());
                if (distanciaX < balaMarcianoSprite.width / 2 + naveSprite[navePoseSprite].width / 2 && distanciaY < balaMarcianoSprite.height / 2 + naveSprite[navePoseSprite].height / 2 && bulletMar.getVidas() > 0 && ship.getVidas() > 0 && !inmortal) {
                    ship.setVidas(ship.getVidas() - 1);
                    ship.setPosX(canvas.width / 2);
                    ship.setPosY(canvas.height * 0.95);
                    bulletMar.setVidas(0);
                    municionMar = true;        
                    explosionSnd.currentTime = 0;
                    explosionSnd.play();
                };
                
                //COLISIÓN BALA MARCIANO-BÚNKER
                for (var i = 0; i < numeroBunkers; i++) {
                    distanciaX = Math.abs(arrBunk[i].getPosX() - bulletMar.getPosX());
                    distanciaY = Math.abs(arrBunk[i].getPosY() - bulletMar.getPosY());
                    if (distanciaX < balaMarcianoSprite.width / 2 + bunkerSprite[0].width / 2 && distanciaY < balaMarcianoSprite.height / 2 + bunkerSprite[0].height / 2 && bulletMar.getVidas() > 0 && arrBunk[i].getVidas() > 0) {
                        arrBunk[i].setVidas(arrBunk[i].getVidas() - 1);
                        bulletMar.setVidas(0);
                        municionMar = true;
                        partida.cambioColor();
                        explosionSnd.currentTime = 0;
                        explosionSnd.play();
                    };
                };
                
                //COLISIÓN BALA NODRIZA-NAVE
                distanciaX = Math.abs(ship.getPosX() - bulletNod.getPosX());
                distanciaY = Math.abs(ship.getPosY() - bulletNod.getPosY());
                if (distanciaX < balaNodrizaSprite.width / 2 + naveSprite[navePoseSprite].width / 2 && distanciaY < balaNodrizaSprite.height / 2 + naveSprite[navePoseSprite].height / 2 && bulletNod.getVidas() > 0 && ship.getVidas() > 0 && !inmortal) {
                    ship.setVidas(ship.getVidas() - 1);
                    ship.setPosX(canvas.width / 2);
                    ship.setPosY(canvas.height * 0.95);
                    bulletNod.setVidas(0);
                    suprema.setDisparo(true);
                    explosionSnd.currentTime = 0;
                    explosionSnd.play();
                };
                
                //COLISIÓN BALA NODRIZA-BÚNKER
                for (var i = 0; i < numeroBunkers; i++) {
                    distanciaX = Math.abs(arrBunk[i].getPosX() - bulletNod.getPosX());
                    distanciaY = Math.abs(arrBunk[i].getPosY() - bulletNod.getPosY());
                    if (distanciaX < balaNodrizaSprite.width / 2 + bunkerSprite[0].width / 2 && distanciaY < balaNodrizaSprite.height / 2 + bunkerSprite[0].height / 2 && bulletNod.getVidas() > 0 && arrBunk[i].getVidas() > 0) {
                        arrBunk[i].setVidas(arrBunk[i].getVidas() - 1);
                        bulletNod.setVidas(0);
                        suprema.setDisparo(true);
                        partida.cambioColor();
                        explosionSnd.currentTime = 0;
                        explosionSnd.play();
                    };
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
                    if (bullet.getRebotes() > 5) {
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
                
                //COLISIÓN BALA MARCIANO-MÁRGENES
                //ARRIBA
                if (bulletMar.getPosY() < 0 + balaMarcianoSprite.height / 2 && bulletMar.getVidas() > 0) {
                    bulletMar.setVelY(bulletMar.getVelY() * (-1)); 
                    bulletMar.setRebotes(bulletMar.getRebotes() + 1);
                    if (bulletMar.getRebotes() > 5) {
                        bulletMar.setVidas(0);
                        municionMar = true;
                    };
                };
                //ABAJO
                if (bulletMar.getPosY() > canvas.height - balaMarcianoSprite.height / 2 && bulletMar.getVidas() > 0) {
                    if (bulletMar.getRebotes() === 0) {
                        bulletMar.setVelX(random(-velocidadBalaMarcianoY, velocidadBalaMarcianoY));
                    };
                    bulletMar.setVelY(bulletMar.getVelY() * (-1)); 
                    bulletMar.setRebotes(bulletMar.getRebotes() + 1);
                };
                //IZQUIREDA
                if (bulletMar.getPosX() < 0 + balaMarcianoSprite.width / 2 && bulletMar.getVidas() > 0) {
                    bulletMar.setVelX(bulletMar.getVelX() * (-1));
                    bulletMar.setRebotes(bulletMar.getRebotes() + 1);
                };
                //DERECHA
                if (bulletMar.getPosX() > canvas.width - balaMarcianoSprite.width / 2 && bulletMar.getVidas() > 0) {
                    bulletMar.setVelX(bulletMar.getVelX() * (-1));
                    bulletMar.setRebotes(bulletMar.getRebotes() + 1);
                };
                
                //COLISIÓN BALA NODRIZA-MÁRGENES
                //ARRIBA
                if (bulletNod.getPosY() < 0 + balaNodrizaSprite.height / 2 && bulletNod.getVidas() > 0) {
                    bulletNod.setVelY(bulletNod.getVelY() * (-1)); 
                    bulletNod.setRebotes(bulletNod.getRebotes() + 1);
                    if (bulletNod.getRebotes() > 10) {
                        bulletNod.setVidas(0);
                        suprema.setDisparo(true);
                    };
                };
                //ABAJO
                if (bulletNod.getPosY() > canvas.height - balaNodrizaSprite.height / 2 && bulletNod.getVidas() > 0) {
                    if (bulletNod.getRebotes() === 0) {
                        bulletNod.setVelX(random(-velocidadBalaNodrizaY, velocidadBalaNodrizaY));
                    };
                    bulletNod.setVelY(bulletNod.getVelY() * (-1)); 
                    bulletNod.setRebotes(bulletNod.getRebotes() + 1);
                };
                //IZQUIREDA
                if (bulletNod.getPosX() < 0 + balaNodrizaSprite.width / 2 && bulletNod.getVidas() > 0) {
                    bulletNod.setVelX(bulletNod.getVelX() * (-1));
                    bulletNod.setRebotes(bulletNod.getRebotes() + 1);
                };
                //DERECHA
                if (bulletNod.getPosX() > canvas.width - balaNodrizaSprite.width / 2 && bulletNod.getVidas() > 0) {
                    bulletNod.setVelX(bulletNod.getVelX() * (-1));
                    bulletNod.setRebotes(bulletNod.getRebotes() + 1);
                };   
                
                // COLISIÓN BALA NAVE-BALA MARCIANO
                distanciaX = Math.abs(bullet.getPosX() - bulletMar.getPosX());
                distanciaY = Math.abs(bullet.getPosY() - bulletMar.getPosY());
                if (distanciaX < balaMarcianoSprite.width / 2 + balaNaveSprite.width / 2 && distanciaY < balaMarcianoSprite.height / 2 + balaNaveSprite.height / 2 && bulletMar.getVidas() > 0 && bullet.getVidas() > 0) {
                    bullet.setVidas(0);
                    ship.setDisparo(true);
                    bulletMar.setVidas(0);
                    municionMar = true;
                    explosionSnd.currentTime = 0;
                    explosionSnd.play();
                };
                
                // COLISIÓN BALA NAVE-BALA NODRIZA
                distanciaX = Math.abs(bullet.getPosX() - bulletNod.getPosX());
                distanciaY = Math.abs(bullet.getPosY() - bulletNod.getPosY());
                if (distanciaX < balaNodrizaSprite.width / 2 + balaNaveSprite.width / 2 && distanciaY < balaNodrizaSprite.height / 2 + balaNaveSprite.height / 2 && bulletNod.getVidas() > 0 && bullet.getVidas() > 0) {
                    bullet.setVidas(0);
                    ship.setDisparo(true);
                    bulletNod.setVidas(0);
                    suprema.setDisparo(true);
                    explosionSnd.currentTime = 0;
                    explosionSnd.play();
                };
                
                // COLISIÓN BALA MARCIANO-BALA NODRIZA
                distanciaX = Math.abs(bulletMar.getPosX() - bulletNod.getPosX());
                distanciaY = Math.abs(bulletMar.getPosY() - bulletNod.getPosY());
                if (distanciaX < balaNodrizaSprite.width / 2 + balaMarcianoSprite.width / 2 && distanciaY < balaNodrizaSprite.height / 2 + balaMarcianoSprite.height / 2 && bulletNod.getVidas() > 0 && bulletMar.getVidas() > 0) {
                    bulletMar.setVidas(0);
                    municionMar = true;
                    bulletNod.setVidas(0);
                    suprema.setDisparo(true);
                    explosionSnd.currentTime = 0;
                    explosionSnd.play();
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

                //MOVIMIENTO MARCIANOS
                for (var i = 0; i < filasMarcianos; i++) {
                    for (var j = 0; j < columnasMarcianos; j++) {
                        arrMar[i][j].setPosX(arrMar[i][j].getPosX() + arrMar[i][j].getVelX() * indiceTemporal);
                    };
                };

                //MOVIMIENTO NODRIZA
                suprema.setPosX(suprema.getPosX() + suprema.getVelX() * indiceTemporal);
                
                //MOVIMIENTO BALA NAVE
                bullet.setPosX(bullet.getPosX() + bullet.getVelX());
                bullet.setPosY(bullet.getPosY() + bullet.getVelY());
                
                //MOVIMIENTO BALA MARCIANO
                bulletMar.setPosX(bulletMar.getPosX() + bulletMar.getVelX() * indiceTemporal);
                bulletMar.setPosY(bulletMar.getPosY() + bulletMar.getVelY() * indiceTemporal);
                
                //MOVIMIENTO BALA NODRIZA
                bulletNod.setPosX(bulletNod.getPosX() + bulletNod.getVelX() * indiceTemporal);
                bulletNod.setPosY(bulletNod.getPosY() + bulletNod.getVelY() * indiceTemporal); 
                
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
                
                //DIBUJAR BALA MARCIANO
                if (bulletMar.getVidas() > 0) {
                    contexto.drawImage(balaMarcianoSprite, bulletMar.getPosX()- balaMarcianoSprite.width / 2, bulletMar.getPosY() - balaMarcianoSprite.height / 2, balaMarcianoSprite.width, balaMarcianoSprite.height);
                };
                
                //DIBUJAR BALA NODRIZA
                if (bulletNod.getVidas() > 0) {
                    contexto.drawImage(balaNodrizaSprite, bulletNod.getPosX()- balaNodrizaSprite.width / 2, bulletNod.getPosY() - balaNodrizaSprite.height / 2, balaNodrizaSprite.width, balaNodrizaSprite.height);
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

                //DIBUJAR MARCIANOS
                for (var i = 0; i < filasMarcianos; i++) {
                    for (var j = 0; j < columnasMarcianos; j++) {
                        if (arrMar[i][j].getVidas() > 0 && i % 2 === 0) {
                            contexto.drawImage(marcianoSprite[0][marcianoColorSprite][marcianoPoseSprite], arrMar[i][j].getPosX() - marcianoSprite[0][marcianoColorSprite][marcianoPoseSprite].width / 2, arrMar[i][j].getPosY() - marcianoSprite[0][marcianoColorSprite][marcianoPoseSprite].height / 2, marcianoSprite[0][marcianoColorSprite][marcianoPoseSprite].width, marcianoSprite[0][marcianoColorSprite][marcianoPoseSprite].height);
                        } else {
                            if (arrMar[i][j].getVidas() > 0 && i % 2 !== 0) {
                                contexto.drawImage(marcianoSprite[1][marcianoColorSprite][marcianoPoseSprite], arrMar[i][j].getPosX() - marcianoSprite[1][marcianoColorSprite][marcianoPoseSprite].width / 2, arrMar[i][j].getPosY() - marcianoSprite[1][marcianoColorSprite][marcianoPoseSprite].height / 2, marcianoSprite[1][marcianoColorSprite][marcianoPoseSprite].width, marcianoSprite[1][marcianoColorSprite][marcianoPoseSprite].height);
                            };
                        };  
                    };
                };

                //DIBUJAR MODRIZA
                if (suprema.getVidas() > 0) {
                    contexto.drawImage(nodrizaSprite[nodrizaColorSprite][nodrizaPoseSprite], suprema.getPosX() - nodrizaSprite[nodrizaColorSprite][nodrizaPoseSprite].width / 2, suprema.getPosY() - nodrizaSprite[nodrizaColorSprite][nodrizaPoseSprite].height / 2, nodrizaSprite[nodrizaColorSprite][nodrizaPoseSprite].width, nodrizaSprite[nodrizaColorSprite][nodrizaPoseSprite].height);
                };
                
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
                window.clearInterval(crearNod);
                window.clearInterval(disparoMar);
                window.clearTimeout(pu);
                window.clearTimeout(desInmort);
                window.clearInterval(animacionNave);
                window.clearInterval(animacionMarciano);
                window.clearInterval(animacionNodriza);
                if (indiceTemporal !== 1) {
                    window.clearTimeout(acelTiempo);
                };
                
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
                window.clearInterval(crearNod);
                window.clearInterval(disparoMar);
                window.clearTimeout(pu);
                window.clearTimeout(desInmort);
                window.clearInterval(animacionNave);
                window.clearInterval(animacionMarciano);
                window.clearInterval(animacionNodriza);
                if (indiceTemporal !== 1) {
                    window.clearTimeout(acelTiempo);
                };
                
                if (indiceTemporal !== 1) {
                    musica.currentTime = musicaLenta.currentTime * 0.698;
                    musicaLenta.pause();
                    musica.play();
                };
                
                winSnd.currentTime = 0;
                winSnd.play();              
            };
            
            //FUNCIÓN PARA HACER QUE APAREZCA EL PORTAL
            this.transicionPortal = function () {
                
                //CUBRIR FRAME ANTERIOR DE NEGRO
                contexto.fillStyle = "black";
                contexto.fillRect(0, 0, canvas.width, canvas.height);
                
                //DIBUJAR FONDO
                contexto.drawImage(fondoPortalSprite, 0, 0, fondoPortalSprite.width, fondoPortalSprite.height);
                contexto.drawImage(fondoSprite, 0, 0, fondoSprite.width, port.getPosY() - 40, 0, 0, fondoSprite.width, port.getPosY() - 40);
                contexto.drawImage(fondoSprite, 0, port.getPosY() + 40, fondoSprite.width, fondoSprite.height - port.getPosY() + 40, 0, port.getPosY() + 40, fondoSprite.width, fondoSprite.height - port.getPosY() + 40);
                contexto.drawImage(fondoSprite, 0, port.getPosY() - 42, port.getPosX() - 40, 84, 0, port.getPosY() - 42, port.getPosX() - 40, 84);
                contexto.drawImage(fondoSprite, port.getPosX() + 40, port.getPosY() - 42, fondoSprite.width - port.getPosX() + 40, 84, port.getPosX() + 40, port.getPosY() - 42, fondoSprite.width - port.getPosX() + 40, 84);
                
                //DIBUJAR PORTAL
                contexto.drawImage(portalSprite[portalPoseSprite], port.getPosX() - portalSprite[portalPoseSprite].width / 2, port.getPosY() - portalSprite[portalPoseSprite].height / 2, portalSprite[portalPoseSprite].width, portalSprite[portalPoseSprite].height); 
                
                //MOVER PORTAL
                port.setPosY(port.getPosY() + 0.55);
                 
                //ANIMAR PORTAL
                portalPoseSiguienteSprite ++;
                if (portalPoseSiguienteSprite === 10) {
                    portalPoseSiguienteSprite = 0;
                    portalPoseSprite ++;
                    if (portalPoseSprite > 15) {
                        portalPoseSprite = 0;
                    };
                };
                
                //COMPROBAR QUE EL PORTAL HA LLEGADO A SU POSICIÓN
                if (port.getPosY() > 250) {
                    window.clearInterval(tran);
                    tran = window.setInterval(partida.transicionNave, 10);
                    ship.setPosX(canvas.width / 2);
                    ship.setPosY(canvas.height + naveSprite[navePoseSprite].height / 2);
                };
            };
            
            //FUNCIÓN PARA QUE APAREZCA LA NAVE Y ENTRE EN EL PORTAL
            this.transicionNave = function () {
                
                //CUBRIR FRAME ANTERIOR DE NEGRO
                contexto.fillStyle = "black";
                contexto.fillRect(0, 0, canvas.width, canvas.height);
                
                //DIBUJAR FONDO
                contexto.drawImage(fondoPortalSprite, 0, 0, fondoPortalSprite.width, fondoPortalSprite.height);
                contexto.drawImage(fondoSprite, 0, port.getPosY() + 40, fondoSprite.width, fondoSprite.height - port.getPosY() + 40, 0, port.getPosY() + 40, fondoSprite.width, fondoSprite.height - port.getPosY() + 40);
                contexto.drawImage(fondoSprite, 0, port.getPosY() - 42, port.getPosX() - 40, 84, 0, port.getPosY() - 42, port.getPosX() - 40, 84);
                contexto.drawImage(fondoSprite, port.getPosX() + 40, port.getPosY() - 42, fondoSprite.width - port.getPosX() + 40, 84, port.getPosX() + 40, port.getPosY() - 42, fondoSprite.width - port.getPosX() + 40, 84);   
                
                //DIBUJAR PORTAL
                contexto.drawImage(portalSprite[portalPoseSprite], port.getPosX() - portalSprite[portalPoseSprite].width / 2, port.getPosY() - portalSprite[portalPoseSprite].height / 2, portalSprite[portalPoseSprite].width, portalSprite[portalPoseSprite].height); 
                
                //DIBUJAR NAVE
                contexto.drawImage(naveSprite[navePoseSprite], ship.getPosX() - naveSprite[navePoseSprite].width / 2, ship.getPosY() - naveSprite[navePoseSprite].height / 2, naveSprite[navePoseSprite].width, naveSprite[navePoseSprite].height);
                
                //DIBUJAR FONDO-PORTAL 2
                contexto.drawImage(fondoSprite, 0, 0, fondoSprite.width, port.getPosY() - 40, 0, 0, fondoSprite.width, port.getPosY() - 40);
                contexto.drawImage(portalSprite[portalPoseSprite], 0, 0, portalSprite[portalPoseSprite].width, portalSprite[portalPoseSprite].height / 2, port.getPosX() - portalSprite[portalPoseSprite].width / 2, port.getPosY() - portalSprite[portalPoseSprite].height / 2, portalSprite[portalPoseSprite].width, portalSprite[portalPoseSprite].height / 2); 
                
                //MOVER NAVE
                ship.setPosY(ship.getPosY() - 2);      
                
                //ANIMAR PORTAL
                portalPoseSiguienteSprite ++;
                if (portalPoseSiguienteSprite === 10) {
                    portalPoseSiguienteSprite = 0;
                    portalPoseSprite ++;
                    if (portalPoseSprite > 15) {
                        portalPoseSprite = 0;
                    };
                };
                
                //ANIMAR NAVE
                navePoseSiguienteSprite ++;
                if (navePoseSiguienteSprite === 10) {
                    navePoseSiguienteSprite = 0;
                    navePoseSprite ++;
                    if (navePoseSprite > 2) {
                        navePoseSprite = 0;
                    };
                };
                
                //COMPROBAR QUE LA NAVE HA LLEGADO A SU POSICIÓN
                if (ship.getPosY() < 100) {
                    window.clearInterval(tran);
                    tran = window.setInterval(partida.transicionNivel, 10);
                }; 
            };
            
            //FUNCIÓN PARA HACER FUNDIDO AL SIGUIENTE NIVEL
            this.transicionNivel = function () {
                
                contexto.globalAlpha = 1;
                
                //CUBRIR FRAME ANTERIOR DE NEGRO
                contexto.fillStyle = "black";
                contexto.fillRect(0, 0, canvas.width, canvas.height);
                
                //DIBUJAR FONDO
                contexto.drawImage(fondoPortalSprite, 0, 0, fondoPortalSprite.width, fondoPortalSprite.height);
                contexto.drawImage(fondoSprite, 0, 0, fondoSprite.width, port.getPosY() - 40, 0, 0, fondoSprite.width, port.getPosY() - 40);
                contexto.drawImage(fondoSprite, 0, port.getPosY() + 40, fondoSprite.width, fondoSprite.height - port.getPosY() + 40, 0, port.getPosY() + 40, fondoSprite.width, fondoSprite.height - port.getPosY() + 40);
                contexto.drawImage(fondoSprite, 0, port.getPosY() - 42, port.getPosX() - 40, 84, 0, port.getPosY() - 42, port.getPosX() - 40, 84);
                contexto.drawImage(fondoSprite, port.getPosX() + 40, port.getPosY() - 42, fondoSprite.width - port.getPosX() + 40, 84, port.getPosX() + 40, port.getPosY() - 42, fondoSprite.width - port.getPosX() + 40, 84);
                
                //DIBUJAR PORTAL
                contexto.drawImage(portalSprite[portalPoseSprite], port.getPosX() - portalSprite[portalPoseSprite].width / 2, port.getPosY() - portalSprite[portalPoseSprite].height / 2, portalSprite[portalPoseSprite].width, portalSprite[portalPoseSprite].height); 
                
                //PINTAR EL FUNDIDO
                contexto.globalAlpha = fundido;
                contexto.fillStyle = "black";
                contexto.fillRect(0, 0, canvas.width, canvas.height);
                fundido = fundido + 0.01;
                
                //ANIMAR PORTAL
                portalPoseSiguienteSprite ++;
                if (portalPoseSiguienteSprite === 10) {
                    portalPoseSiguienteSprite = 0;
                    portalPoseSprite ++;
                    if (portalPoseSprite > 15) {
                        portalPoseSprite = 0;
                    };
                }; 
                
                //COMPROBAR QUE HA FINALIZADO LA TRANSICIÓN
                if (fundido > 1) {
                    window.clearInterval(tran);
                    conDisparosJefeFinal(puntuacion, ship.getVidas());
                };
            };

            //FUNCIÓN PARA EJECUTAR UN FRAME
            this.jugar = function () {
                
                partida.colisiones();
                partida.movimiento();
                partida.dibujar();  
                partida.disparoNodriza();          
                localStorage.setItem("puntuacion", puntuacion);
                localStorage.setItem("vidas", ship.getVidas());
                
                //COMPROBAR SI NOS QUEDAN VIDAS
                if (ship.getVidas() < 1) {
                    partida.gameOver();
                } else {
                    contador = 0;
                    for (var i = 0; i < filasMarcianos; i++) {
                        for (var j = 0; j < columnasMarcianos; j++) {
                            if (arrMar[i][j].getVidas() > 0) {
                                contador++;
                            };
                        };
                    };
                    if (contador === 0) {
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

        window.addEventListener("keydown", controles, false);
        var partida = new partida();
        partida.jugar();
        //TEMPORIZADORES
        var crearNod = window.setInterval(partida.naveNodriza, 10000);
        var disparoMar = window.setInterval(partida.disparoMarciano, 3000);
        var pu = window.setTimeout(partida.powerUp, random(4000, 10000));
        var acelTiempo; 
        var desInmort; 
        var animacionNave = window.setInterval(partida.cambioPoseNave, 20);
        var animacionMarciano = window.setInterval(partida.cambioPoseMarcianos, 300);
        var animacionNodriza = window.setInterval(partida.cambioPoseNodriza, 400);
        var tran;
    };
};

