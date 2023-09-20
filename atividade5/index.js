const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = 8080;


app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get("/", function (req, res) {
    res.render("index");
});

app.post("/dados", function (req, res) {
    res.render("dados.html", {
        'nome': req.body['name'],
        'loc': req.body['loc'], 
        'telefone': req.body['telefone'], 
        'data': req.body['date']
    }
    );
});


app.listen(PORT, () => console.log('Aplicativo rodando na porta', PORT))