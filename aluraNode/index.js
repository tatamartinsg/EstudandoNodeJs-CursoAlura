//SUBIR O SERVIDOR NO AR
const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const port = 3000
const Tabelas = require('./infraestrutura/tabelas')


conexao.connect((erro) => {
    if(erro){
        console.log(erro)
    } else {
        console.log('Conectado com sucesso!')

        Tabelas.init(conexao)
        const app = customExpress()
        app.listen(port, () => {
            console.log('Servidor rodando na porta 3000!')
        } )
        
        
    }
})


