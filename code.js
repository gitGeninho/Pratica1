  
// Declaração das variáveis globais
        var objCanvas = null;
        var objContexto = null;

//geninho vc é boboooooooooooo

// Declação dos objetos para representar
// as imagens
var imgFundo = new Image();
    imgFundo.src="img/fundo.png";


// Redesenha a tela
function AtualizaTela()
 {
    objContexto.drawImage(imgFundo,0,0);
 }

// Inicializa variaveis
function Iniciar()
 {
    objCanvas = document.getElementById("meuCanvas");
    objContexto = objCanvas.getContext("2d");

    //var audio = new Audio('sons/musica.mpo3');
	//audio.play();

    AtualizaTela();
  }