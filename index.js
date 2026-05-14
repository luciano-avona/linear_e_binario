function gerarListaAleatoria(tamanho) {
 
    const lista = []
 
    for (let i = 0; i < tamanho; i++) {
 
        // números aleatórios entre 1 e 2000
        lista.push(Math.floor(Math.random() * 2000) + 1)
    }
 
    return lista
}
 
function buscaBinaria(lista, valor) {
 
    let inicio = 0
    let fim = lista.length - 1
 
    while (inicio <= fim) {
 
        let meio = Math.floor((inicio + fim) / 2)
 
        if (lista[meio] === valor) {
            return meio
        }
 
        if (lista[meio] < valor) {
            inicio = meio + 1
        } else {
            fim = meio - 1
        }
    }
 
    return -1
}
 
// ===============================
// GERA LISTA
// ===============================
 
let numeros = gerarListaAleatoria(2000)
 
// ORDENA A LISTA
numeros.sort((a, b) => a - b)
 
// Número que será procurado
let valorProcurado = 1500
 
console.log("Número procurado:", valorProcurado)
 
// ===============================
// INÍCIO DA CONTAGEM
// ===============================
 
const inicioTempo = performance.now()
 
let resultado = buscaBinaria(numeros, valorProcurado)
 
const fimTempo = performance.now()
 
// ===============================
// RESULTADO
// ===============================
 
if (resultado !== -1) {
 
    console.log(
        `Valor encontrado na posição ${resultado}`
    )
 
} else {
 
    console.log("Valor não encontrado")
}
 
// Tempo total
console.log(
    `Tempo gasto: ${(fimTempo - inicioTempo).toFixed(4)} ms`
)

function gerarListaAleatoria(tamanho) {
 
    const lista = []
 
    for (let i = 0; i < tamanho; i++) {
 
        // números aleatórios entre 1 e 2000
        lista.push(Math.floor(Math.random() * 2000) + 1)
    }
 
    return lista
}
 
function buscaLinear(lista, valor) {
 
    for (let i = 0; i < lista.length; i++) {
 
        // mostra o número sendo analisado
        console.log("Verificando:", lista[i])
 
        if (lista[i] === valor) {
            return i
        }
    }
 
    return -1
}
 
// ===============================
// GERA LISTA
// ===============================
 
let numeros2 = gerarListaAleatoria(2000)
 
// Número procurado
let valorProcurado2 = 1500
 
console.log("Número procurado:", valorProcurado)
 
// ===============================
// EXECUTA BUSCA
// ===============================
 
let resultado2 = buscaLinear(numeros, valorProcurado)
 
// ===============================
// RESULTADO
// ===============================
 
if (resultado !== -1) {
 
    console.log(
        `Valor encontrado na posição ${resultado}`
    )
 
} else {
 
    console.log("Valor não encontrado")
}