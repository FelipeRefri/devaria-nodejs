/*
const ListaDeProdutosDisponiveis = [
    "Pão",
    "Leite",
    "Café",
    "Laranja",
    "Macarrão",
    "Sabonete",
    "Detergente",
];

const ListaDeArgumentos = process.argv.slice(2);

const ListaDeProdutosSolicitadosDisponiveis = ListaDeProdutosDisponiveis.filter(produto =>{
    return ListaDeArgumentos.find(argumento => argumento === produto);
})

ListaDeProdutosSolicitadosDisponiveis.forEach(produto => console.log(`Este produto nós temos: ${produto}`));
*/

const listaDeProdutosDisponiveis = [
    "Pao",
    "Leite",
    "Cafe",
    "Laranja",
    "Macarrao",
    "Sabonete",
    "Detergente",
];

const listaDeArgumentos = process.argv.slice(2);

const listaDeProdutosSolicitadosDisponiveis = listaDeProdutosDisponiveis.filter(produto =>{
    return listaDeArgumentos.find(argumento => argumento === produto);
}); 
listaDeProdutosSolicitadosDisponiveis.forEach(produto => console.log(`Este produto nos temos: ${produto}`));