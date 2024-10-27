const produtoPreco = [
    { nome: 'arroz cristal', preco: 37.50 },
    { nome: 'arroz pampa', preco: 29.50 }
]
console.log('valor de custo do produto é ')
console.log(produtoPreco + '\n')

const margemLucro = .30
const produtoLucro = produtoPreco.map( item => ( item['preco'] * margemLucro).toFixed(2) )

console.log('valor de lucro do produto é')
console.log(produtoLucro)
