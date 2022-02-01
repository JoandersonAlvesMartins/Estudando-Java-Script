// palíndromo é quando uma palavra ou fraze não muda o seu sentido mesmo  que seja lida de tráz pra frente ex: ovo e etc...

// solução 01
function verificapolindromo(string) {
    if (!string) return "String Inexistente!";

    return string.split("").reverse().join("") === string;
}

/*
let myVar = null;
console.log(verificapolindromo(myVar));
*/

// solução 02
function verificapolindromo2(string){
    if (!string) return "String Inexistente";

    for (let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length - 1 - i]){
            return false;
        }
    }
    return true;
}

console.log(verificapolindromo2("gato"));