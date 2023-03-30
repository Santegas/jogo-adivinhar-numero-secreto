function verificaSeOChutePossuiUmValorValido(chute){

    const numero= +chute
    
    if (chuteForInvalido(numero)){
        elementoChute.innerHTML += '<div>valor inválido</div>'
        return
    }

    if (numeroMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML += `
        <div> Valor inválido: Fale um número entre ${menorValor} e ${maiorValor} </div>
        `
        return
    }

    if (numero === numeroSecreto){

        document.body.innerHTML =   `           
            <h2>Você acertou!!</h2>
            <h3>o número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `   
    } //.body para poder redesenhar nossa tela

    else if(numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>o número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        ` 
    }else {
        elementoChute.innerHTML += `
        <div>o número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        ` 
    }

function chuteForInvalido(numero){
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorQueOValorPermitido(numero){
    
    return numero > maiorValor || numero < menorValor
}

}

document.body.addEventListener('click', e => {  //funcao do botao jogar novamente

    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }

})
