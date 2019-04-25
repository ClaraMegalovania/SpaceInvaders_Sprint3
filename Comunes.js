//NÚMERO ALEATORIO ENTRE a Y b
function random (a, b) {
    return Math.floor((Math.random() * (b - a + 1)) + a);
};

//CLASE BASE
function base (x, y, vx, vy, vdas) {
    var posX = x;
    var posY = y;
    var velX = vx;
    var velY = vy;
    var vidas = vdas;

    this.getPosX = function () {
        return posX;
    };
    this.setPosX = function (x) {
        posX = x;
    };
    this.getPosY = function () {
        return posY;
    };
    this.setPosY = function (y) {
        posY = y;
    };
    this.getVelX = function () {
        return velX;
    };
    this.setVelX = function (vx) {
        velX = vx;
    };
    this.getVelY = function () {
        return velY;
    };
    this.setVelY = function (vy) {
        velY = vy;
    };
    this.getVidas = function () {
        return vidas;
    };
    this.setVidas = function (v) {
        vidas = v;
    };
};

//CLASE NAVE
var nave = function(x, y, vx, vy, vdas, disp) {
    base.call(this, x, y, vx, vy, vdas);
    var disparo = disp;

    this.getDisparo = function () {
        return disparo;
    };
    this.setDisparo = function (disp) {
        disparo = disp;
    };
};
nave.prototype = Object.create(base.prototype);
nave.prototype.constructor = nave;

//CLASE MARCIANO
var marciano = function (x, y, vx, vy, vdas) {
    base.call(this, x, y, vx, vy, vdas);
};
marciano.prototype = Object.create(base.prototype);
marciano.prototype.constructor = marciano;

//CLASE NODRIZA
var nodriza = function (x, y, vx, vdas, disp) {
    base.call(this, x, y, vx, 0, vdas); 
    var disparo = disp;

    this.getDisparo = function () {
        return disparo;
    };
    this.setDisparo = function (disp) {
        disparo = disp;
    };  
};
nodriza.prototype = Object.create(base.prototype);
nodriza.prototype.constructor = nodriza;

//CLASE BÚNKER
var bunker = function (x, y, vdas) {
    base.call(this, x, y, 0, 0, vdas);
};
bunker.prototype = Object.create(base.prototype);
bunker.prototype.constructor = bunker;

//CLASE POWER UP
var powerUp = function (vy) {
    base.call(this, 0, 0, 0, vy, 0);
};
powerUp.prototype = Object.create(base.prototype);
powerUp.prototype.constructor = powerUp;

//CLASE BALA
var bala = function (x, y, vx, vy, vdas, reb) {
    base.call(this, x, y, vx, vy, vdas);
    var rebotes = reb;

    this.getRebotes = function () {
        return rebotes;
    };
    this.setRebotes = function (reb) {
        rebotes = reb;
    };  
    
    
};
bala.prototype = Object.create(base.prototype);
bala.prototype.constructor = bala;

//CLASE JUGADOR
var jugador = function (nombre, puntos) {
    var score = puntos;
    var name = nombre;

    this.getName = function () {
        return name;
    };
    this.setName = function (n) {
        name = n;
    };
    this.getScore = function () {
        return score;
    };
    this.setScore = function (s) {
        score = s;
    };

};

//CLASE PORTAL
var portal = function (x, y) {
    base.call(this, x, y, 0, 0, 0);
};
portal.prototype = Object.create(portal.prototype);
portal.prototype.constructor = portal;
