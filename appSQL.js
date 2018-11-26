
const express = require('express');
const app = express();         
const bodyParser = require('body-parser');
const porta = 3000; //porta padrão
const sql = require('mssql');
const conexaoStr = "Server=regulus;Database=PR117015;User Id=PR117015;Password=PR117015;";

//conexao com BD
sql.connect(conexaoStr)
   .then(conexao => global.conexao = conexao)
   .catch(erro => console.log(erro));

// configurando o body parser para pegar POSTS mais tarde   
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
//acrescentando informacoes de cabecalho para suportar o CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PATCH, DELETE");
  next();
});
//definindo as rotas
const rota = express.Router();
rota.get('/', (requisicao, resposta) => resposta.json({ mensagem: 'Funcionando!'}));
app.use('/', rota);

//inicia servidor
app.listen(porta);
console.log('API Funcionando!');

function execSQL(sql, resposta) {
	global.conexao.request()
				  .query(sql)
				  .then(resultado => resposta.json(resultado.recordset))
          //.then(resultado => console.log(resultado.recordset))
				  .catch(erro => resposta.json(erro));
}

//o simbolo ? indica que id na rota abaixo é opcional


rota.get('/Usuario', (requisicao, resposta) =>{
execSQL('SELECT * FROM Usuario', resposta);
})
//o simbolo ? indica que id na rota abaixo é opcional
rota.get('/Usuario/:nick?', (requisicao, resposta) => {
let filtro = '';
if (requisicao.params.nick)
filtro = " WHERE nick='" + requisicao.params.nick + "'";

execSQL('SELECT * from Usuario' + filtro, resposta);
})

rota.post('/Usuario', (requisicao, resposta) =>{
const nick = requisicao.body.nick.substring(0, 20);
const nome = requisicao.body.nome.substring(0,50);
const senha = requisicao.body.senha.substring(0,100);
const numAula = 1;

execSQL(`INSERT INTO Usuario(nick, nome, senha, numAula) VALUES('${nick}','${nome}','${senha}',${numAula})`, resposta);
})

rota.post('/Usuario/login', (requisicao, resposta) =>{
	let nick = requisicao.body.nick;
	let senha = requisicao.body.senha;

	console.log(nick + ' ' + senha);

	execSQL("SELECT nick FROM Usuario WHERE nick='"+nick+"' AND senha='"+senha+"'", resposta);
})


rota.get('/Aula', (requisicao,  resposta)=>{
	execSQL("SELECT * from Aula", resposta);
})