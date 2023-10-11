const express = require('express');
const mustacheExpress = require('mustache-express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine('html', mustacheExpress()); 

app.set('view engine', 'html');
app.set('views', __dirname + '/views');
const PORT = 8080;


app.get("/", (req, res) => res.render("index"));

app.post("/dados", (req, res) => res.render("dados.html", req.body));


app.listen(PORT, () => console.log('Aplicativo rodando na porta', PORT))