// Exercício 01 do reduce
// reduce, somando o valor do acumulador com o valor do corrente
function somaNumeros(arr){
    return arr.reduce(function (prev, current){
        //mostrando o valor do prev e do current como objeto
        console.log({ prev });// o prev é um acumulador
        console.log({ current });
        return prev + current;
    }, 0); // se passar o zero aqui, ele vai rodar duas vezes para mostra o valor acumulado de prev, onde em seguida, a soma de prev + current, prev passa a ser 1 e current 2, a soma deles agora é 3
}

const arr = [1, 2];

console.log(somaNumeros(arr));

// Exercício 02 do reduce
const listaProdutos = [
    {
        name: 'Sabao em po',
        preco: 30,
    },
    {
        name: 'Cereal',
        preco: 12,
    },
    {
        name: 'Toalha',
        preco: 30,
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, listaProdutos) {
    return listaProdutos.reduce(function (prev, current, index){
        console.log('Rodada', index + 1);
        console.log({ prev });
        console.log({ current });
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, listaProdutos));