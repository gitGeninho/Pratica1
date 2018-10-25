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
		.catch(erro => resposta.json(erro));
}

rota.get('/Usuarios', (requisicao, resposta) =>{
execSQL('SELECT * FROM Usuarios', resposta);
})

//o simbolo ? indica que id na rota abaixo é opcional
rota.get('/Usuarios/:nick?', (requisicao, resposta) => {
let filtro = '';
if (requisicao.params.nick)
filtro = ' WHERE ID=' + parseInt(requisicao.params.nick);
execSQL('SELECT * from Usuarios' + filtro, resposta);
})

rota.post('/Usuarios', (requisicao, resposta) =>{
const nick = parseInt(requisicao.body.nick);
const nome = requisicao.body.nome.substring(0,150);
const cpf = requisicao.body.cpf.substring(0,11);
execSQL(`INSERT INTO Usuarios(nick, Nome, senha) VALUES(${nick},'${nome}','${cpf}')`, resposta);
})