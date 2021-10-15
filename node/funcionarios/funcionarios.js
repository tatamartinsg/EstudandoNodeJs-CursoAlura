const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
let aux, armazena_posicao_maior, armazena_posicao_menor, menor, maior, qntd_mulher_chinesa = 0


axios.get(url).then(response => {
    const funcionarios = response.data
/*     for (var i = 0; i < 15; i++){
        console.log('=====MOSTRAR TODOS========')
        
/*         console.log(funcionarios[i].nome) */

    for (var i = 0; i<funcionarios.length; i++){
        if ((funcionarios[i].genero == 'F') && (funcionarios[i].pais == 'China')){
            aux = i; // vai pegar o ultimo índice de toda mulher chinesa
            qntd_mulher_chinesa += 1
            
            if (aux == 11){
                maior = funcionarios[i].salario
                menor = funcionarios[i].salario
            }
            else if (funcionarios[i].salario > maior){
                maior = funcionarios[i].salario
                armazena_posicao_maior = i 
            
            }
            else if (funcionarios[i].salario < menor){
                menor = funcionarios[i].salario
                armazena_posicao_menor = i
            }
            
          /*   console.log('=====MOSTRAR APENAS MULHERES=======')
            console.log(funcionarios[i]) */
        }
       

    }
    /* console.log('aux2: ',aux2) */
    console.log('Quem tem o maior salário entre as mulheres: ',funcionarios[armazena_posicao_maior])
    console.log('Quem tem o menor salário entre as mulheres: ',funcionarios[armazena_posicao_menor])
    console.log('Menor salário das mulheres chinesas: ',menor)
    console.log('Maior salário das mulheres chinesas: ',maior)
    console.log('Quantidade de mulheres chinesas: ', qntd_mulher_chinesa)

})