const numeros = [2,3,6,5,10]

const novoArraymap = numeros.map( (aplicaFuncao => { return aplicaFuncao*2}) ) 
/*const novoArraymap = numeros.map( (aplicaFuncao => aplicaFuncao*2) )  */

const novoArraymap2 = numeros.map(function(aplicaFuncao2) { return aplicaFuncao2 * 3 } )
console.log(novoArraymap)
console.log(novoArraymap2)