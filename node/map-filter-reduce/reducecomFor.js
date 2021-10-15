var i = 0
let numeros = []
for (i=0; i<11; i++){
    if (i%2 == 0){
        numeros.push(i)
    }
}
let soma = 0;

let novoArraySomaFor = []
for(i=0; i<numeros.length; i++){
    novoArraySomaFor.push(numeros[i])
    soma += novoArraySomaFor[i]
}

console.log(novoArraySomaFor)

console.log('soma dos elementos do novo array: ',soma)