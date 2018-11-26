// Declaração das variáveis globais
var pontos = 0;
var ponto = 10;

var dificuldade = 3;

var barra;

var gameSpeed = 10;

var audio = new Audio('campainha_escola.mp3');

var increment = 0;
var x = 0;

var interval;

var music = [2, 5, 1, 1, 6, 8, 9, 10, 11];
var blocos = [];
var cores = ["red", "blue", "yellow", "red", "blue", "yellow", "red", "blue", "yellow"];

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 800;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
       $("#game").append(this.canvas);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

    
function updateGameArea() {
    myGameArea.clear();
    barra.update();

    for(var i = 0; i < blocos.length - 1; i++){
        if(blocos[i] != null)
            blocos[i].update();
    }

    increment += gameSpeed;
    if(increment > music[x] * 100 / dificuldade){
        console.log(x);
        blocos[x].start();
        increment = 0;
        x++;
        if(x == music.length)
            x = 0;
    }
}


function component(width, height, color, x, y, speed) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.originalColor = color;
    this.x = x;
    this.y = y;
    this.foi = false;
    this.pontuou = false;
    this.morrer = 0;
    ctx = myGameArea.context;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height, this.movel);
    this.start = function(){
        this.foi = true;
    }
    this.update = function(){
        if(this.foi)
            this.x += speed;   
        ctx = myGameArea.context;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        if(this.x >= 800){
           this.kill(); 
        } 
        if(this.pontuou){
            this.color = "green";
            ctx.fillStyle = this.color;
            this.morrer++;
        }
        if(this.morrer == 10)
            this.kill();
    }
    this.kill = function(){
        this.x = -50;
        this.y = Math.floor(Math.random() * 600 + 1);
        this.foi = false;
        this.pontuou = false;
        this.morrer = 0;
        this.color = this.originalColor;
    }
    this.point = function(){
        this.pontuou = true;
    }
}

// Redesenha a tela
// Inicializa variaveis
function Iniciar()
 {   
    myGameArea.start();

    barra  = new component(100, 850,"lightgray", 650, 00, 0);

    for(var i = 0; i < music.length; i++)
        blocos[i] = new component(30, 30, cores[i], -50, Math.floor(Math.random() * 600 + 1 ), gameSpeed);
  }

function clicarSpace(event){
    if(event.keyCode == 32){
        var foi = false;
        for(var i = 0; i < blocos.length; i++){
            if(blocos[i].x >= 650 && blocos[i].x <= 750){
                blocos[i].point();
                pontos += ponto;
                $("#pontos")[0].innerHTML = pontos;
                foi = true;
            }
        }
        if(!foi){
            pontos -= ponto;
            $("#pontos")[0].innerHTML = pontos;
        }
    }
}