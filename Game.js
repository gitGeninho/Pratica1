// Declaração das variáveis globais
var pontos = 0;
var bloco;
var barra;
var gameSpeed = 10;
var audio = new Audio('campainha_escola.mp3');

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
    barra.update();
    bloco.update();
    if(bloco.x==600)
        audio.play();
    bloco2.update();
}

function text() {
 /* var canvas = document.getElementById("canvas");
  var ctx = this.context;
  ctx.font() = '30px Arial';
  ctx.fillText("Hello World",10,50);*/
}

// Declação dos objetos para representar
// as imagens e audios

var imgBtnPlay = new Image();
    imgBtnPlay.src = "img/btnPlay.png";
var imgBtnPause = new Image();
    imgBtnPause.src = 'img/btnPause.png';

    //var audio = new Audio('sons/musica.mpo3');
    //audio.play();


function component(width, height, color, x, y, speed) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y; 
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height, this.movel);
    this.update = function(){
        
        this.x += speed;   
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

// Redesenha a tela
// Inicializa variaveis
function Iniciar()
 {   
    

    myGameArea.start();

    barra  = new component(50, 850,"lightgray", 650, 00, 0);
    bloco  = new component(30, 30, "red", 00, 300, gameSpeed);
    bloco2 = new component(30, 30, "red",-50, 50, gameSpeed/3)
   /* context.beginPath();
    context.moveTo(100, 150);
    context.lineTo(450, 50);
    context.stroke();*/
    
  //  Menu();
  }

function clicarSpace(event){
    var tecla = event.keyCode; 
    alert(bloco.x);
    if(tecla == 32)
    {
        
        if(bloco.x>750)
        {
            bloco.x=0;
            pontos -= 30;
            document.getElementById("pontos").innerHTML = pontos;
        }    
            
        
        if(bloco2.x>750)
        {
            bloco2=0;
            pontos -= 30;
            document.getElementById("pontos").innerHTML = pontos;
        }


        if(bloco.x>bloco2.x)
        {
            if((bloco.x >= 650 && bloco.x <= 700))
            {
                bloco.x  = 0;
                pontos += 50;
                document.getElementById("pontos").innerHTML = pontos;            
            }
            else
            {
                bloco.x  = 0;
                pontos -= 30;
                document.getElementById("pontos").innerHTML = pontos;
            }
            return;
        }
    

        if((bloco2.x >= 650 && bloco2.x <= 700))
        {
        bloco2.x  = 0;
        pontos += 50;
        document.getElementById("pontos").innerHTML = pontos;
        
        }
        else{
            bloco2.x  = 0; 
            pontos -= 30;
            document.getElementById("pontos").innerHTML = pontos;
        }            
      
        

    }   
        
    
}