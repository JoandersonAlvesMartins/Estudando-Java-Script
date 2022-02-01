Orientação a Objetos
Este repositório contém a atividade prática do Curso "Orientação a Objetos", que faz parte do Basecamp de Javascript que minstrei pela Digital Innovation One.

Atividade: Conta Bancária
Nesta atividade, vamos testar os conceitos de Orientação a Objetos simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma.

Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
Dentro de ContaBancaria, construa o getter e o setter de saldo;
Dentro de ContaBancaria, crie os métodos sacar e depositar;
Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;
Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.


// execultar código no console do navegador
// criando uma conta
const minhaConta = new ContaCorrente(1, 234, true)
// saldo da conta
minhaConta.saldo
// depositar
minhaConta.depositar(1000)
// sacar valor da conta
minhaConta.sacar(500)
// ver saldo
minhaConta.saldo
// tentando sacar vai dar um erro
minhaConta.sacar(600)

============================================================
// criando conta poupanca
const contaPoup = new ContaPoupanca(1, 22)
// criando conta Universitaria
const contaUni = new ContaUniversitaria(1, 22)
// depositando na conta universitaria
contaUni.depositar(1000)
// sacar acima do limite 500
contaUni.sacar(550)