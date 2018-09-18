var balls = [];

var $_ = (e) => {
    return document.getElementById(e);
}

var g = 1;
var ground = 500;
var fps = 30;

var rnd = (a) => {
    return Math.round(Math.random()*a);
}

class Ball {
    constructor (ID, Start) {
        this.id = ID;
        this.start = Start;
        this.dy = Start;
        this.y = ground;
        this.sqTime = 0;
        this.sqScale = 1;
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
for (var x=0; x<10; x++) {
        $_('body').innerHTML += `<div class='ball' id='ball${x}'></div>`;
        $_(`ball${x}`).style.backgroundColor = `rgb(${x*20},${250-x*20},${rnd(155)})`;
        balls.push(new Ball(`ball${x}`, rnd(20)+10));
    console.log(balls[x]);
    }
var interval = setInterval(function(){
    for (x=0; x<10; x++) {
        balls[x].move();
    }

}, 1000/fps);    
}

