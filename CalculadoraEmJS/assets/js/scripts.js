
function calculadora () {
    const operacao = Number(prompt('Escolha Uma Opção: \n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)'));

    // condição para verificar se a operação é válida
    if(!operacao || operacao >= 7){
        alert('Erro - Operação Inválida!')
        calculadora();
    } else {

        let n1 = Number(prompt('Insira o Primeiro Número: '));
        let n2 = Number(prompt('Insira o Segundo Número: '));
        let resultado;

        // condição para verificar se as variáveis são válidas
        if(!n1 || !n2){
            alert('Erro - Parâmetros Inválidos!')
                calculadora();

            // função de loop
            function novaOperacao(){
                let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');

                if(opcao = 1){
                    calculadora();
                } else if(opcao = 2){
                    aler('Calculadora Finalizada.')
                } else {
                    alert('Erro - Opção Inválida! \n Digite uma opção válida.')
                    novaOperacao();
                }
            }
        }
/*      // usando condicionais
        if(operacao == 1){
            soma();
        } else if(operacao == 2){
            subtracao();
        } else if(operacao == 3){
            multiplicacao();
        } else if(operacao == 4){
            DivisaoReal();
        } else if(operacao == 5){
            DivisaoInteira();
        } else if(operacao == 6){
            potenciacao();
        }
*/
        // usando swich - case
        switch (operacao) {
            case 1:
                // função Soma
                function soma() {
                    resultado = n1 + n2;
                    alert(`A soma entre os números ${n1} e ${n2} é ${resultado}`)
                    novaOperacao();
                }
                soma();
                break;
            case 2:
                // função Subtração
                function subtracao(){
                    resultado = n1 - n2;
                    alert(`A subtração entre os números ${n1} e ${n2} é  ${resultado}`);
                    novaOperacao();
                }
                subtracao();
                break;
            case 3:
                // função Multiplicação
                function multiplicacao(){
                    resultado = n1 * n2;
                    alert(`A multiplicação entre os números ${n1} e ${n2} é ${resultado}`)
                    novaOperacao();
                }
                multiplicacao();
                break;
            case 4:
                // função Divisão Real
                function divisaoReal(){
                    resultado = n1 / n2;
                    alert(`A divisão entre os números ${n1} e ${n2} é ${resultado}`)
                    novaOperacao();
                }
                divisaoReal();
                break;
            case 5:
                // função Divisão Inteira
                function divisaoInteira(){
                    resultado = n1 % n2;
                    alert(`O resto da divisão entre ${n1} e ${n2} é ${resultado}`)
                    novaOperacao();
                }
                divisaoInteira();
                break;
            case 6:
                // função Potenciação
                function potenciacao(){
                    resultado = n1 ** n2;
                    alert(`O valor ${n1} elevado a ${n2}ª é igual a ${resultado}`)
                    novaOperacao();
                }
                potenciacao();
                break;
        }
    }
}

calculadora();