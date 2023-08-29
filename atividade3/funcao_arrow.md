# Função Arrow

A função arrow tem como objetivo diminuir a verbosidade durante o processo de criação de funções. Semelhante ao que é funções anónimas em outras lingaugems de programação. 

Exemplo com função soma: 

- Sem Arrow: 
``` 
function soma(x, y) { 
    return x + y
}
```

- Com Arrow: 
```
const soma = (x, y) => {
    return x + y
}
```
## Diminuindo...


Quando se há somente uma instrução, as chaves podem ser omitidas, dessa forma: 
```
const soma = (x, y) => return x + y
```

Além disso, quando se há somente uma instrução, o return também pode ser omitido, dessa forma:
```
const soma = (x, y) => x + y
```

## Contexto de execução

As funções Arrow **NÃO** possuem escopo de execução como as funções tradicionais de javascript.