  
// Declaração das variáveis globais
        var objCanvas = null;
        var objContexto = null;



// Declação dos objetos para representar
// as imagens
var imgFundo = new Image();
    imgFundo.src="img/fundo.png";


// Redesenha a tela
function AtualizaTela()
 {
    objContexto.drawImage(imgFundo,0,0);
 }

function Iniciar()
 {
    objCanvas = document.getElementById("meuCanvas");
    objContexto = objCanvas.getContext("2d");

    AtualizaTela();
  }