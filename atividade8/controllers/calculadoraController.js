const express = require('express');

function mostrarFormulario(req, res) {
    res.sendFile('views/index.html', { root: __dirname + '/../' });
}

function calcular(req, res) {
    const numeroA = parseFloat(req.body.numeroA);
    const numeroB = parseFloat(req.body.numeroB);
    const operacao = req.body.operacao;
    let resultado;

    switch (operacao) {
        case '+':
            resultado = numeroA + numeroB;
            break;
        case '-':
            resultado = numeroA - numeroB;
            break;
        case '*':
            resultado = numeroA * numeroB;
            break;
        case '/':
            resultado = numeroA / numeroB;
            break;
        default:
            resultado = "Operação inválida";
    }

    res.render('resultado', { resultado });
}

module.exports = {
    mostrarFormulario,
    calcular
};