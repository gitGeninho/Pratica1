// Declaração das variáveis globais
        var objCanvas = null;
        var objContexto = null;

// Declação dos objetos para representar
// as imagens

var imgPers = new Image();
    imgPers.src = "img/bytechan.png";

var imgBtnPlay = new Image();
    imgBtnPlay.src = "img/btnPlay.png";
var imgBtnInfo = new Image();
    imgBtnInfo.src="img/btnInfo.png";


// Redesenha a tela
function Menu()
 {
    //objContexto.drawImage(imgFundo,0,0);
    objContexto.drawImage(imgBtnPlay,100,100);

 }

// Inicializa variaveis
function Iniciar()
 {
    objCanvas = document.getElementById("myCanvas");
    objContexto = objCanvas.getContext("2d");

    //var audio = new Audio('sons/musica.mpo3');
	//audio.play();

    Menu();
  }
