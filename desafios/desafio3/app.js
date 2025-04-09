/*
Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
*/

// 1
let i = 1;
while(i <= 10){
    console.log(i);
    i++;                                                                                    
}

// 2 
let j = 10;
while(j >= 0){
    console.log(j);
    j--;
}

// 3
let num = parseInt(prompt("Digite um número para contagem regressiva: "));
let k = num;
while(k >= 0){
    console.log(k);
    k--;
}

// 4
let num2 = parseInt(prompt("Digite um número para contagem progressiva: "));
let l = 0;
while(l <= num2){
    console.log(l);
    l++;
}
