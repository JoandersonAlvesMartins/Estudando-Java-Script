// desafio do joanderson, criar um unico array de pessoas e recriar essa estrutura com for()
function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`
}

const pessoa1 = {
    nome: "Maria",
    idade: 30,
};

const pessoa2 = {
    nome: "Carla",
    idade: 26,
};

const pessoa3 = {
    nome: "Joanderson",
    idade: 40, 
};

// metodo call, você manda o parâmetros apois a virgula
console.log(calculaIdade.call(pessoa2, 30));
// metodo apply, neste você tem que mandar o parâmetro dentro de conchetes
console.log(calculaIdade.apply(pessoa3, [30]));