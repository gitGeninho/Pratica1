﻿var nomeUsuario = '';

$(document).ready(function (){
	if (nomeUsuario=='')
		$("#btnLogar").innerHTML = "Sign in";
	else
		$("#btnLogar").innerHTML = "Sign out";
});

function clicaLogin(){
	nick = document.getElementById("nick");
	nick.value = "";
}


function Login(){
		
		
		var nickPego = document.getElementById('nick').value;
		var senhaPega = document.getElementById('pass').value;

		const data={
			nick: nickPego,
			senha: senhaPega
		}

		if ((nickPego == '') || (senhaPega == '')) {
		alert("Existem campos vazios!");
		return false;
		}



  				let pode = true;

		$.get(`http://localhost:3000/Usuario/${nickPego}`, {})
  .done(function( data ) { 

  	if (data.length == 0) {
  		pode = false;
  	}

		if (pode) {

		$.get( "http://localhost:3000/Usuario", { nick: nickPego, senha: senhaPega})
  			.always(function( data ) {
   			 alert( "Login feito com sucesso");
   			 window.location.href = "Menu.html";
 		 });





} else {
	alert("Usuário inválido.");
}});

}


function cadastrar(e)
{
	
e.preventDefault();

	var nick = document.getElementById('nick').value;
	var nome = document.getElementById('nome').value;
	var senha = document.getElementById('pass').value;
	var senhaRepetir = document.getElementById('passe').value;

	if ((nick == '') || (nome == '') || (senha == '')) {
		alert("Existem campos vazios!");
		return false;
	}

	if (senha != senhaRepetir)
	{
		alert('As senhas não correspondem!');
		senha.value = "";
		senhaRepetir.value = "";
		return false;
	}

	let pode = true;

		$.get(`http://localhost:3000/Usuario/${nick}`, {})
  .done(function( data ) { 
    if (data.length > 0 ) {
	pode = false;
}
		if (pode) {

		console.log({ nick: nick, nome: nome, senha: senha})

		$.post( "http://localhost:3000/Usuario", { nick: nick, nome: nome, senha: senha})
  .always(function( data ) {
  	console.log('chegou aqui');
    alert( "Cadastro feito com sucesso");
   	window.location.href = "Menu.html";
   	return false;
  });





} else {
	alert("Usuário já cadastrado.");
}});

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



function logar() {
 //window.location.replace("Login.html");

 var win = window.open("Login.html", '_blank');
  win.focus();

}
 //----------------------------------------- Demais

 function aindaNao() {
 	alert("Ainda estamos preparando!!\n aguarde =v=");
 	//window.location.href = "Aula.html";
 }

 function jogar() {
 	 var win = window.open("Main.html", '_blank');
     win.focus();
 }