module.exports = function passarParametros(...params) {
    return params.map(params => `Boa Semana, ${params}!`+`\r`)
}