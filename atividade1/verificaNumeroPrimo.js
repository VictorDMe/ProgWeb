let num = 6
let isPrimo = true

for (let index = 2; index < num; index++) {
    if (num % index == 0) isPrimo = false
}

if (isPrimo) console.log("1")
else console.log("0")