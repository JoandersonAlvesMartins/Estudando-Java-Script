// retorne apenas os valores unicos de um array
const meuArray = [30, 30, 40, 5, 8, 8, 223, 2049, 3034];

function valoresUnicos(arr) {
     /* esse metodo apenas retorn um set com os valores unicos
        -> const mySet = new Set(arr);
        -> return mySet;
    */

// retornar um novo array com os valores unicos usando o set 
    const mySet = new Set(arr);
    return [`Valores Unicos do array: `,...mySet]; // [...] tecnica spreds para que os elementos do set se tornem elementos de um array
}

 console.log(valoresUnicos(meuArray));