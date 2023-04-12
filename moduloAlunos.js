const alunos = [
    {
        nome: "Matilde",
        media: 4
    },

    {
        nome: "Ricota Malucota",
        media: 8.5
    },

    {
        nome: "Vovô Paulo",
        media: 5
    }
]

const filtrarAlunosPorNome = (nome) => {
    const nomesEncontrados = alunos.filter(aluno => aluno.nome === nome)
    return nomesEncontrados
}

const filtrarAlunosPorMedia = (media) => {
    const mediasEncontradas = alunos.filter(aluno => aluno.media >= media)
    return mediasEncontradas
}

module.exports = [
    alunos,
    filtrarAlunosPorNome,
    filtrarAlunosPorMedia
]