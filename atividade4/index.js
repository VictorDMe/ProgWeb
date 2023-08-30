const express = require('express');
const calc = require('./util/calculadora');

const app = express();
const PORT = 8080;

app.get("/somar/:a/:b", (req, res) => {
    let a = req.params.a;
    let b = req.params.b;
    console.log(`Requisição de soma realizada.`);
    
    res.send(`${a} + ${b} = ${calc.somar(a, b)}`);
})


app.get("/subtrair/:a/:b", (req, res) => {
    let a = req.params.a;
    let b = req.params.b;
    
    console.log(`Requisição de subtração realizada.`);
    res.send(`${a} - ${b} = ${calc.subtrair(a, b)}`);
})

app.get("/multiplicar/:a/:b", (req, res) => {
    let a = req.params.a;
    let b = req.params.b;
    
    console.log(`Requisição de multiplicação realizada.`);
    res.send(`${a} * ${b} = ${calc.multiplicar(a, b)}`);
})

app.get("/dividir/:a/:b", (req, res) => {
    let a = req.params.a;
    let b = req.params.b;
    
    console.log(`Requisição de divisão realizada.`);
    res.send(`${a} / ${b} = ${calc.dividir(a, b)}`)
})

app.listen(PORT, () => console.log('Aplicativo rodando na porta', PORT))