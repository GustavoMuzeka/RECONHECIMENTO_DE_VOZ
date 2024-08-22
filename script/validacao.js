
function verificaChute(chute){
    const numero = +chute

    if(VerificaNumero(numero)
    ){
        
        return elementoChute.innerHTML += `<div> Dados Inválidos, diga um número. </div>`
    }if(MaiorMenor(numero)){
        return elementoChute.innerHTML += `<div> Valor Inválido, diga um número entre ${menorValor} e ${maiorValor} </div>`
    }if(numero === numeroSecreto){
        return document.body.innerHTML = `<p> Você acertou o numero! Parabéns.</p>
                                        <h1> o Número secreto era <strong> ${numeroSecreto}</strong>.</h1>
                                        <button id="botao"> Gostaria de jogar novamente? Clique aqui </button>`
                                            
                                        
    }
    else{
        if(numero < numeroSecreto){
        return elementoChute.innerHTML += `<div> o Número Secreto é Maior <i class="fa-solid fa-up-long"></i></div>`
        }if(numero > numeroSecreto){
        return elementoChute.innerHTML += `<div> o Número Secreto é Menor <i class="fa-solid fa-down-long"></i></div>`   
        }
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