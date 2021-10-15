//CONFIGURAR QUALQUER COISA/MODIFICAÇÃO QUE PRECISAMOS FAZER NO EXPRESS
const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')

module.exports = () => {
    
    const app = express()
    app.use(bodyParser.urlencoded({extended: true})) //use vem do express
    app.use(bodyParser.json())

    consign()
        .include('controllers')
        .into(app)
    return app
}   
