matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
transposeMatriz = []

let pos = 0

for (let linhas in matriz) {
    let linha = matriz[linhas]
    let nova_linha = []
    for (let index = 0; index < linha.length; index++) {
        nova_linha.push(matriz[index][pos])
    }
    transposeMatriz.push(nova_linha)
    pos++;
}

console.log(transposeMatriz)