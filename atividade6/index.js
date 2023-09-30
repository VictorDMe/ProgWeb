const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
let alert = require('alert'); 

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
    let show = true

    for (key in req.body) {
        if (req.body[key] == '') {
            alert(`Campo '${key}' vazio. Tente novamente.`)
            show = false;
            break;
        }
    }
    
    if (show) {
        res.render("dados.html", {
            'nome': req.body['name'],
            'loc': req.body['loc'], 
            'telefone': req.body['telefone'], 
            'data': req.body['date']
        });
    }

    else {
        res.render("dados.html", {
            'nome': 'ERRO',
            'loc': 'ERRO', 
            'telefone': 'ERRO', 
            'data': 'ERRO'
        })
    }
});


app.listen(PORT, () => console.log('Aplicativo rodando na porta', PORT))