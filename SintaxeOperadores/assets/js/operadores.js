// operadores
function comparaNumeros(num1, num2){

    if(!num1 || !num2) return 'Defina os nùmeros!'
    const primeiraFrase = criarPrimeiraFrase(num1, num2);
    const segundaFrase =  criarSegundaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`;
}

// primeira frase
function criarPrimeiraFrase(num1, num2){
    let saoIguais = '';

    if(num1 !== num2) {
        saoIguais = 'não';
    }

    // concatenando strings
    return ` Os números ${num1} e ${num2} ${saoIguais} são iguais.\n`;
}

// segunda frase
function criarSegundaFrase(num1, num2){
    const soma = num1 + num2; // variável tipo number
    
    let resultado10 = 'menor';
    let resultado20 = 'menor';

    const compara10 = soma > 10; // variável tipo booleana (true/false)
    const compara20 = soma > 20;

    if(compara10){
        resultado10 = 'maior';
    }

    if(compara20){
        resultado20 = 'maior';
    }
    
    return `Sua soma é ${soma}.\n É ${resultado10} que 10.\n É ${resultado20} que 20.`;
}

console.log(comparaNumeros(10,9));