let numeros = []
for (var i = 0; i<11; i++){
    if (i%2 == 0){
        numeros.push(i)
    }
}

console.log(numeros)

const numerosFiltrados = numeros.filter(filtrarnumeros => {
    return filtrarnumeros % 2 === 0; }
)


/* console.log(numerosFiltrados) */


const arrayMapFilter = numeros
.filter (numero => numero % 2 === 0 )
.map (numero => numero * 2)

/* console.log(arrayMapFilter) */


