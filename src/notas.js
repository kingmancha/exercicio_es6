const alunos = [
    { nome: "João", nota: 7 },
    { nome: "Maria", nota: 5 },
    { nome: "Pedro", nota: 8 },
    { nome: "Ana", nota: 6 },
    { nome: "Carlos", nota: 4 },
];

function alunosAprovados(arr) {
    return arr.filter(aluno => aluno.nota >= 6);
}

const alunosAprovadosArray = alunosAprovados(alunos);

console.log("Alunos aprovados:");
console.log(alunosAprovadosArray);