const pessoas = [
    {
        nome: 'Ayrton',
        idade: 27
    },
    {
        nome: 'Maria',
        idade: 20
    },
    {
        nome: 'Madu',
        idade: 16
    },
    {
        nome: 'Luisa',
        idade: 14
    },
    {
        nome: 'Breno',
        idade: 22
    },
    {
        nome: 'Tássia',
        idade: 19
    },
    {
        nome: 'Joao',
        idade: 13
    }
];

const pessoasAgrupadas = pessoas.reduce(function (valorInicialAcumulador, valorArray) {
    const maior_menor = valorArray.idade >= 18 ? 'maiores' : 'menores';
    /* console.log(valorArray.idade) */
    console.log(maior_menor)
    valorInicialAcumulador[maior_menor].push(valorArray);
    return valorInicialAcumulador;

}, { maiores: [],  menores: [] })

console.log(pessoasAgrupadas)

