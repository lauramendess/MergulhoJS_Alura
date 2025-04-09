/*
Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .

Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

Use um loop while para imprimir os números de 1 a 10 no console.

Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
*/

// 1. Exibir uma mensagem de boas-vindas
console.log("Bem-vindo ao nosso programa!");

// 2. Variável nome e mensagem de boas-vindas
let nome = "Laura";
console.log(`Olá, ${nome}!`);

// 3. Variável nome e alert
alert(`Olá, ${nome}!`);

// 4. Pergunta sobre linguagem de programação
let linguagem = prompt("Qual a linguagem de programação que você mais gosta?");
console.log(`A linguagem de programação que você mais gosta é: ${linguagem}`);

// 5. Soma de dois valores
let valor1 = 5;
let valor2 = 10;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

// 6. Subtração de dois valores
let resultadoSubtracao = valor1 - valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultadoSubtracao}.`);

// 7. Verificação de maioridade
let idade = prompt("Qual a sua idade?");
if (idade >= 18) {
    console.log("Você é maior de idade.");
}
else {
    console.log("Você é menor de idade.");
}

// 8. Verificação de número positivo, negativo ou zero
let numero = prompt("Digite um número:");
if (numero > 0) {
    console.log("O número é positivo.");
}
else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

// 9. Loop while para imprimir números de 1 a 10
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// 10. Verificação de nota
let nota = 8;
if (nota >= 7) {
    console.log("Aprovado");
}
else {
    console.log("Reprovado");
}

// 11. Gerar número aleatório
let numeroAleatorio = Math.random();
console.log(`Número aleatório: ${numeroAleatorio}`);

// 12. Gerar número inteiro entre 1 e 10
let numeroInteiro1a10 = parseInt(Math.random() * 10 + 1);
console.log(`Número inteiro entre 1 e 10: ${numeroInteiro1a10}`);

// 13. Gerar número inteiro entre 1 e 1000
let numeroInteiro1a1000 = parseInt(Math.random() * 1000 + 1);
console.log(`Número inteiro entre 1 e 1000: ${numeroInteiro1a1000}`);
