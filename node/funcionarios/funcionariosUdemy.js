const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = busca => busca.pais === 'China'
const mulheres = busca => busca.genero === 'F'
const salariom = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}
const salarioM = (func, funcAtual) => {
    return func.salario > funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    /* console.log(funcionarios) */

    //filtrar mulher chinesa com menor salário
    const menor = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(salariom)

    const maior = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(salarioM)

    console.log('Funcionária Chinesa com menor salário: ',menor)
    console.log('Funcionária Chinesa com maior salário: ',maior)

})