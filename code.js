var nomeUsuario = '';

$(document).ready(function (){
	if (nomeUsuario=='')
		$("#btnLogar").innerHTML = "Sign in";
	else
		$("#btnLogar").innerHTML = "Sign out";
});

function cadastrar(e)
{
e.preventDefault();

	var nick = document.getElementById('nick').value;
	var nome = document.getElementById('nome').value;
	var senha = document.getElementById('pass').value;
	var senhaRepetir = document.getElementById('passe').value;

	if (senha != senhaRepetir)
	{
		alert('As senhas não correspondem!');
		senha = "";
		senhaRepetir = "";
		return false;
	}

	$.post( "http://localhost:3000/Usuario", { nick: nick, nome: nome, senha: senha})
  .done(function( data ) {
    alert( "Data Loaded: " + data );
  });

	return true;
	//inserirBD(nick, nome, senha, 1)
}

function btnCancelaClick(){
			nick = document.getElementById("nick");
			nome = document.getElementById("nome");
			senha = document.getElementById("pass");
			repetesenha = document.getElementById("passe");
			nick.value = "";
			nome.value = "";
			senha.value = "";
			repetesenha.value = "";
}
/*
function inserirBD(nick, nome, senha, codAula)
{
	debugger;
	var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
	xmlhttp.open("POST", "http://localhost:3000/Usuario");
	xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xmlhttp.send({ "nick": nick, 'nome': nome, 'senha':senha, 'codAula':1 } );

  alert('inserido!!!!!!')
}
*/
function logar() {
  alert("AAAAAAAAA");
 //window.location.replace("Login.html");

 var win = window.open("Login.html", '_blank');
  win.focus();

}
 //----------------------------------------- JOGO 
