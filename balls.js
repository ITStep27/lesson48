
var $_ = (e) => {
    return document.getElementById(e);
}

var rnd = (a) => {
    return Math.round(Math.random()*a);
}

//глобальные пер-ные
var g = 1; // уск. св. падения
var ground = 500; // уровень земли в px
var fps = 30; // частота кадров


var balls = []; // масс. объектов

class Ball {
    constructor (ID, Start) {
        this.id = ID;
        this.start = Start; // ускорение на земле
        this.dy = Start; // дельта y
        this.y = ground; // тек. y
        this.sqTime = 0; // время в сжатом виде
        this.sqScale = 1; // коеф. сжатия
    }
    move () {
        this.y -= this.dy;
        this.dy -= g;
        if (this.y >= ground) {
            this.y = ground;
            this.dy = this.start;
            this.sqTime = 10;
            this.sqScale = 0.5;
            $_(this.id).style.transform = `scaley(${this.sqScale})`;
        }
        $_(this.id).style.top = `${Math.floor(this.y)}px`;
        if (this.sqTime > 0) {
            this.sqTime--;
            this.sqScale += 0.05;
            $_(this.id).style.transform = `scaley(${this.sqScale})`;
        }
    }

}

function reset() {
for (var x=0; x<10; x++) { // визуализация и инициализация объектов
        $_('body').innerHTML += `<div class='ball' id='ball${x}'></div>`;
        $_(`ball${x}`).style.backgroundColor = `rgb(${x*20},${250-x*20},${rnd(155)})`;
        balls.push(new Ball(`ball${x}`, rnd(20)+10));
    console.log(balls[x]);
    }
var interval = setInterval(function(){ // перемещение объектов
    for (x=0; x<10; x++) {
        balls[x].move();
    }

}, 1000/fps);    
}

