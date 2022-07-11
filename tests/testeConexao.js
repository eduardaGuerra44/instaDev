// 1 - Importar o sequelize
const sequelize = require('sequelize');

// 2 - Elencar os dados para conexão com o BD
const config = {
    username:"root",
    password:"vaiplaneta",
    host:"localhost",
    port:3306,
    dialect:"mysql",
    database:"osmaker"
}

// 3 - Criar a conexão com o banco!
const conexao = new sequelize(config)

// 4 - Realizar uma consulta!!!
let promessa = conexao.query("SELECT * FROM funcionarios LIMIT 0,5");

promessa
.then(
    (dados)=>{
        console.log(dados)
        conexao.close();
    }
)