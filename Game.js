// Declaração das variáveis globais
var pontos = 0;
var bloco;
var gameSpeed = 7;

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 800;
        this.canvas.height = 600;
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
    bloco.update();
}

// Declação dos objetos para representar
// as imagens e audios

var imgBtnPlay = new Image();
    imgBtnPlay.src = "img/btnPlay.png";
var imgBtnPause = new Image();
    imgBtnPause.src = 'img/btnPause.png';

    //var audio = new Audio('sons/musica.mpo3');
    //audio.play();


function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y; 
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    this.update = function(){
        this.x += gameSpeed;
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

// Redesenha a tela
function Menu()
 {
     //objContexto.drawImage(imgFundo,0,0);

 }

// Inicializa variaveis
function Iniciar()
 {
    myGameArea.start();
    bloco = new component(30, 30, "red", 00, 300);
    
   // Menu();
  }

function clicarSpace(event){
    var tecla = event.keyCode; 
    alert(bloco.x);
    if(tecla == 32){
        if(bloco.x > 650 && bloco.x < 750){
            bloco.x = 0;
            pontos += 50;
            document.getElementById("pontos").innerHTML = pontos;
            
        }
        else{
            bloco.x = 0;
            pontos -= 30;
            document.getElementById("pontos").innerHTML = pontos;
        }
    }
}