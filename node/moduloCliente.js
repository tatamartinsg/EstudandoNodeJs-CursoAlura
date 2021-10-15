const moduloA = require('./moduloA.js')
const { calculaNum } = require('./moduloB.js')
const moduloB = require('./moduloB.js')

console.log(moduloA.ola)
console.log(moduloA.ateLogo)
console.log(moduloA.bemVindo)
console.log(moduloA)

console.log(`Soma: a+b`,moduloB.calculaNum())
console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)