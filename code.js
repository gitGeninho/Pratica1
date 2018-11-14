var nomeUsuario = '';

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


	function verificaLogin(){
		/*
		var xmlhttp = new XMLHttpRequest();
		var url = "http://localhost:3000/Usuario";
		xmlhttp.onreadystatechange=function() {
			if (this.readyState == 4 && this.status == 200) {
				//quando os dados retornarem da requisição serão enviados para a função ExibeDados()
				VerificaDados(this.responseText);
			}
		}
		xmlhttp.open("GET", url, true);
		xmlhttp.send();

		function VerificaDados(response){
			var arr = JSON.parse(response);
			var login = document.getElementById("nick").innerHTML;
			var senha = document.getElementById("pass").innerHTML;
			for(var i=0, i<arr.length; i++){
				if (arr[i].nick == login && arr[i].senha == senha) {
					alert("Login feito com sucesso");
				}
			}
		}
		*/
		
		var nickPego = $('#nick').val();
		var senhaPega = $('#pass').val();

		const url = 'http://localhost:3000/Usuario/login';
		const data={
			nick: nickPego,
			senha: senhaPega
		}

		$.post(url, data, function(data, status){
			debugger;
			console.log('data: ' + data.nick + ' status: ' + status);
		})
		
		/*
		var nick = document.getElementById('nick').value;
		var senha = document.getElementById('pass').value;

		if($.get("http://localhost:3000/Usuario", {nick: nick, senha: senha})){
		.done(function (data){
   			alert("Login Realizado");
		});
		window.location.href = "Menu.html";
		return true;
		*/
	}


function cadastrar(e)
{
	
e.preventDefault();

	var nick = document.getElementById('nick').value;
	var nome = document.getElementById('nome').value;
	var senha = document.getElementById('pass').value;
	var senhaRepetir = document.getElementById('passe').value;

	if ((nick == '') || (nome == '') || (senha == '')) {
		alert("Existem campos vazios!")
	}

	if (senha != senhaRepetir)
	{
		alert('As senhas não correspondem!');
		senha.value = "";
		senhaRepetir.value = "";
		return false;
	}

	$.post( "http://localhost:3000/Usuario", { nick: nick, nome: nome, senha: senha})
  .done(function( data ) {
    alert( "Cadastro feito com sucesso");
  });
  window.location.href = "Menu.html";

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
 //window.location.replace("Login.html");

 var win = window.open("Login.html", '_blank');
  win.focus();

}
 //----------------------------------------- Demais

 function aindaNao() {
 	alert("Ainda estamos preparando!!\n aguarde =v=");
 }

 function jogar() {
 	 var win = window.open("Main.html", '_blank');
     win.focus();
 }