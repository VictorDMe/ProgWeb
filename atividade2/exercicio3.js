function multMatriz(ma, mb) {
    let resultMatriz = []
    for (let len = 0; len < ma[0].length; len++) {
        let tmp_m = []

        let temp_a = ma[len]

        for (let p = 0; p <= 1; p++) {
            let temp_b = []
            for (const arr of mb) {
                temp_b.push(arr[p])
            }

            let soma = 0
            for (let idx = 0; idx < temp_a.length; idx++) {
                soma += temp_a[idx] * temp_b[idx] 
            }
            tmp_m.push(soma)
        }
        resultMatriz.push(tmp_m)
    }
    return resultMatriz
}


let ma_a = [
    [1, 3],
    [2, 5]
]

let ma_b = [
    [2, 2],
    [0, 1]
]

console.log(multMatriz(ma_a, ma_b))