const PORT = 8080
const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));
const calculadoraRoutes = require('./routes/calculadora');

app.use('/', calculadoraRoutes);

app.listen(PORT, () => console.log('Aplicativo rodando na porta', PORT))