import dados from '../data/dados.js'

export function retornaDados() {
    return dados
}

export function retornaInflacaoAno(ano) {
    let listaInflacaoAno = dados.filter(inflacao => inflacao.ano === ano)
    return listaInflacaoAno
}

export function validaNumero(numero) {
    if (isNaN(numero)) {
        return false
    } else {
        return true
    }
}

export function validaId(id) {
    if (id >= 1 && id <= 101) {
        return true
    }
    else {
        return false
    }
}

export function retornaInflacaoId(id) {
    const inflacaoId = dados.find(inflacao => inflacao.id === id)
    return inflacaoId
}

export function verificaValores(valor, mesInicial, mesFinal, anoInicial, anoFinal) {
    let erros = []

    if (!valor || isNaN(valor)) {
        erros.push({ erro: "Parametro {valor} em falta ou inválido" })
    }

    if (!mesInicial || isNaN(mesInicial) || mesInicial < dados[0].mes) {
        erros.push({ erro: "Parametro {mesInicial} em falta ou inválido" })
    }

    if (!mesFinal || isNaN(mesFinal) || mesFinal > dados[dados.length - 1].mes && anoFinal === dados[dados.length -1].ano) {
        erros.push({ erro: "Parametro {mesFinal} em falta ou inválido" })
    }

    if (!anoInicial || isNaN(anoInicial) || anoInicial < dados[0].ano) {
        erros.push({ erro: "Parametro {anoInicial} em falta ou inválido" })
    }

    if (!anoFinal || isNaN(anoFinal) || anoFinal > dados[dados.length - 1].ano) {
        erros.push({ erro: "Parametro {anoFinal} em falta ou inválido" })
    }

    return erros
}

export function calculaReajuste(valor, mesInicial, mesFinal, anoInicial, anoFinal) {

    let reajustes = 1

    for (let inflacao of dados) {
        if (inflacao.ano === anoInicial) {
            if (inflacao.mes >= mesInicial && inflacao.mes <= mesFinal) {
                reajustes *= (inflacao.ipca / 100) + 1
            }
        } else if (inflacao.ano === anoFinal) {
            if (inflacao.mes <= mesFinal) {
                reajustes *= (inflacao.ipca / 100) + 1
            }
        } else if (inflacao.ano > anoInicial && inflacao.ano < anoFinal) {
            reajustes *= (inflacao.ipca / 100) + 1
        }
    }

    let resultado = valor * reajustes

    return parseFloat(resultado.toFixed(2))
}