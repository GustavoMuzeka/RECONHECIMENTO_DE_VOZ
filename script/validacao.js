
tentativa = 3

function verificaChute(chute){
    const numero = +chute

    if (tentativa > 0){
    if(VerificaNumero(numero)
    ){
        tentativa --
        return elementoChute.innerHTML += `<div> Dados Inválidos, diga um número. </div>`
    }if(MaiorMenor(numero)){
        tentativa --
        return elementoChute.innerHTML += `<div> Valor Inválido, diga um número entre ${menorValor} e ${maiorValor} </div>`
    }if(numero === numeroSecreto){
        return document.body.innerHTML = `<p> Você acertou o numero! Parabéns.</p>
                                        <h1> o Número secreto era <strong> ${numeroSecreto}</strong>.</h1>
                                        <button id="botao"> Gostaria de jogar novamente? Clique aqui </button>`
                                            
                                        
    }
    else{
        if(numero < numeroSecreto){
            tentativa --
        return elementoChute.innerHTML += `<div> o Número Secreto é Maior <i class="fa-solid fa-up-long"></i></div>`
        }if(numero > numeroSecreto){
            tentativa --
        return elementoChute.innerHTML += `<div> o Número Secreto é Menor <i class="fa-solid fa-down-long"></i></div>`   
        }
    }
}else{
    return document.body.innerHTML = `<h1> Game Over </h1>
                                <h1> o Número secreto era <strong> ${numeroSecreto}</strong>.</h1>
                                        <button id="botao"> Gostaria de jogar novamente? Clique aqui </button>`
}
}

function MaiorMenor(numero) {

    return numero > maiorValor || numero < menorValor 
}

function VerificaNumero(numero) {
    return Number.isNaN(numero)
}

document.body.addEventListener('click' , e =>{if (e.target.id == "botao"){
    window.location.reload()
}} )