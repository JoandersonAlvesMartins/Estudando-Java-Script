// filtrando valores pares com filter
// desafio, filtrar um valor de um array de string
// maneira um de faser
/*
function filtraPares(arr){
    return arr.filter(function(item){
        return item % 2 === 0;
    })
}
*/

// maneira dois de faser
function filtraPares(arr){
    return arr.filter(callbackPares);
}

function callbackPares(item){
    return item % 2 === 0;
}

// filtrando valores impares com filter
function filtraImpares(arr){
    return arr.filter(callbackImpares);
}

function callbackImpares(item){
    return item % 2 !== 0;
   // return item % 2 === 1;
}

const meuArray = [1, 23, 55, 67, 30, 2, 4];

// mostrando apenas os valores pares do array
console.log('Números pares',filtraPares(meuArray));
console.log('Números impares',filtraImpares(meuArray));
