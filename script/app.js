let maiorValor = 1000
let menorValor = 0

const numeroSecreto = gerarNumeroAleatorio()
function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor + 1)
    
}
console.log (numeroSecreto)


const elementoMenorValor = document.getElementById('menor_valor');
elementoMenorValor.innerHTML = menorValor

const elementoMaiorvalor = document.getElementById('maior_valor');
elementoMaiorvalor.innerHTML = maiorValor


