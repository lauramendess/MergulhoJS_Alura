/*
Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
*/

// 1
let diaDaSemana = prompt("Qual é o dia da semana?").toLowerCase();

if(diaDaSemana == "sábado" || diaDaSemana == "domingo"){
    alert("Bom fim de semana!");
} else{
    alert("Boa semana!");
}

// 2
let numero = parseInt(prompt("Digite um número:"));
if(numero > 0){
    alert("O número é positivo.");
}
else{
    alert("O número é negativo.");
}

// 3
let pontuacao = parseInt(prompt("Digite sua pontuação:"));
if(pontuacao >= 100){
    alert("Parabéns, você venceu!");
}
else{
    alert("Tente novamente para ganhar.");
}

// 4
let saldoConta = 1420;
let mensagem = `Seu saldo é de R$ ${saldoConta}.`;
alert(mensagem);

// 5
let nomeUsuario = prompt("Insira seu nome:");
alert(`Bem-vindo(a), ${nomeUsuario}!`);