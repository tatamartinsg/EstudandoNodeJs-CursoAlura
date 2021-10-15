const sequence = {
    _id: 1,
    get id() { return this._id++}
}

const produtos = {

}

function salvarProduto(produto){
    if (!produto.id) produto.id = sequence.id //se tiver designado, substitui pela versão mais nova
    produtos[produto.id] = produto //se nao tiver setado, adiciona um novo elemento dentro de produtos.id

    return produto
}

function getProduto(id) {
    return produtos[id] || {}
    
}

function getProdutos() {
    return Object.values(produtos)
}

module.exports = { salvarProduto, getProduto, getProdutos}