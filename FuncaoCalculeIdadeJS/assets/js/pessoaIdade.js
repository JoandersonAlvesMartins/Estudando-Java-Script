// mostrando pessoa mais idade vinda de um vetor

const pessoa = [
    {
        nome: "Maria",
        idade: 30,
    },
    {
        nome: "Carla",
        idade: 26,
    },
    {
        nome: "Joanderson",
        idade:40,
    },
];

// estrutura com for()
function calculaIdade(anos) {

    let calculaIdadeCall = [];
    for (let i = 0; i < pessoa.length; i++){
        let {nome, idade} = pessoa[i];
        if(idade > 0){
            calculaIdadeCall.push(nome,idade);
        }
    }
    return calculaIdadeCall;
}

// metodo call, você manda o parâmetros apois a virgula
console.log(calculaIdade.call(pessoa, 30));
// metodo apply, neste você tem que mandar o parâmetro dentro de conchetes
console.log(calculaIdade.apply(pessoa, [30]));