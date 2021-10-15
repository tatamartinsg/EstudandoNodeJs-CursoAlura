const nomes = ['Tássia','Joaquim','Lucas','Pedro','Ana']

const novoArrayNomeMinusculo = nomes.map( (nomes => { return nomes.toLowerCase() }) )
console.log(novoArrayNomeMinusculo)

const filtrar = nomes.filter(teste => teste === 'Lucas')
console.log(filtrar)
