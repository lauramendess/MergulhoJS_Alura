alert("Boas vindas ao jogo do número secreto!")
let numeroMaximo = 500;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;

while(numeroSecreto != chute){
    chute = prompt(`Digite um número entre 1 e ${numeroMaximo}`);

    if(numeroSecreto == chute){
        break;
    } 
    else{
        if(numeroSecreto > chute){
            alert(`O número secreto é maior que ${chute}`);
        }
        else{
            alert(`O número secreto é menor que ${chute}`);
        }
        tentativas++;
        alert(`Você já tentou ${tentativas} vezes`);
    }
}

let palavraTentativa = tentivas > 1 ? "tentativas" : "tentativa";
alert(`Você acertou! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

/* if(tentativas > 1){
    alert(`Você acertou! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
}
else{
    alert(`Você acertou! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
} */