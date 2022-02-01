// debugando erros em código
// exemplo
/* função que retorna a string "String inválida!" como menssagem de erro caso na hora de sua execução de algum erro
function verificaPalindromo(string) {
    if (!string) return "String inválida!";

    return string === string.split('').reverse().join('');
}

verificaPalindromo('cat');

// neste exemplo, o throw mostra o erro caso haja na hora de sua execução
function verificaPalindromo(string) {
    if (!string) throw "String inválida!";

    return string === string.split('').reverse().join('');
}

verificaPalindromo('cat');
*/

// tipos de erro
function validaArray(arr, num) {
    // usando o try catch
    try {
        // ReferenceError, verifica se os parametros estão vazios
        if(!arr && !num) throw new  ReferenceError("Envie os Parâmetros!");
        // TypeError, verifica o tipo do arr
        if(typeof arr !== 'object') throw new TypeError("O array precisa ser do tipo object!");
        // TypeError, verifica o tipo do num
        if(typeof num !== 'number') throw new TypeError("O número precisa ser do tipo number!");
        // RangeError, verificando o tamnaho do arr e num
        if(arr.length !== num) throw new RangeError("Tamanho Inválido.");   
        // caso o array seja válido, retornar o arr
        return arr;
    } catch (error) {
        // usando o operador instanceof
        // se o erro é uma instancea de...
        if(error instanceof ReferenceError){
            console.log("Erro!\nEste erro é um ReferenceError!");
        /*throw error;
            // ou podemos usar essa sintaxe apois o console
            console.log(error.name);
            console.log(error.stack);
            */
            // ou também dessa forma
            console.log(error.message);
        } else if(error instanceof TypeError){
            console.log("Erro!\nEste erro é um TypeError!");
        /*throw error;
            // ou podemos usar essa sintaxe apois o console
            console.log(error.name);
            console.log(error.stack);
            */
            // ou também dessa forma
            console.log(error.message);
        } else if(error instanceof RangeError){
            console.log("Erro!\nEste erro é um RangeError!");
            /*throw error;
            // ou podemos usar essa sintaxe apois o console
            console.log(error.name);
            console.log(error.stack);
            */
            // ou também dessa forma
            console.log(error.message);
        } else {
            console.log("Erro!\nTipo de erro não esperado:"+ error);
        }
    }
}

// array sem referência
console.log(validaArray());
// array não é do tipo object
console.log(validaArray(5,5));
// array não é do tipo number
console.log(validaArray([], 'a'));
// array com tamnho diferente de num
console.log(validaArray([], 5));
// retornando o array sem erro
console.log(validaArray([1,2,3,4,5], 5));
