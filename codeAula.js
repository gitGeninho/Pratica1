var indice = 0;
$(document).ready(function (){
	criarDivAula();
});
	

function Proximo() {
	indice++;
	document.getElementById("audio").pause();
	criarDivAula();
}


function Anterior() {
	indice--;
	document.getElementById("audio").pause();
	criarDivAula();
}

function iniciaAjax()
{
	var objetoAJAX;
	if (window.XMLHttpRequest) {
		objetoAJAX = new XMLHttpRequest();
	} else if(window.ActiveXObject) {
		objetoAJAX = new ActiveXObject("Msxml2.XMLHTTP");
		if (!objetoAJAX) {
		objetoAJAX = new ActiveXObject("Microsoft.XMLHTTP");
		}
	} else {
		alert("Seu navegador não suporta esta aplicação");
	}
	return objetoAJAX;

}


function criarDivAula()
{
    var ajax = iniciaAjax();

    var url = "http://localhost:3000/Aula";
    
	ajax.onreadystatechange = function () {
		if (ajax.readyState == 4 && ajax.status == 200) 
		    adicionaInformacoes(this.responseText);
	}
	ajax.open("GET", url, true)
	ajax.send();
}

function adicionaInformacoes(responseText)
{
	var arr = JSON.parse(responseText);
	var div = document.createElement("div");
	div.id = "divAula";

	var musica = arr[indice].musica;
	var aula = arr[indice].textoAula;

	var out = "<h1>"+musica+"</h1><br><p>"+aula+"</p><audio id = 'audio' controls><source src='Musicas/"+ indice + ".mp3' type='audio/mpeg'></source></audio>"

	div.innerHTML = out;
						
	document.getElementById("pag").appendChild(div);
}





