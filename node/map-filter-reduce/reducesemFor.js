let numeros = []
for (i=0; i<11; i++){
    if (i%2 == 0){
        numeros.push(i)
    }
}

const somaReduce = numeros.reduce(function(valorAtualAcumulador, valorArray) {
    return valorAtualAcumulador + valorArray;
}, 0)

console.log('soma reduce:', somaReduce)