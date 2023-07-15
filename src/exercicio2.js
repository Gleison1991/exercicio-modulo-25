// função que retorna aprovados com média 6 ou superior utilizando o push

const alunos = [
    {nome: "joão", nota: 10},
    {nome: "carlos", nota: 8},
    {nome: "ana", nota: 7},
    {nome: "beatriz", nota: 6},
    {nome: "bruno", nota: 5},
    {nome: "denise", nota: 4},
];

function retornaAprovados(alunos) {
    let aprovados =[];

    for(let i= 0; i < alunos.length; i++) {
        if(alunos[i].nota >= 6 ) {
            aprovados.push(alunos[i]);
        }
    }
    return aprovados;
}

console.log(retornaAprovados(alunos));