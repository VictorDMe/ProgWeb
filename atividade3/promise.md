# Promises

## Definição
Promisses são objetos que rodam de forma assíncrona e retornam um fracasso ou sucesso de uma determinada tarefa.

## Uso
Por se tratar de um objeto, o mesmo deve ser instanciado utilizando a palavra reservada 'new' seguido do nome do objeto (Promise) e passando os argumentos necessários. No caso de Promise, um exemplo seria:

```
const minhaPromise = new Promise(function(resolve, reject) {})
```

Ou seja, os argumentos é basicamente uma função que deve ser definida (ou chamada) dentro do contexto da promise.

## Exemplos 
Um exemplo básico de uso de Promise seria: 
```
const minhaPromise = new Promise(function(resolve, reject) {
    if (4 > 5) {
        resolve('4 é maior que 5');
    }
    else {
        reject('4 não é maior que 5');
    }
})

minhaPromise
    .then(resultado => console.log(resultado))
    .catch(erro => console.log(erro))
```

Logicamente, o retorno seria '4 não é maior que 5'. Perceba que para obter o dado retornando da promise é necessário usar o `then()` (sucesso), `catch()` (erro) ou uma lógica de async/await. 

## Um exemplo mais elaborado

Considerando que uma função qualquer pode demorar um tempo x qualquer onde: 10 segundos > x > 15 segundos. A partir disso, temos 2 formas de resolver, com promise e sem promise.

### Sem promise:
```
let result

function aguardoFila() {
    const tempoEspera = Math.ceil((Math.random() * 5 + 10) * 1000)
    const isFinalizado = Math.random() > 0.5;
    
    setTimeout(() => {
        if (isFinalizado) {
            result = 'Finalizado'
        }
        else {
            result = 'Volte outro dia'
        }
    }, tempoEspera)
};


aguardoFila();
console.log(result)
```
O resultado será 'undefined'. Isso acontecede porque o tempo de espera ainda não aguardado, logo, uma forma de resolver seria com um outro setTimeout.

```
aguardoFila();
setTimeout(() => console.log(result), 16000);
```
Dessa forma, seria possivel resolver o problema, porém, nada garante que todo tempo de fila será de 15 segundos (ainda sim, estariamos perdendo 1 segundo). Logo, a melhor forma de resolver isso seria moficiando a função a usando Promises.

### Com promise
Modificando a função, temos que:
```
function aguardoFila() {
    const tempoEspera = Math.ceil((Math.random() * 5 + 10) * 1000)
    const isFinalizado = Math.random() > 0.5;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isFinalizado) resolve('Finalizado')
            else reject('Volte outro dia')
        }, tempoEspera)
    })
};
```

Também temos que mudar a forma de como acessamos o resultado para a lógica `catch()`, `then()`.

```
aguardoFila()
    .then(result => console.log(result))
    .catch(error => console.log(error));
```
Dessa forma, teremos o resultado assim que o tempo de espera tiver sido ultrapassado, assim, não perdendo tempo.