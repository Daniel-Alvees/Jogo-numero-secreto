function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute

    if(chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>valor invalido</div>'
        return;
    }
    if (numeroMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `
        <div> Valor Invalido: Fale um número entre ${menorValor} e ${maiorValor}</div>
        `;
        return
    }

    if ( numero === numeroSecreto) {
        document.body.innerHTML = `<h2>Você acertou</h2>
                                  <h3>O número secreto era o ${numeroSecreto}</h3>
                                  <button id='jogar-novamente' class='btn-jogar'>Jogar Novamente</button>
                                  `

    }
    else if (numero > numeroSecreto) {
        elementoChute.innerHTML  += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>`
    }
    else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>`
    }

}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}


document.body.addEventListener('click', evento => {
    if(evento.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})