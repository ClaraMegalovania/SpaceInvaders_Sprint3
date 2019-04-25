function sinDisparos() {

    //CREAR Y CARGAR EL CONTEXTO
    var canvas = document.getElementById("lienzo");
    var contexto = canvas.getContext("2d");

    //CREAR Y CARGAR LA MÚSICA
    var musica = document.getElementById("musicaJuego");
    musica.currentTime = 0;
    musica.play();

    var portal1Snd = document.getElementById("portal1Snd");

    var gameOverSnd = document.getElementById("gameOver");
    var umbrellaSnd = document.getElementById("umbrella");
    var dañoSnd = document.getElementById("daño");

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

    var nodrizaSprite = [];
    nodrizaSprite[0] = new Image();
    nodrizaSprite[0].src = "SinDisparos/NubeNodriza.png";

    var bunkerSprite = [];
    bunkerSprite[0] = new Image();
    bunkerSprite[0].src = "SinDisparos/Paraguas.png";

    var gameOverSprite = new Image();
    gameOverSprite.src = "General/GameOver.png";

    var fondo = new Image();
    fondo.src = "SinDisparos/Fondo.jpg";

    var portalSprite = [];
    portalSprite[0] = new Image();
    portalSprite[0].src = "SinDisparos/Portal0.png";
    portalSprite[1] = new Image();
    portalSprite[1].src = "SinDisparos/Portal1.png";
    portalSprite[2] = new Image();
    portalSprite[2].src = "SinDisparos/Portal2.png";
    portalSprite[3] = new Image();
    portalSprite[3].src = "SinDisparos/Portal3.png";
    portalSprite[4] = new Image();
    portalSprite[4].src = "SinDisparos/Portal4.png";
    portalSprite[5] = new Image();
    portalSprite[5].src = "SinDisparos/Portal5.png";
    portalSprite[6] = new Image();
    portalSprite[6].src = "SinDisparos/Portal6.png";
    portalSprite[7] = new Image();
    portalSprite[7].src = "SinDisparos/Portal7.png";
    portalSprite[8] = new Image();
    portalSprite[8].src = "SinDisparos/Portal8.png";
    var maxIndicePortal = 8;

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
    var minMar = 700;
    var maxMar = 1000;
    var minVelX = -3;
    var maxVelX = 4;
    var minVelY = 4;
    var maxVelY = 6;
    var exit;

    //VARIABLES PORTAL
    var nextLvl;
    var goLevel2 = false;
    var openPortal = false;
    var indicePortal = 0;
    var playPortal1Snd = true;

    //VARIABLES BÚNKERS
    var barrera;
    var ammo = 3;

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

        //INICIALIZARADOR PORTAL
        nextLvl = new portal(canvas.width / 2, 0 - portalSprite[8].height - 100, 0, 0); //preparo la posicion desde la cual caera el portal, pero su velocidad sera nula hasta que se cumpla la condicion que lo haga aparecer

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
            //POWER UP EXPLOSION FINAL (SARABADA BULMA, TRUNKS, SOSHITE KAKAROTTO)
            if ((e.key === 'r' || e.key === 'R') && ship.getPosY() < canvas.height - naveSprite[0].height / 2 - 5 && !pausa) {
                contexto.fillStyle = "pink";
                contexto.strokeArc(50, 50, 20 /*double x, double y, double w, double h, double startAngle, double arcExtent, ArcType closure*/);
            }
            ;

            //PAUSA
            if ((e.key === 'p' || e.key === 'P') && !(ship.getVidas() < 1) && !pausa) {
                pausa = true;
                window.clearTimeout(crearMar);
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
            //GAME OVER o VICTORIA SALIR
            if (e.keyCode === 13 && ship.getVidas() < 1) {
                window.removeEventListener("keydown", controles, false);
                musica.pause();
                menuPrincipal();
            }
            ;
        }
        ;

        function partida() {

            //CONTROLAR ANIMACION PORTAL
            this.portalAnim = function () {
                if (openPortal) {
                    if (playPortal1Snd) {
                        portal1Snd.currentTime = 0;
                        portal1Snd.play();
                        playPortal1Snd = false;
                    }
                    if (indicePortal < maxIndicePortal) {
                        indicePortal++;
                    } else {
                        indicePortal = 8;
                        openPortal = false;
                    }
                }
            }
            ;

            //FUNCION PARA QUE CAIGAN LOS MARCIANOS
            this.marCaen = function () {
                exit = false;

                var i = 0;
                while (i < totalMarcianos) {
                    if (arrMar[i].getVidas() === 0 && !exit) {
                        arrMar[i].setVidas(1);
                        arrMar[i].setPosX(random((0 + marcianoSprite[0][0].width), (canvas.width - marcianoSprite[0][0].width)));
                        arrMar[i].setPosY(0 - marcianoSprite[0][0].height);
                        arrMar[i].setVelX(random(minVelX, maxVelX));
                        arrMar[i].setVelY(random(minVelY, maxVelY));
                        exit = true;
                    }
                    if (i === totalMarcianos) {
                        i = 0;
                    } else {
                        i++;
                    }
                }
                crearMar = window.setTimeout(partida.marCaen, random(minMar, maxMar));
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
                        if (puntos % 100 === 0 && maxMar > 800) { //es decir, cada 5 marcianos que esquivemos...
                            maxMar = maxMar - 100;
                            if (maxVelX < 8)
                                maxVelX++;
                        }

                        if (puntos % 150 === 0 && minMar > 600) { //es decir, cada 10 marcianos que esquivemos...
                            minMar = minMar - 100;
                            if (maxVelY < 8)
                                maxVelY++;
                        }

                        //CADA 20 MARCIANOS ESQUIVADOS RECUPERAREMOS UN ESCUDO:
                        if (ammo < 3 && puntos % 200 === 0) {
                            ammo++;
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

                //COLISION NAVE - PORTAL 
                distanciaX = Math.abs(ship.getPosX() - nextLvl.getPosX());
                distanciaY = Math.abs(ship.getPosY() - nextLvl.getPosY());
                if (distanciaX < portalSprite[0].width / 2 + naveSprite[0].width / 2 && distanciaY < portalSprite[0].height / 2 + naveSprite[0].height / 2 && indicePortal === 8) {
                    window.removeEventListener("keydown", controles, false);
                    window.clearTimeout(crearMar);
                    goLevel2 = true;
                }

                //COLISION BÚNKER - PORTAL
                distanciaX = Math.abs(barrera.getPosX() - nextLvl.getPosX());
                distanciaY = Math.abs(barrera.getPosY() - nextLvl.getPosY());
                if (distanciaX < portalSprite[0].width / 2 + bunkerSprite[0].width / 2 && distanciaY < portalSprite[0].height / 2 + bunkerSprite[0].height / 2 && barrera.getVidas() === 1 && indicePortal === 8) {
                    window.removeEventListener("keydown", controles, false);
                    window.clearTimeout(crearMar);
                    goLevel2 = true;
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

                //APARICION Y MOVIMIENTO DEL PORTAL
                if (puntos > 240) { //al esquivar 25 marcianos se abrira el portal
                    nextLvl.setPosY(175);
                }
            };


            //FUNCIÓN PARA DIBUJAR LOS OBJETOS
            this.dibujar = function () {

                // DIBUJAR FONDO
                contexto.drawImage(fondo, 0, 0, canvas.width, canvas.height);

                //DIBUJAR PORTAL
                if (puntos > 240) { //al esquivar 25 marcianos se abrira el portal
                    openPortal = true;
                    contexto.drawImage(portalSprite[indicePortal], nextLvl.getPosX() - portalSprite[0].width / 2, nextLvl.getPosY() - portalSprite[0].height / 2, portalSprite[0].width, portalSprite[0].height);
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
                } else if (goLevel2) {
                    sinDisparos2();
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
        window.setInterval(partida.portalAnim, 75);
    }
    ;
}
;

//fin 1