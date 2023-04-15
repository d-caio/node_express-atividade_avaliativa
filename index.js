const moduloAlunos = require("./moduloAlunos")
const express = require("express")

const app = express()

app.use(express.json())

const { alunos } = moduloAlunos
const { filtrarAlunosPorNome } = moduloAlunos
const { filtrarAlunosPorMedia } = moduloAlunos

let alunosAtualizados = alunos

app.get("/alunos", (req, res) => {
    const { nome, media } = req.query
    if (nome) {
        const resultado = filtrarAlunosPorNome(alunosAtualizados, nome)
        res.send(resultado)
    }

    if (media) {
        const resultado = filtrarAlunosPorMedia(alunosAtualizados, media)
        res.send(resultado)
    }

    res.send(alunos)
})

app.post("/alunos/novo", (req, res) => {
    const { nome, media } = req.body
    if (nome && media) {
        alunosAtualizados.push(req.body)
        console.log(alunosAtualizados)
        res.json(`Aluno adicionado com sucesso. Nome: ${nome}; Média: ${media}`)
    } else {
        res.status(400).json("Forneça dados válidos.")
    }
})

app.post("/alunos/deletar/:index", (req, res) => {
    const { index } = req.params
    if (alunosAtualizados[index] !== undefined) {
        alunosAtualizados.splice(index, 1)
        console.log(alunosAtualizados)
        res.json(`Aluno removido com sucesso.`)
    } else {
        res.status(400).json("Forneça dados válidos.")
    }
})

app.post("/alunos/atualizar/:index", (req, res) => {
    const { index } = req.params
    const { nome, media } = req.body
    if (alunosAtualizados[index] !== undefined) {
        alunosAtualizados[index].nome = nome
        alunosAtualizados[index].media = media
        console.log(alunosAtualizados)
        res.json(`Dados atualizados com sucesso.`)
    } else {
        res.status(400).json("Forneça dados válidos.")

    }
})

app.listen(3000)