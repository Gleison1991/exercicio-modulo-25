// função que retorna aprovados com média 6 ou superior utilizando o filter

const alunos = [
    { nome: "Renata", nota: 3 },
    { nome: "Fabio", nota: 6 },
    { nome: "Antonio", nota: 8 },
    { nome: "Ferreira", nota: 7 },
    { nome: "Ana", nota: 4 },
    { nome: "Fabricio", nota: 10 },
    { nome: "João", nota: 7 },
    { nome: "Biatriz", nota: 5 },
    { nome: "Maria", nota: 2 },
];

function retornaAprovados(alunos) {
    let alunosAprovados = alunos.filter((resultado) => {
        return resultado.nota >= 6;
    });
    return alunosAprovados;
}

console.log(retornaAprovados(alunos));