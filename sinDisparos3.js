function sinDisparos3() {

    //CREAR Y CARGAR EL CONTEXTO
    var canvas = document.getElementById("lienzo");
    var contexto = canvas.getContext("2d");

    //CREAR Y CARGAR LA MÚSICA
    var musica = document.getElementById("musicaFBSD");
    musica.volume = 0.1;
    musica.currentTime = 0;
    musica.play();

    var reboteFBParedSnd = document.getElementById("reboteFBSDP");
    var reboteFBTechoSnd = document.getElementById("reboteFBSDT");

    var airRecoverSnd = document.getElementById("airRecover");

    var enfadoFBSD = document.getElementById("enfadoFBSD");

    var gameOverSnd = document.getElementById("gameOver");
    var winSnd = document.getElementById("win");
    var umbrellaSnd = document.getElementById("umbrella");
    var dañoSnd = document.getElementById("daño");
    var powerUpVidaSnd = document.getElementById("powerUpVida");
    var powerUpParSnd = document.getElementById("powerUpBunker");

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

    var finalBossSprite = [];
    var indiceFBSprite = 0;
    finalBossSprite[0] = new Image();
    finalBossSprite[0].src = "SinDisparos/finalBoss.png";
    finalBossSprite[1] = new Image();
    finalBossSprite[1].src = "SinDisparos/finalBoss2.png";
    finalBossSprite[2] = new Image();
    finalBossSprite[2].src = "SinDisparos/finalBoss3.png";

    var pausaSprite = [];
    pausaSprite[0] = new Image();
    pausaSprite[0].src = "Menús/MenuPausaRegresarAlMenuPrincipal.png";
    pausaSprite[1] = new Image();
    pausaSprite[1].src = "Menús/MenuPausaContinuar.png";

    var nodrizaSprite = [];
    nodrizaSprite[0] = new Image();
    nodrizaSprite[0].src = "SinDisparos/NubeNodriza.png";

    var bunkerSprite = [];
    bunkerSprite[0] = new Image();
    bunkerSprite[0].src = "SinDisparos/SolMasShieldDer.png";
    bunkerSprite[1] = new Image();
    bunkerSprite[1].src = "SinDisparos/SolMasShieldIzq.png";
    var indiceBunker = 0;

    var gameOverSprite = new Image();
    gameOverSprite.src = "General/GameOver.png";

    var winSprite = new Image();
    winSprite.src = "General/Win.png";

    var fondo = new Image();
    fondo.src = "SinDisparos/Fondo3.jpg";

    var powerUpVidaSprite = new Image();
    powerUpVidaSprite.src = "SinDisparos/powerUpVida.png";
    var powerUpParSprite = new Image();
    powerUpParSprite.src = "SinDisparos/powerUpParaguas.png";

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
    var inicioX;
    var inicioY;
    var exit;

    //VARIBLES FINAL BOSS
    var finalBoss = new marciano(canvas.width / 2, canvas.height / 2 - 200, 4, 4, 3); //(x, y, vx, vy, vdas)
    var angryUp = false;
    var moveShipX;
    var moveShipY;
    var moveFBX;
    var moveFBY;
    var Estado = 1;
    var go = true;
    var playAirRecSnd = false;

    //VARIABLES BÚNKERS
    var barrera;
    var ammo = 1;

    //VARIABLES POWER UPS
    var powerUpVida;
    var powerUpParaguas;

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
        //
        //INICIALIZAR POWER UPS
        powerUpVida = new powerUp(5);
        powerUpParaguas = new powerUp(5);

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
                        pu = window.setTimeout(partida.powerUp, random(2000, 5000));
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
            //GAME OVER, VICTORIA o SALIR
            if (e.keyCode === 13 && ((ship.getVidas() < 1) || (finalBoss.getVidas() < 1))) {
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

            //FUNCION PARA QUE CAIGAN LOS MARCIANOS
            this.marCaen = function () {
                switch (Estado) {
                    case 2:
                        inicioX = random((0 + marcianoSprite[0][0].width), (canvas.width - marcianoSprite[0][0].width));
                        inicioY = 0 - marcianoSprite[0][0].height;
                        break;

                    case 3:
                        inicioX = finalBoss.getPosX();
                        inicioY = finalBoss.getPosY();
                        break;
                }
                if (Estado !== 1) {
                    exit = false;
                    for (var i = 0; i < totalMarcianos; i++) {
                        if (arrMar[i].getVidas() === 0 && !exit) {
                            arrMar[i].setVidas(1);
                            arrMar[i].setPosX(inicioX);
                            arrMar[i].setPosY(inicioY);
                            arrMar[i].setVelX(random(minVelX, maxVelX));
                            arrMar[i].setVelY(random(minVelY, maxVelY));
                            exit = true;
                        }
                    }
                    crearMar = window.setTimeout(partida.marCaen, random(minMar, maxMar));
                }
            };

            //FUNCIÓN PARA CREAR POWER UP 
            this.powerUp = function () {
                var aleatorio = random(1, 2);
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
                }
                ;
                pu = window.setTimeout(partida.powerUp, random(2000, 5000));
            };

            //FUNCIÓN PARA CALCULAR COLISIONES 
            this.colisiones = function () {

                //COLISION FINAL BOSS PAREDES
                if ((finalBoss.getPosX() > canvas.width - finalBossSprite[0].width / 2 || finalBoss.getPosX() < 0 + finalBossSprite[0].width / 2) && finalBoss.getVidas() > 0) {
                    finalBoss.setVelX(finalBoss.getVelX() * (-1));
                    reboteFBParedSnd.currentTime = 0;
                    reboteFBParedSnd.play();
                }
                ;
                //COLISION FINAL BOSS SUELO Y TECHO
                if ((finalBoss.getPosY() > canvas.height - finalBossSprite[0].height / 2 || finalBoss.getPosY() < 0 + finalBossSprite[0].height / 2) && finalBoss.getVidas() > 0) {
                    finalBoss.setVelY(finalBoss.getVelY() * (-1));
                    reboteFBTechoSnd.currentTime = 0;
                    reboteFBTechoSnd.play();
                }

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
                    if (distanciaX < marcianoSprite[0][0].width / 2 + bunkerSprite[0].width / 2 && distanciaY < marcianoSprite[0][0].height / 2 + bunkerSprite[0].height / 2 && arrMar[i].getVidas() > 0 && barrera.getVidas() === 1) {
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

                //COLISION FINAL BOSS - BÚNKER
                distanciaX = Math.abs(barrera.getPosX() - finalBoss.getPosX());
                distanciaY = Math.abs(barrera.getPosY() - finalBoss.getPosY());
                if (distanciaX < finalBossSprite[0].width / 2 + bunkerSprite[0].width / 2 && distanciaY < finalBossSprite[0].height / 2 + bunkerSprite[0].height / 2 && finalBoss.getVidas() > 0 && barrera.getVidas() === 1) {
                    angryUp = true;
                    go = false;
                    playAirRecSnd = true;
                    barrera.setVidas(barrera.getVidas() - 1);
                    finalBoss.setVidas(finalBoss.getVidas() - 1);
                    dañoSnd.currentTime = 0;
                    dañoSnd.play();
                    moveFBX = (((canvas.width / 2) - finalBoss.getPosX()) / 120); //distancia de la posicion X del FB y la pos X a la que quiero que vaya
                    moveFBY = (((canvas.height / 2 - 200) - finalBoss.getPosY()) / 120); //distancia de la posicion Y del FB y la pos Y a la que quiero que vaya
                    moveShipX = (((canvas.width / 2) - ship.getPosX()) / 120); //distancia de la posicion X de la nave y la pos X a la que quiero que vaya
                    moveShipY = (((canvas.height * 0.95) - ship.getPosY()) / 120); //distancia de la posicion Y de la nave y la pos Y a la que quiero que vaya                               
                }

                //COLISION FINAL BOSS - NAVE
                distanciaX = Math.abs(ship.getPosX() - finalBoss.getPosX());
                distanciaY = Math.abs(ship.getPosY() - finalBoss.getPosY());
                if (distanciaX < finalBossSprite[0].width / 2 + naveSprite[0].width / 2 && distanciaY < finalBossSprite[0].height / 2 + naveSprite[0].height / 2 && finalBoss.getVidas() > 0 && ship.getVidas() > 0 && go && !immortal) {
                    ship.setVidas(ship.getVidas() - 1);
                    ship.setPosX(canvas.width / 2);
                    ship.setPosY(canvas.height * 0.95);
                    dañoSnd.currentTime = 0;
                    dañoSnd.play();
                    immortal = true;
                    intInmortal = window.setInterval(partida.inmune, 200);
                }

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
                if (distanciaX < powerUpVidaSprite.width / 2 + naveSprite[0].width / 2 && distanciaY < powerUpVidaSprite.height / 2 + naveSprite[0].height / 2 && powerUpVida.getVidas() > 0 && ship.getVidas() > 0 && go) {
                    ship.setVidas(ship.getVidas() + 1);
                    powerUpVida.setVidas(0);
                    powerUpVidaSnd.currentTime = 0;
                    powerUpVidaSnd.play();
                }
                ;

                //COLISION NAVE - POWER UP PARAGUAS
                distanciaX = Math.abs(ship.getPosX() - powerUpParaguas.getPosX());
                distanciaY = Math.abs(ship.getPosY() - powerUpParaguas.getPosY());
                if (distanciaX < powerUpParSprite.width / 2 + naveSprite[0].width / 2 && distanciaY < powerUpParSprite.height / 2 + naveSprite[0].height / 2 && powerUpParaguas.getVidas() > 0 && ship.getVidas() > 0 && go) {
                    if (ammo < 3)
                        ammo++;
                    powerUpParaguas.setVidas(0);
                    powerUpParSnd.currentTime = 0;
                    powerUpParSnd.play();
                }
                ;

                //COLISION PARAGUAS - POWER UP PARAGUAS
                distanciaX = Math.abs(barrera.getPosX() - powerUpParaguas.getPosX());
                distanciaY = Math.abs(barrera.getPosY() - powerUpParaguas.getPosY());
                if (distanciaX < powerUpParSprite.width / 2 + bunkerSprite[0].width / 2 && distanciaY < powerUpParSprite.height / 2 + bunkerSprite[0].height / 2 && powerUpParaguas.getVidas() > 0 && ship.getVidas() > 0 && barrera.getVidas() === 1) {
                    if (ammo < 3)
                        ammo++;
                    powerUpParaguas.setVidas(0);
                    powerUpParSnd.currentTime = 0;
                    powerUpParSnd.play();
                }
                ;

                //COLISION PARAGUAS - POWER UP VIDAS
                distanciaX = Math.abs(barrera.getPosX() - powerUpVida.getPosX());
                distanciaY = Math.abs(barrera.getPosY() - powerUpVida.getPosY());
                if (distanciaX < powerUpVidaSprite.width / 2 + bunkerSprite[0].width / 2 && distanciaY < powerUpVidaSprite.height / 2 + bunkerSprite[0].height / 2 && powerUpVida.getVidas() > 0 && ship.getVidas() > 0 && barrera.getVidas() === 1) {
                    ship.setVidas(ship.getVidas() + 1);
                    powerUpVida.setVidas(0);
                    powerUpVidaSnd.currentTime = 0;
                    powerUpVidaSnd.play();
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
            }
            ;
            //FUNCION (CINEMATICA) ENFADO FINAL BOSS
            this.enfadoFB = function () {
                if (angryUp) {
                    finalBoss.setVelX(moveFBX);
                    finalBoss.setVelY(moveFBY);

                    if (playAirRecSnd) {
                        airRecoverSnd.currentTime = 0;
                        airRecoverSnd.play();
                        playAirRecSnd = false;
                    }

                    if ((finalBoss.getPosX() > (canvas.width / 2) - 10) && (finalBoss.getPosX() < (canvas.width / 2) + 10) && (finalBoss.getPosY() < (canvas.height / 2) - 200) + 10 && (finalBoss.getPosY() > (canvas.height / 2) - 200) - 10 && (ship.getPosX() > (canvas.width / 2) - 5) && (ship.getPosX() < (canvas.width / 2) + 5) && (ship.getPosY() < (canvas.height * 0.95) + 5) && (ship.getPosY() > (canvas.height * 0.95) - 5)) {
                        enfadoFBSD.currentTime = 0;
                        enfadoFBSD.play();
                        finalBoss.setVelX(0);
                        finalBoss.setVelY(0);
                        //ship.setVelX(0);
                        //ship.setVelY(0);
                        angryUp = false;
                        window.setTimeout(partida.continue, 1500);
                    }
                    if (finalBoss.getVidas() > 0) {
                        window.removeEventListener("keydown", controles, false);
                    }
                    window.clearTimeout(crearMar);
                    window.clearTimeout(pu);
                }

            };

            this.continue = function () {
                indiceFBSprite++;
                Estado++;
                go = true;
                finalBoss.setVelX(-6);
                finalBoss.setVelY(6);
                window.addEventListener("keydown", controles, false);
                crearMar = window.setTimeout(partida.marCaen, random(minMar, maxMar));
                pu = window.setTimeout(partida.powerUp, random(2000, 5000));
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
                barrera.setPosY(ship.getPosY());
                barrera.setPosX(ship.getPosX());


                //MOVIMIENTO MARCIANOS
                for (var i = 0; i < totalMarcianos; i++) {
                    if (arrMar[i].getVidas() > 0) {
                        arrMar[i].setPosY(arrMar[i].getPosY() + arrMar[i].getVelY());
                        arrMar[i].setPosX(arrMar[i].getPosX() + arrMar[i].getVelX());
                    }
                }
                ;

                //MOVIMIENTO FINAL BOSS      
                if (finalBoss.getVidas() > 0) {
                    finalBoss.setPosY(finalBoss.getPosY() + finalBoss.getVelY());
                    finalBoss.setPosX(finalBoss.getPosX() + finalBoss.getVelX());
                }

                //MOVIMIENTO NAVE (CINEMATICAS)     
                if (angryUp) {
                    ship.setPosY(ship.getPosY() + moveShipY);
                    ship.setPosX(ship.getPosX() + moveShipX);
                }

                //MOVIMIENTO POWER UP VIDA
                powerUpVida.setPosY(powerUpVida.getPosY() + powerUpVida.getVelY());

                //MOVIMIENTO POWER UP PARAGUAS
                powerUpParaguas.setPosY(powerUpParaguas.getPosY() + powerUpParaguas.getVelY());

            };

            //FUNCIÓN PARA DIBUJAR LOS OBJETOS
            this.dibujar = function () {

                // DIBUJAR FONDO
                contexto.drawImage(fondo, 0, 0, canvas.width, canvas.height);

                //DIBUJAR FINAL BOSS
                if (finalBoss.getVidas() > 0) {
                    contexto.drawImage(finalBossSprite[indiceFBSprite], finalBoss.getPosX() - finalBossSprite[0].width / 2, finalBoss.getPosY() - finalBossSprite[0].height / 2, finalBossSprite[0].width, finalBossSprite[0].height);
                }
                ;

                //DIBUJAR MARCIANOS
                for (var i = 0; i < totalMarcianos; i++) {
                    if (arrMar[i].getVidas() > 0 && i % 2 === 0 && finalBoss.getVidas() > 0) {
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
                if (ship.getVidas() > 0 && finalBoss.getVidas() > 0) {
                    contexto.drawImage(naveSprite[indiceNaveSprite], ship.getPosX() - naveSprite[0].width / 2, ship.getPosY() - naveSprite[0].height / 2, naveSprite[0].width, naveSprite[0].height);
                }
                ;

                //DIBUJAR BÚNKERS
                if (barrera.getVidas() === 1 && ship.getVidas() > 0) {
                    contexto.drawImage(bunkerSprite[indiceBunker], barrera.getPosX() - bunkerSprite[0].width / 2, barrera.getPosY() - bunkerSprite[0].height / 2, bunkerSprite[0].width, bunkerSprite[0].height);
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

                //DIBUJAR VIDAS
                
                 contexto.drawImage(naveSprite[1], canvas.width - 100, 20, 35, 35);
                 contexto.textAlign = "left";
                 contexto.fillStyle = "white";
                 contexto.font = "28px Arial";
                 contexto.fillText("x" + ship.getVidas(), canvas.width - 50, 45);
                 
                 //DIBUJAR RENDIMIENTO (PRUEBAS)
                 /*
                 contexto.fillStyle = "white";
                 contexto.font = "16px Consolas";
                 contexto.fillText("maxMar " + maxMar, canvas.width - 150, 96);
                 contexto.fillText("minMar: " + minMar, canvas.width - 150, 160);
                 contexto.fillText("maxVelY " + maxVelY, canvas.width - 150, 300);
                 contexto.fillText("maxVelX: " + maxVelX, canvas.width - 150, 360);
                 contexto.fillText("powerUpVida: " + powerUpVida.getVidas(), canvas.width - 200, 400);
                 contexto.fillText("powerUpParaguas: " + powerUpParaguas.getVidas(), canvas.width - 200, 460);
                 contexto.fillText("FBvidas: " + finalBoss.getVidas(), canvas.width - 200, 520);
                 
                 
                 //DIBUJAR PUNTUACIÓN
                 contexto.textAlign = "left";
                 contexto.fillStyle = "white";
                 contexto.font = "16px Arial";
                 contexto.fillText("PUNTUACION: " + puntos, 32, 32);
                 */

                //DIBUJAR BARRERAS RESTANTES
                contexto.textAlign = "left";
                contexto.fillStyle = "white";
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

            //FUNCIÓN PARA GANAR
            this.victoria = function () {

                //PINTAR EL FONDO VERDE CON OPACIDAD 0.2
                contexto.globalAlpha = 0.2;
                contexto.fillStyle = "green";
                contexto.fillRect(0, 0, canvas.width, canvas.height);

                //PINTAMOS "VICTORIA" CON OPACIDAD 1
                contexto.globalAlpha = 1;
                contexto.drawImage(winSprite, 0, 0, winSprite.width, winSprite.height);

                winSnd.currentTime = 0;
                winSnd.play();

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
                partida.enfadoFB();
                partida.dibujar();
                localStorage.setItem("puntuacion", puntos);
                localStorage.setItem("vidas", ship.getVidas());

                //COMPROBAR SI NOS QUEDAN VIDAS
                if (ship.getVidas() < 1) {
                    partida.muerte();
                } else if (finalBoss.getVidas() < 1) {
                    partida.victoria();
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
        var pu = window.setTimeout(partida.powerUp, random(2000, 5000));
    }
    ;
}
;

//fin 3



