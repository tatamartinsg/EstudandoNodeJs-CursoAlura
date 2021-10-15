let listaPessoasAprovadas = [
    {email: 'ada.love@example.com',nota: 11},
    {email: 'marie.curie@example.com', nota: 12},
    {email: 'margaret.hamilton@example.com', nota: 10},
    {email: 'alan.zoka@tijolinho.com', nota: 8}
];
const objctEmails = Object.keys(listaPessoasAprovadas).map(key => listaPessoasAprovadas[key][nota])

/* const enviarEmail = (objetoEmail) => {
    console.log(`Email para ${objetoEmail.email} com a nota ${objetoEmail.nota} enviado com sucesso!`);
};
 */

/* listaEmails = listaPessoasAprovadas.map((email =>{
    return { email: email, nota:12}
})) */
/* listaEmails.forEach((objetoEmail) => enviarEmail(objetoEmail)); */

