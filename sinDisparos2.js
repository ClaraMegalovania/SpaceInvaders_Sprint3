function sinDisparos2() {

    //CREAR Y CARGAR EL CONTEXTO
    var canvas = document.getElementById("lienzo");
    var contexto = canvas.getContext("2d");

    //CREAR Y CARGAR LA MÚSICA
    var musica = document.getElementById("musicaJuego");
    musica.currentTime = 0;
    musica.play();

    var gameOverSnd = document.getElementById("gameOver");
    var umbrellaSnd = document.getElementById("umbrella");
    var dañoSnd = document.getElementById("daño");
    var powerUpVidaSnd = document.getElementById("powerUpVida");
    var finalExplosionSnd = document.getElementById("finalExplosion");
    var powerUpParSnd = document.getElementById("powerUpBunker");
    var expMarSnd0 = document.getElementById("explosionNube0"); //necesitare una explosion para cada nube
    var expMarSnd1 = document.getElementById("explosionNube1");
    var expMarSnd2 = document.getElementById("explosionNube2");
    var expMarSnd3 = document.getElementById("explosionNube3");
    var expMarSnd4 = document.getElementById("explosionNube4");
    var expMarSnd5 = document.getElementById("explosionNube5");
    var expMarSnd6 = document.getElementById("explosionNube6");
    var expMarSnd7 = document.getElementById("explosionNube7");
    var expMarSnd8 = document.getElementById("explosionNube8");
    var expMarSnd9 = document.getElementById("explosionNube9");
    var expMarSndArr = [expMarSnd0, expMarSnd1, expMarSnd2, expMarSnd3, expMarSnd4, expMarSnd5, expMarSnd6, expMarSnd7, expMarSnd8, expMarSnd9];

    //CREAR Y CARGAR LOS SPRITES
    var naveSprite = [];
    var indiceNaveSprite = 0;
    naveSprite[0] = new Image();
    naveSprite[0].src = "SinDisparos/solder.png";

    naveSprite[1] = new Image();
    naveSprite[1].src = "SinDisparos/solizq.png";

    naveSprite[2] = new Image();
    naveSprite[2].src = "SinDisparos/empty.png";

    var marcianoSprite = [];
    var indiceMarSprite = 0; //como el sprite de la nube 1 es [0][X] y el de la 2 es es [1][X], indiceMarSprite es esa X

    marcianoSprite[0] = [];
    marcianoSprite[0][0] = new Image();
    marcianoSprite[0][0].src = "SinDisparos/nube1.png"; //nube base 1
    marcianoSprite[0][1] = new Image();
    marcianoSprite[0][1].src = "SinDisparos/NubeB.png"; //nube base 1 recolor

    marcianoSprite[1] = [];
    marcianoSprite[1][0] = new Image();
    marcianoSprite[1][0].src = "SinDisparos/NubeAR.png"; //nube base 2
    marcianoSprite[1][1] = new Image();
    marcianoSprite[1][1].src = "SinDisparos/NubeBR.png"; //nube base 2 recolor

    var pausaSprite = [];
    pausaSprite[0] = new Image();
    pausaSprite[0].src = "Menús/MenuPausaRegresarAlMenuPrincipal.png";
    pausaSprite[1] = new Image();
    pausaSprite[1].src = "Menús/MenuPausaContinuar.png";

    var portalSprite = [];
    portalSprite[0] = new Image();
    portalSprite[0].src = "SinDisparos/portalLvl2.png";

    var nodrizaSprite = [];
    nodrizaSprite[0] = new Image();
    nodrizaSprite[0].src = "SinDisparos/NubeNodriza.png";

    var bunkerSprite = [];
    bunkerSprite[0] = new Image();
    bunkerSprite[0].src = "SinDisparos/Paraguas.png";

    var gameOverSprite = new Image();
    gameOverSprite.src = "General/GameOver.png";

    var fondo = new Image();
    fondo.src = "SinDisparos/Fondo2.jpg";

    var powerUpVidaSprite = new Image();
    powerUpVidaSprite.src = "SinDisparos/powerUpVida.png";
    var powerUpParSprite = new Image();
    powerUpParSprite.src = "SinDisparos/powerUpParaguas.png";
    var powerUpExpSprite = new Image();
    powerUpExpSprite.src = "SinDisparos/powerUpExp.png";

    var explosionSprite = [];
    explosionSprite[0] = new Image;
    explosionSprite[0].src = "SinDisparos/Exp0.png";
    explosionSprite[1] = new Image;
    explosionSprite[1].src = "SinDisparos/Exp1.png";
    explosionSprite[2] = new Image;
    explosionSprite[2].src = "SinDisparos/Exp2.png";
    explosionSprite[3] = new Image;
    explosionSprite[3].src = "SinDisparos/Exp3.png";
    explosionSprite[4] = new Image;
    explosionSprite[4].src = "SinDisparos/Exp4.png";
    explosionSprite[5] = new Image;
    explosionSprite[5].src = "SinDisparos/Exp5.png";
    explosionSprite[6] = new Image;
    explosionSprite[6].src = "SinDisparos/Exp6.png";
    explosionSprite[7] = new Image;
    explosionSprite[7].src = "SinDisparos/Exp7.png";
    explosionSprite[8] = new Image;
    explosionSprite[8].src = "SinDisparos/Exp8.png";
    explosionSprite[9] = new Image;
    explosionSprite[9].src = "SinDisparos/Exp9.png";
    var maxIndiceExp = 9;

    //VARIABLE PARA CONTROLAR EL MENU DE PAUSA
    var pausa = false;
    var pausaSeleccion;

    //VARIABLE CAMBIO DE COLOR MARCIANOS
    var cambiarColor = 0;

    //VARIABLES GLOBALES
    var distanciaX;
    var distanciaY;
    var puntos = 0;

    //VARIABLES NAVE
    var ship;
    var velocidadNaveX = 9;
    var velocidadNaveY = 9;
    var vidasNave = 3;
    var immortal = false;
    var contInmune = 0;
    var intInmortal;
    var teclaA;
    var teclaD;

    //VARIABLES MARCIANOS
    var arrMar = [];
    var totalMarcianos = 10;
    var minMar = 500;
    var maxMar = 700;
    var minVelX = -4;
    var maxVelX = 4;
    var minVelY = 5;
    var maxVelY = 6;
    var exit;

    //VARIABLES PORTAL
    var nextLvl;
    var goLevel3 = false;
    var portalOpen = false;
    var moveShipX;
    var moveShipY;
    var absorb = true;
    var cutscene = false;

    //VARIABLES BÚNKERS
    var barrera;
    var ammo = 3;

    //VARIABLES POWER UPS
    var powerUpVida;
    var powerUpParaguas;
    var powerUpExp;
    var radioExp = naveSprite[0].width;
    var KBOOM = false;
    var indiceExp = [];
    var expAux = [];

    //FUNCION CAMBIO DE COLOR MARCIANOS
    function color() {
        if (cambiarColor === 0) {
            indiceMarSprite = 1;
        } else {
            indiceMarSprite = 0;
        }
        if (cambiarColor === 1) {
            cambiarColor = 0;
        } else {
            cambiarColor = 1;
        }
    }

    function pintarPausa(pausaSeleccion) {
        switch (pausaSeleccion) {
            case 1:
                contexto.drawImage(pausaSprite[1], 0, 0, pausaSprite[0].width, pausaSprite[0].height);
                break;
            case 2:
                contexto.drawImage(pausaSprite[0], 0, 0, pausaSprite[1].width, pausaSprite[1].height);
                break;
        }
        ;
    }

    //RETARDO PARA CARGAR LAS IMÁGENES
    gameOverSprite.onload = function () {

        //INICIALIZADOR NAVE
        ship = new nave(canvas.width / 2, canvas.height * 0.95, velocidadNaveX, velocidadNaveY, vidasNave, false);

        //INICIALIZADOR MATRIZ MARCIANOS;
        for (var i = 0; i < totalMarcianos; i++) {
            arrMar[i] = new marciano(0, 0, 0, 0, 0); //arbitrario, luego les dare parametros adecuados
        }
        ;

        //INICIALIZADOR BÚNKERS
        barrera = new bunker(0, 0, 0);//arbitraro, se sobreescribiran al pulsar la tecla de desplegar barrera

        //INICIALIZAR INDICES EXPLOSIONES
        for (var i = 0; i < totalMarcianos; i++) {
            indiceExp[i] = 0;
        }
        for (var i = 0; i < totalMarcianos; i++) {
            expAux[i] = false;
        }
        //INICIALIZAR POWER UPS
        powerUpVida = new powerUp(5);
        powerUpParaguas = new powerUp(5);
        powerUpExp = new powerUp(5);

        //INICIALIZARADOR PORTAL
        nextLvl = new portal(canvas.width / 2, (0 - portalSprite[0].height - 150), 0, 0); //preparo la posicion desde la cual caera el portal, pero su velocidad sera nula hasta que se cumpla la condicion que lo haga aparecer

        //FUNCIÓN PARA EL MOVIMIENTO
        function controles(e) {

            //EJE X 
            if ((e.key === 'd' || e.key === 'D') && ship.getPosX() < canvas.width - naveSprite[0].width / 2 - 5 && !pausa) {
                ship.setPosX(ship.getPosX() + ship.getVelX());
                teclaA = false;
                teclaD = true;
                if (!immortal)
                    indiceNaveSprite = 0;
            }
            ;
            if ((e.key === 'a' || e.key === 'A') && ship.getPosX() > 0 + naveSprite[0].width / 2 + 5 && !pausa) {
                ship.setPosX(ship.getPosX() - ship.getVelX());
                teclaA = true;
                teclaD = false;
                if (!immortal)
                    indiceNaveSprite = 1;
            }
            ;

            //EJE Y
            if ((e.key === 's' || e.key === 'S') && ship.getPosY() < canvas.height - naveSprite[0].height / 2 - 5 && !pausa) {
                ship.setPosY(ship.getPosY() + ship.getVelY());
            }
            ;
            if ((e.key === 'w' || e.key === 'W') && ship.getPosY() > 0 + naveSprite[0].height / 2 + 5 && !pausa) {
                ship.setPosY(ship.getPosY() - ship.getVelY());
            }
            ;
            if ((e.key === ' ') && barrera.getVidas() === 0 && ammo > 0 && !pausa) {
                if (!immortal) {
                    barrera.setVidas(1);
                    ammo--;
                    umbrellaSnd.currentTime = 0;
                    umbrellaSnd.play();
                }
            }
            ;
            //ONDA EXPLOSIVA TEST
            if ((e.key === 'R' || e.key === 'r') && ship.getPosY() > 0 + naveSprite[0].height / 2 + 5 && !pausa) {
                KBOOM = true;
                finalExplosionSnd.currentTime = 0;
                finalExplosionSnd.play();
            }
            ;

            //PAUSA
            if ((e.key === 'p' || e.key === 'P') && !(ship.getVidas() < 1) && !pausa) {
                pausa = true;
                window.clearTimeout(crearMar);
                window.clearTimeout(pu);
                pausaSeleccion = 1;
                musica.pause();
            }
            ;
            //CONTROLAR MENÚ PAUSA
            if ((e.key === 's' || e.key === 'S') && pausa) {
                pausaSeleccion--;
                if (pausaSeleccion < 1) {
                    pausaSeleccion = 2;
                }
                ;
                pintarPausa(pausaSeleccion);
            }
            ;
            if ((e.key === 'w' || e.key === 'W') && pausa) {
                pausaSeleccion++;
                if (pausaSeleccion > 2) {
                    pausaSeleccion = 1;
                }
                ;
                pintarPausa(pausaSeleccion);
            }
            ;
            if (e.keyCode === 13 && pausa) {
                switch (pausaSeleccion) {
                    case 1:
                        pausa = false;
                        musica.play();
                        crearMar = window.setTimeout(partida.marCaen, random(minMar, maxMar));
                        pu = window.setTimeout(partida.powerUp, random(4000, 10000));
                        partida.jugar();
                        break;
                    case 2:
                        window.removeEventListener("keydown", controles, false);
                        menuPrincipal();
                        break;
                }
                ;
            }
            ;
            //GAME OVER o SALIR
            if (e.keyCode === 13 && ship.getVidas() < 1) {
                window.removeEventListener("keydown", controles, false);
                window.clearTimeout(crearMar);
                window.clearTimeout(pu);
                musica.pause();
                menuPrincipal();
            }
            ;
        }
        ;
        function partida() {

            //CONTROLAR ANIMACION EXPLOSION
            this.expAnim = function () {
                for (var i = 0; i < totalMarcianos; i++) {
                    if (expAux[i]) {
                        if (indiceExp[i] < maxIndiceExp) {
                            indiceExp[i]++;
                        } else {
                            indiceExp[i] = 0;
                            expAux[i] = false;
                        }
                    }
                }
            }
            ;

            //FUNCION PARA QUE CAIGAN LOS MARCIANOS
            this.marCaen = function () {
                exit = false;
                for (var i = 0; i < totalMarcianos; i++) {
                    if (arrMar[i].getVidas() === 0 && !exit) {
                        arrMar[i].setVidas(1);
                        arrMar[i].setPosX(random((0 + marcianoSprite[0][0].width), (canvas.width - marcianoSprite[0][0].width)));
                        arrMar[i].setPosY(0 - marcianoSprite[0][0].height);
                        arrMar[i].setVelX(random(minVelX, maxVelX));
                        arrMar[i].setVelY(random(minVelY, maxVelY));
                        exit = true;
                    }
                }
                crearMar = window.setTimeout(partida.marCaen, random(minMar, maxMar));
            };

            //FUNCIÓN PARA CREAR POWER UP 
            this.powerUp = function () {
                var aleatorio = random(1, 3);
                switch (aleatorio) {
                    case 1:
                        if (powerUpVida.getVidas() < 1) {
                            powerUpVida.setPosX(random(powerUpVidaSprite.width, canvas.width - powerUpVidaSprite.width));
                            powerUpVida.setPosY(0 - powerUpVidaSprite.height);
                            powerUpVida.setVidas(1);
                        } else {
                            partida.powerUp();
                        }
                        ;
                        break;
                    case 2:
                        if (powerUpParaguas.getVidas() < 1) {
                            powerUpParaguas.setPosX(random(powerUpParSprite.width, canvas.width - powerUpParSprite.width));
                            powerUpParaguas.setPosY(0 - powerUpParSprite.height);
                            powerUpParaguas.setVidas(1);
                        } else {
                            partida.powerUp();
                        }
                        ;
                        break;
                    case 3:
                        if (powerUpExp.getVidas() < 1) {
                            powerUpExp.setPosX(random(powerUpExpSprite.width, canvas.width - powerUpExpSprite.width));
                            powerUpExp.setPosY(0 - powerUpExpSprite.height);
                            powerUpExp.setVidas(1);
                        } else {
                            partida.powerUp();
                        }
                        ;
                        break;
                }
                ;
                pu = window.setTimeout(partida.powerUp, random(5000, 10000));
            };

            //FUNCIÓN PARA CALCULAR COLISIONES 
            this.colisiones = function () {

                //COLISIÓN MARCIANO-PARED
                for (var i = 0; i < totalMarcianos; i++) {
                    if ((arrMar[i].getPosX() > canvas.width - marcianoSprite[0][0].width / 2 || arrMar[i].getPosX() < 0 + marcianoSprite[0][0].width / 2) && arrMar[i].getVidas() > 0) {
                        arrMar[i].setVelX(arrMar[i].getVelX() * (-1));
                        color();
                    }
                    ;
                }
                ;

                //COLISIÓN MARCIANO-SUELO
                for (var i = 0; i < totalMarcianos; i++) {
                    if (arrMar[i].getPosY() > canvas.height + marcianoSprite[0][0].height && arrMar[i].getVidas() > 0) {
                        arrMar[i].setVidas(0);
                        arrMar[i].setVelX(0);
                        puntos = puntos + 10;
                        if (puntos % 100 === 0 && maxMar > 400) { //es decir, cada 5 marcianos que esquivemos...
                            maxMar = maxMar - 100;
                            if (maxVelX < 9)
                                maxVelX++;
                        }

                        if (puntos % 150 === 0 && minMar > 200) { //es decir, cada 10 marcianos que esquivemos...
                            minMar = minMar - 100;
                            if (maxVelY < 9)
                                maxVelY++;
                        }
                    }
                    ;
                }
                ;

                //COLISIÓN MARCIANO-BÚNKER
                for (var i = 0; i < totalMarcianos; i++) {
                    distanciaX = Math.abs(barrera.getPosX() - arrMar[i].getPosX());
                    distanciaY = Math.abs(barrera.getPosY() - arrMar[i].getPosY());
                    if (distanciaX < marcianoSprite[0][0].width / 2 + bunkerSprite[0].width / 2 && distanciaY < marcianoSprite[0][0].height / 2 + bunkerSprite[0].height / 2 && arrMar[i].getVidas() > 0 && barrera.getVidas() === 1 && !cutscene) {
                        barrera.setVidas(barrera.getVidas() - 1);
                        arrMar[i].setVidas(arrMar[i].getVidas() - 1);
                        dañoSnd.currentTime = 0;
                        dañoSnd.play();
                    }
                    ;
                }
                ;

                //COLISIÓN BÚNKER - TECHO
                if (barrera.getPosY() - bunkerSprite[0].height / 2 < (0) && barrera.getVidas() > 0) {
                    ship.setPosY(ship.getPosY() + ship.getVelY());

                }
                ;

                //COLISIÓN MARCIANO-NAVE
                for (var i = 0; i < totalMarcianos; i++) {
                    distanciaX = Math.abs(ship.getPosX() - arrMar[i].getPosX());
                    distanciaY = Math.abs(ship.getPosY() - arrMar[i].getPosY());
                    if (distanciaX < marcianoSprite[0][0].width / 2 + naveSprite[0].width / 2 && distanciaY < marcianoSprite[0][0].height / 2 + naveSprite[0].height / 2 && arrMar[i].getVidas() > 0 && ship.getVidas() > 0 && !immortal) {
                        arrMar[i].setVidas(arrMar[i].getVidas() - 1);
                        ship.setVidas(ship.getVidas() - 1);
                        ship.setPosX(canvas.width / 2);
                        ship.setPosY(canvas.height * 0.95);
                        dañoSnd.currentTime = 0;
                        dañoSnd.play();
                        immortal = true;
                        intInmortal = window.setInterval(partida.inmune, 200);
                    }
                    ;
                }
                ;

                //COLISION NAVE - POWER UP VIDA
                distanciaX = Math.abs(ship.getPosX() - powerUpVida.getPosX());
                distanciaY = Math.abs(ship.getPosY() - powerUpVida.getPosY());
                if (distanciaX < powerUpVidaSprite.width / 2 + naveSprite[0].width / 2 && distanciaY < powerUpVidaSprite.height / 2 + naveSprite[0].height / 2 && powerUpVida.getVidas() > 0 && ship.getVidas() > 0 && !cutscene) {
                    ship.setVidas(ship.getVidas() + 1);
                    powerUpVida.setVidas(0);
                    powerUpVidaSnd.currentTime = 0;
                    powerUpVidaSnd.play();
                }
                ;

                //COLISION NAVE - POWER UP PARAGUAS
                distanciaX = Math.abs(ship.getPosX() - powerUpParaguas.getPosX());
                distanciaY = Math.abs(ship.getPosY() - powerUpParaguas.getPosY());
                if (distanciaX < powerUpParSprite.width / 2 + naveSprite[0].width / 2 && distanciaY < powerUpParSprite.height / 2 + naveSprite[0].height / 2 && powerUpParaguas.getVidas() > 0 && ship.getVidas() > 0 && !cutscene) {
                    ammo = 3;
                    powerUpParaguas.setVidas(0);
                    powerUpParSnd.currentTime = 0;
                    powerUpParSnd.play();
                }
                ;

                //COLISION NAVE - POWER UP EXPLOSION
                distanciaX = Math.abs(ship.getPosX() - powerUpExp.getPosX());
                distanciaY = Math.abs(ship.getPosY() - powerUpExp.getPosY());
                if (distanciaX < powerUpExpSprite.width / 2 + naveSprite[0].width / 2 && distanciaY < powerUpExpSprite.height / 2 + naveSprite[0].height / 2 && powerUpExp.getVidas() > 0 && ship.getVidas() > 0 && !cutscene) {
                    KBOOM = true;
                    powerUpExp.setVidas(0);
                    finalExplosionSnd.currentTime = 0;
                    finalExplosionSnd.play();
                }
                ;

                //COLISION PARAGUAS - POWER UP PARAGUAS
                distanciaX = Math.abs(barrera.getPosX() - powerUpParaguas.getPosX());
                distanciaY = Math.abs(barrera.getPosY() - powerUpParaguas.getPosY());
                if (distanciaX < powerUpParSprite.width / 2 + bunkerSprite[0].width / 2 && distanciaY < powerUpParSprite.height / 2 + bunkerSprite[0].height / 2 && powerUpParaguas.getVidas() > 0 && ship.getVidas() > 0 && barrera.getVidas() === 1 && !cutscene) {
                    ammo = 3;
                    powerUpParaguas.setVidas(0);
                    powerUpParSnd.currentTime = 0;
                    powerUpParSnd.play();
                }
                ;

                //COLISION PARAGUAS - POWER UP VIDAS
                distanciaX = Math.abs(barrera.getPosX() - powerUpVida.getPosX());
                distanciaY = Math.abs(barrera.getPosY() - powerUpVida.getPosY());
                if (distanciaX < powerUpVidaSprite.width / 2 + bunkerSprite[0].width / 2 && distanciaY < powerUpVidaSprite.height / 2 + bunkerSprite[0].height / 2 && powerUpVida.getVidas() > 0 && ship.getVidas() > 0 && barrera.getVidas() === 1 && !cutscene) {
                    ship.setVidas(ship.getVidas() + 1);
                    powerUpVida.setVidas(0);
                    powerUpVidaSnd.currentTime = 0;
                    powerUpVidaSnd.play();
                }
                ;

                //COLISION PARAGUAS - POWER UP EXPLOSION
                distanciaX = Math.abs(barrera.getPosX() - powerUpExp.getPosX());
                distanciaY = Math.abs(barrera.getPosY() - powerUpExp.getPosY());
                if (distanciaX < powerUpExpSprite.width / 2 + bunkerSprite[0].width / 2 && distanciaY < powerUpExpSprite.height / 2 + bunkerSprite[0].height / 2 && powerUpExp.getVidas() > 0 && ship.getVidas() > 0 && barrera.getVidas() === 1 && !cutscene) {
                    KBOOM = true;
                    powerUpExp.setVidas(0);
                }
                ;

                //COLISIÓN POWER UPS SUELO
                if (canvas.height + powerUpVidaSprite.height / 2 < powerUpVida.getPosY() && powerUpVida.getVidas() > 0) {
                    powerUpVida.setVidas(0);
                }
                ;
                if (canvas.height + powerUpParSprite.height / 2 < powerUpParaguas.getPosY() && powerUpParaguas.getVidas() > 0) {
                    powerUpParaguas.setVidas(0);
                }
                ;
                if (canvas.height + powerUpExpSprite.height / 2 < powerUpExp.getPosY() && powerUpExp.getVidas() > 0) {
                    powerUpExp.setVidas(0);
                }
                ;

                //COLISION EXPLOSION MARCIANOS
                for (var i = 0; i < totalMarcianos; i++) {
                    distanciaX = Math.abs(ship.getPosX() - arrMar[i].getPosX());
                    distanciaY = Math.abs(ship.getPosY() - arrMar[i].getPosY());
                    if (distanciaX < radioExp && distanciaY < radioExp && arrMar[i].getVidas() > 0 && ship.getVidas() > 0 && KBOOM && arrMar[i].getPosY() > 0 + marcianoSprite[0][0].height / 2) {
                        arrMar[i].setVidas(arrMar[i].getVidas() - 1);
                        arrMar[i].setVelX(0);
                        arrMar[i].setVelY(0);
                        expAux[i] = true;
                        expMarSndArr[i].currentTime = 0;
                        expMarSndArr[i].play();
                    }
                }

                //COLISION NAVE - PORTAL 
                distanciaX = Math.abs(ship.getPosX() - nextLvl.getPosX());
                distanciaY = Math.abs(ship.getPosY() - nextLvl.getPosY());
                if (distanciaX < portalSprite[0].width / 2 + naveSprite[0].width / 2 && distanciaY < portalSprite[0].height / 2 + naveSprite[0].height / 2 && cutscene) {
                    window.removeEventListener("keydown", controles, false);
                    window.clearTimeout(crearMar);
                    window.clearTimeout(pu);
                    goLevel3 = true;
                }


                //COLISION BÚNKER - PORTAL
                distanciaX = Math.abs(barrera.getPosX() - nextLvl.getPosX());
                distanciaY = Math.abs(barrera.getPosY() - nextLvl.getPosY());
                if (distanciaX < portalSprite[0].width / 2 + bunkerSprite[0].width / 2 && distanciaY < portalSprite[0].height / 2 + bunkerSprite[0].height / 2 && barrera.getVidas() === 1) {
                    window.removeEventListener("keydown", controles, false);
                    window.clearTimeout(crearMar);
                    window.clearTimeout(pu);
                    goLevel3 = true;
                }
                ;

            };

            //FUNCION PARA CONTROLAR LA INMUNIDAD
            this.inmune = function () {
                if (immortal === true) {
                    if (indiceNaveSprite !== 2) {
                        indiceNaveSprite = 2;
                    } else {
                        if (teclaD === true) {
                            indiceNaveSprite = 0;
                        } else {
                            indiceNaveSprite = 1;
                        }
                    }
                    contInmune++;
                    if (contInmune >= 10) {
                        immortal = false;
                        contInmune = 0;
                        window.clearInterval(intInmortal);
                    }
                }
            };

            //FUNCIÓN PARA MOVER LOS OBJETOS
            this.movimiento = function () {

                //MOVIMIENTO BUNKERS
                barrera.setPosY(ship.getPosY() - 50);
                barrera.setPosX(ship.getPosX());

                //MOVIMIENTO MARCIANOS
                for (var i = 0; i < totalMarcianos; i++) {
                    if (arrMar[i].getVidas() > 0) {
                        arrMar[i].setPosY(arrMar[i].getPosY() + arrMar[i].getVelY());
                        arrMar[i].setPosX(arrMar[i].getPosX() + arrMar[i].getVelX());
                    }
                }
                ;

                //MOVIMIENTO POWER UP VIDA
                powerUpVida.setPosY(powerUpVida.getPosY() + powerUpVida.getVelY());

                //MOVIMIENTO POWER UP PARAGUAS
                powerUpParaguas.setPosY(powerUpParaguas.getPosY() + powerUpParaguas.getVelY());

                //MOVIMIENTO POWER UP EXPLOSION
                powerUpExp.setPosY(powerUpExp.getPosY() + powerUpExp.getVelY());

                //APARICION Y MOVIMIENTO DEL PORTAL               
                if (puntos > 290) {
                    if (!portalOpen) {
                        nextLvl.setVelX(0);
                        nextLvl.setVelY(1);
                        portalOpen = true;
                    }
                    //MOVIMIENTO DEL PORTAL
                    nextLvl.setPosX(nextLvl.getPosX() + nextLvl.getVelX());
                    nextLvl.setPosY(nextLvl.getPosY() + nextLvl.getVelY());

                    if (nextLvl.getPosY() >= (portalSprite[0].height / 2) && absorb) { //cuando baje hasta la altura Y = 100
                        window.removeEventListener("keydown", controles, false);
                        window.clearTimeout(crearMar);
                        window.clearTimeout(pu);
                        nextLvl.setVelY(0);
                        moveShipX = (((nextLvl.getPosX()) - (ship.getPosX())) / 150); //distancia de la posicion X del FB y la pos X a la que quiero que vaya
                        moveShipY = (((nextLvl.getPosY()) - (ship.getPosY())) / 150); //distancia de la posicion Y del FB y la pos Y a la que quiero que vaya                
                        ship.setVelX(moveShipX);
                        ship.setVelY(moveShipY);
                        absorb = false;
                        cutscene = true;
                    }
                }
                //MOVIMIENTO DE LA NACE DURANTE LA "CINEMATICA" 
                if (!absorb) {
                    ship.setPosY(ship.getPosY() + moveShipY);
                    ship.setPosX(ship.getPosX() + moveShipX);
                }
            };

            //FUNCIÓN PARA DIBUJAR LOS OBJETOS
            this.dibujar = function () {

                // DIBUJAR FONDO
                contexto.drawImage(fondo, 0, 0, canvas.width, canvas.height);

                //DIBUJAR PORTAL
                if (puntos > 290) {
                    contexto.drawImage(portalSprite[0], nextLvl.getPosX() - portalSprite[0].width / 2, nextLvl.getPosY() - portalSprite[0].height / 2, portalSprite[0].width, portalSprite[0].height);
                }

                //DIBUJAR BÚNKERS
                if (barrera.getVidas() === 1 && ship.getVidas() > 0) {
                    contexto.drawImage(bunkerSprite[0], barrera.getPosX() - bunkerSprite[0].width / 2, barrera.getPosY() - bunkerSprite[0].height / 2, bunkerSprite[0].width, bunkerSprite[0].height);
                }
                ;

                //DIBUJAR MARCIANOS
                for (var i = 0; i < totalMarcianos; i++) {
                    if (arrMar[i].getVidas() > 0 && i % 2 === 0) {
                        contexto.drawImage(marcianoSprite[0][indiceMarSprite], arrMar[i].getPosX() - marcianoSprite[0][0].width / 2, arrMar[i].getPosY() - marcianoSprite[0][0].height / 2, marcianoSprite[0][0].width, marcianoSprite[0][0].height);
                    }
                    ;
                    if (arrMar[i].getVidas() > 0 && i % 2 !== 0) {
                        contexto.drawImage(marcianoSprite[1][indiceMarSprite], arrMar[i].getPosX() - marcianoSprite[0][0].width / 2, arrMar[i].getPosY() - marcianoSprite[0][0].height / 2, marcianoSprite[0][0].width, marcianoSprite[0][0].height);
                    }
                    ;
                }
                ;

                //DIBUJAR NAVE
                if (ship.getVidas() > 0) {
                    contexto.drawImage(naveSprite[indiceNaveSprite], ship.getPosX() - naveSprite[0].width / 2, ship.getPosY() - naveSprite[0].height / 2, naveSprite[0].width, naveSprite[0].height);
                }
                ;

                //DIBUJAR POWER UP VIDA
                if (powerUpVida.getVidas() > 0) {
                    contexto.drawImage(powerUpVidaSprite, powerUpVida.getPosX() - powerUpVidaSprite.width / 2, powerUpVida.getPosY() - powerUpVidaSprite.height / 2, powerUpVidaSprite.width, powerUpVidaSprite.height);
                }
                ;

                //DIBUJAR POWER UP PARAGUAS
                if (powerUpParaguas.getVidas() > 0) {
                    contexto.drawImage(powerUpParSprite, powerUpParaguas.getPosX() - powerUpParSprite.width / 2, powerUpParaguas.getPosY() - powerUpParSprite.height / 2, powerUpParSprite.width, powerUpParSprite.height);
                }
                ;

                //DIBUJAR POWER UP EXPLOSION
                if (powerUpExp.getVidas() > 0) {
                    contexto.drawImage(powerUpExpSprite, powerUpExp.getPosX() - powerUpExpSprite.width / 2, powerUpExp.getPosY() - powerUpExpSprite.height / 2, powerUpExpSprite.width, powerUpExpSprite.height);
                }
                ;

                //DIBUJAR VIDAS
                
                 contexto.drawImage(naveSprite[1], canvas.width - 100, 20, 35, 35);
                 contexto.textAlign = "left";
                 contexto.fillStyle = "black";
                 contexto.font = "28px Arial";
                 contexto.fillText("x" + ship.getVidas(), canvas.width - 50, 45);
                 
                 //DIBUJAR RENDIMIENTO (PRUEBAS)
                 /*
                 contexto.fillStyle = "black";
                 contexto.font = "16px Consolas";
                 contexto.fillText("maxMar " + maxMar, canvas.width - 150, 96);
                 contexto.fillText("minMar: " + minMar, canvas.width - 150, 160);
                 contexto.fillText("maxVelY " + maxVelY, canvas.width - 150, 300);
                 contexto.fillText("maxVelX: " + maxVelX, canvas.width - 150, 360);
                 contexto.fillText("powerUpVida: " + powerUpVida.getVidas(), canvas.width - 200, 400);
                 contexto.fillText("powerUpParaguas: " + powerUpParaguas.getVidas(), canvas.width - 200, 460);
                 
                 
                 //DIBUJAR PUNTUACIÓN
                 contexto.textAlign = "left";
                 contexto.fillStyle = "black";
                 contexto.font = "16px Arial";
                 contexto.fillText("PUNTUACION: " + puntos, 32, 32);
                 */

                //DIBUJAR BARRERAS RESTANTES
                contexto.textAlign = "left";
                contexto.fillStyle = "black";
                contexto.font = "16px Arial";
                contexto.fillText("BARRERAS RESTANTES: ", 32, 32);
                if (ammo === 3) {
                    contexto.drawImage(bunkerSprite[0], 32, 64, 32, 32);
                    contexto.drawImage(bunkerSprite[0], 96, 64, 32, 32);
                    contexto.drawImage(bunkerSprite[0], 160, 64, 32, 32);

                }
                if (ammo === 2) {
                    contexto.drawImage(bunkerSprite[0], 32, 64, 32, 32);
                    contexto.drawImage(bunkerSprite[0], 96, 64, 32, 32);

                }
                if (ammo === 1) {
                    contexto.drawImage(bunkerSprite[0], 32, 64, 32, 32);
                }
                ;

                //DIBUJAR LA EXPLOSION DEL POWER UP EXPLOSION               
                if (radioExp < (fondo.height * 1.7) && KBOOM) {
                    contexto.fillStyle = "rgba(255, 165, 0, 0.3)";
                    contexto.beginPath();
                    contexto.arc(ship.getPosX(), ship.getPosY(), radioExp, 0, 2 * Math.PI, false);
                    contexto.fill();
                    contexto.closePath();
                    radioExp = radioExp + 10;
                } else {
                    radioExp = naveSprite[0].width;
                    KBOOM = false;
                }

                //DIBUJAR LA EXPLOSION ONDA - MARCIANO      
                for (var i = 0; i < totalMarcianos; i++) {
                    if (expAux[i]) {
                        contexto.drawImage(explosionSprite[indiceExp[i]], arrMar[i].getPosX() - marcianoSprite[0][0].width / 2, arrMar[i].getPosY() - marcianoSprite[0][0].height / 2, marcianoSprite[0][0].width, marcianoSprite[0][0].height);
                    }
                }
            };

            //FUNCIÓN PARA MORIR
            this.muerte = function () {

                //PINTAR EL FONDO ROJO CON OPACIDAD 0.2
                contexto.globalAlpha = 0.2;
                contexto.fillStyle = "red";
                contexto.fillRect(0, 0, canvas.width, canvas.height);

                //PINTAMOS "GAME OVER" CON OPACIDAD 1
                contexto.globalAlpha = 1;
                contexto.drawImage(gameOverSprite, 0, 0, gameOverSprite.width, gameOverSprite.height);

                gameOverSnd.currentTime = 0;
                gameOverSnd.play();

                //LIMPIAMOS LOS INTERVALOS
                window.clearTimeout(crearMar);
                window.clearTimeout(pu);
            };

            //FUNCIÓN PARA EJECUTAR UN FRAME
            this.jugar = function () {

                //CUBRIR EL FRAME ANTERIOR DE NEGRO
                contexto.fillStyle = "black";
                contexto.fillRect(0, 0, canvas.width, canvas.height);

                partida.colisiones();
                partida.movimiento();
                partida.dibujar();
                localStorage.setItem("puntuacion", puntos);
                localStorage.setItem("vidas", ship.getVidas());

                //COMPROBAR SI NOS QUEDAN VIDAS
                if (ship.getVidas() < 1) {
                    partida.muerte();
                } else if (goLevel3) {
                    musica.pause();
                    sinDisparos3();
                } else {
                    if (!pausa) {
                        requestAnimationFrame(partida.jugar);
                    } else {
                        contexto.drawImage(pausaSprite[1], 0, 0, pausaSprite[1].width, pausaSprite[1].height);
                    }
                }
                ;
            };
        }
        ;

        window.addEventListener("keydown", controles, false);
        var partida = new partida();
        partida.jugar();
        var crearMar = window.setTimeout(partida.marCaen, random(minMar, maxMar));
        var pu = window.setTimeout(partida.powerUp, random(5000, 10000));
        window.setInterval(partida.expAnim, 75);
    }
    ;
}
;

//fin 2
