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
    },

    {
        nome: "Lua",
        media: 1000000
    }
]

const filtrarAlunosPorNome = (array, nome) => {
    const nomesEncontrados = array.filter(index => index.nome === nome)
    return nomesEncontrados
}

const filtrarAlunosPorMedia = (array, media) => {
    const mediasEncontradas = array.filter(index => index.media >= media)
    return mediasEncontradas
}

module.exports = {
    alunos,
    filtrarAlunosPorNome,
    filtrarAlunosPorMedia
}