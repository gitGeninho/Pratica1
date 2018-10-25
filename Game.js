// Declaração das variáveis globais
        var objCanvas = null;
        var objContexto = null;

// Declação dos objetos para representar
// as imagens

/*var imgFundo = new Image();
    imgFundo.src="img/fundo.png";*/

var imgPers = new Image();
    imgPers.src="img/bytechan.png";



// Redesenha a tela
function AtualizaTela()
 {
   // objContexto.drawImage(imgFundo,0,0);
    objContexto.drawImage(imgPers,690,430);
 }

// Inicializa variaveis
function Iniciar()
 {
    objCanvas = document.getElementById("myCanvas");
    objContexto = objCanvas.getContext("2d");

    //var audio = new Audio('sons/musica.mpo3');
	//audio.play();

    AtualizaTela();
  }
