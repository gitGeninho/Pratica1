$(document).ready(function (){
	criarDivAula();
});
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
    var indice = 1;
	ajax.onreadystatechange = function () {
		if (ajax.readyState == 4 && ajax.status == 200) 
		    adicionaInformacoes(this.responseText, indice);
	}
	ajax.open("GET", url, true)
	ajax.send();
}

function adicionaInformacoes(responseText, indice)
{
	var arr = JSON.parse(responseText);
	var div = document.createElement("div");
	div.id = "divAula";

	var musica = arr[indice].musica;
	var aula = arr[indice].textoAula;
	alert(musica);
	alert(aula);

	var out = "<h1>"+musica+"</h1><br><p>"+aula+"</p>"

	div.innerHTML = out;
						
	document.getElementById("pag").appendChild(div);

	}

