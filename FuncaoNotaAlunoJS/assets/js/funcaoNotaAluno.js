// array de alunos
const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '18',
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '18',
    },
    {
        nome: 'Paulo',
        nota: 6,
        turma: '2c',
    },
    {
        nome: 'Joanderson',
        nota: 10,
        turma: '4c',
    },
    {
        nome: 'Miguel',
        nota: 3,
        turma: '2c',
    },
];


// função que popula um novo array apenas com alunos aprovados
function alunoAprovado(arr, media) {
    let aprovados = [];

    for(let i = 0; i < arr.length; i++) {
        // utilizando um object destructuring
        const {nota, nome} = arr[i];

        // nova condição
        if (nota >= media) {
            aprovados.push(`Aluno Aprovado: ${nome}, Nota: ${nota}.`);
        }

        /* condição anterior
        if (arr[i].nota >= media) {
            // push o mesmo que add
            aprovados.push(arr[i].nome);
        }
        */
    } 
    return aprovados;
}

function alunoReprovado(arr, media) {
    let reprovados = [];

    for(let i = 0; i < arr.length; i++) {
        // utilizando um object destructuring
        const {nota, nome} = arr[i];

        // nova condição
        if (nota < media) {
            reprovados.push(`Aluno Reprovado: ${nome}, Nota: ${nota}.`);
        }
    } 
    return reprovados;
}

// aprovado
console.log(alunoAprovado(alunos, 7));
// reprovado
console.log(alunoReprovado(alunos, 7));

