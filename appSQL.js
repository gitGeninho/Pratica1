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

rota.get('/clientes', (requisicao, resposta) =>{
execSQL('SELECT * FROM Clientes', resposta);
})

//o simbolo ? indica que id na rota abaixo é opcional
rota.get('/clientes/:id?', (requisicao, resposta) => {
let filtro = '';
if (requisicao.params.id)
filtro = ' WHERE ID=' + parseInt(requisicao.params.id);
execSQL('SELECT * from Clientes' + filtro, resposta);
})

rota.post('/clientes', (requisicao, resposta) =>{
const id = parseInt(requisicao.body.id);
const nome = requisicao.body.nome.substring(0,150);
const cpf = requisicao.body.cpf.substring(0,11);
execSQL(`INSERT INTO Clientes(ID, Nome, CPF) VALUES(${id},'${nome}','${cpf}')`, resposta);
})