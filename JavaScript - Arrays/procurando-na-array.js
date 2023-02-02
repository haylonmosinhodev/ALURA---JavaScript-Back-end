const alunos = ['haylon', 'arthur', 'lucca', 'suzanne', 'rosa'];
const medias = [10, 9, 8, 7, 6];

const listaDeAlunosMedia = [alunos, medias];


mediasAluno ('arthur');


function mediasAluno (aluno){
    const [alunos1, medias1] = listaDeAlunosMedia;
    
    if (alunos1.includes(aluno)){   
        
    const indiceAluno = alunos1.indexOf(aluno);
    const mediaAluno = medias1[indiceAluno];

    console.log (`O Aluno ${aluno} tem a media ${mediaAluno}.`);

} else {console.log (`Aluno não cadastrado`)}

}