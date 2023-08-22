function transposeMatriz(matriz) {
    let transMatriz = []
    for (let len = 0; len < matriz[0].length; len++) {
        let nlinha = []
        for (const linha of matriz) nlinha.push(linha[len]) 
        transMatriz.push(nlinha)
    }
    return transMatriz
}

let matriz = [
    [1, 2, 3, 4],
    [4, 5, 6, 6],
    [7, 8, 9, 91]
]

console.log(transposeMatriz(matriz))