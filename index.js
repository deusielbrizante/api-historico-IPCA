import express from 'express'
import { calculaReajuste, retornaDados, retornaInflacaoAno, retornaInflacaoId, validaId, validaNumero, verificaValores } from './services/funcoes.js'

const app = express()

app.get('/historicoIPCA/calculo', (req, res) => {
    const valor = parseFloat(req.query.valor)

    const mesInicial = parseInt(req.query.mesInicial)
    const mesFinal = parseInt(req.query.mesFinal)

    const anoInicial = parseInt(req.query.anoInicial)
    const anoFinal = parseInt(req.query.anoFinal)

    const verificaErros = verificaValores(valor, mesInicial, mesFinal, anoInicial, anoFinal)

    if (verificaErros.length > 0) {
        res.status(404).json(verificaErros)
    } else {
        const resultadoReajuste = calculaReajuste(valor, mesInicial, mesFinal, anoInicial, anoFinal)
        res.json({ "resultado": resultadoReajuste })
    }
})

app.get('/historicoIPCA', (req, res) => {
    const ano = req.query.ano
;
    if (ano) {
        if (!validaNumero(ano)) {
            res.status(400).json({ erro: "Parâmetro {ano} não é um número" })
        } else if (ano >= 2015 && ano <= 2023) {
            const anoInflacao = retornaInflacaoAno(parseInt(ano))
            res.json(anoInflacao)
        } else {
            res.status(404).json({ erro: "Parâmetro {ano} não encontrado" })
        }
    } else {
        const inflacao = retornaDados()
        res.json(inflacao)
    }
})

app.get('/historicoIPCA/:id', (req, res) => {
    const id = req.params.id

    if (id) {
        if (!validaNumero(id)) {
            res.status(400).json({ erro: "Parâmetro {id} não é um número" })
        } else if (validaId(id)) {
            const inflacao = retornaInflacaoId(parseInt(id))
            res.json(inflacao)
        } else {
            res.status(404).json({ erro: "Parâmetro {id} não encontrado" })
        }
    } else {
        res.status(400).json({ erro: "Parâmetro {id} inválido" })
    }
})

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080")
})