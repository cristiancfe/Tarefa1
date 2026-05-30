/*
1. console.log um programa que pergunte a nota de um aluno (de 0 a 10). Exiba se o
aluno foi Aprovado (nota maior ou igual a 7), em Recuperação (nota entre 5 e 6.9)
ou Reprovado (nota menor que 5).
*/
// const prompt = require("prompt-sync")();
// let nota = Number(prompt("Informe sua nota final "));

const PromptSync = require("prompt-sync");

// if (nota >= 0 && nota <= 10) {
//   if (nota >= 7) {
//     console.log("APROVADO");
//   } else if (nota >= 5 && nota <= 6.9) {
//     console.log("RECUPERAÇÃO");
//   } else {
//     console.log("REPROVADO");
//   }
// } else {
//   console.log("a nota deve ser entre 0 e 10");
// }

/*
2. Crie um programa que pergunte o ano de nascimento de uma pessoa e calcule
sua idade. Com base na idade, exiba se ela é criança (até 12 anos), adolescente
(de 13 a 17 anos), adulta (de 18 a 59 anos) ou idosa (60 anos ou mais).
*/
// const prompt = require("prompt-sync")();
// let anoNasc = Number(prompt("Digite seu ano nascimento com 4 dígitos "));
// let anoAtual = Number(prompt("Digite o ano atual com 4 dígitos "));
// let idade = anoAtual - anoNasc;
// if (anoAtual && anoNasc !== 0 && anoAtual && anoNasc === Number) {
//   if (idade <= 12) {
//     console.log(` Voçê tem ${idade}  anos, é um  Criança`);
//   } else if (idade >= 13 && idade <= 17) {
//     console.log(` Voçê tem ${idade} anos, é um Adolescente`);
//   } else if (idade >= 18 && idade <= 59) {
//     console.log(`Voçê tem ${idade} anos, é Adulto`);
//   } else {
//     console.log(` Voçê tem ${idade} anos, é um Idoso`);
//   }
// } else {
//   console.log(
//     "O ano atual e o ao de nascimento informados, devem ser diferentes de zero e devem ser numéricos"
//   );
// }

/*
3. console.log um programa que pergunte o salário mensal de um funcionário e o
percentual de aumento concedido pela empresa. Caso o salário seja menor que
R$ 1.500,00, o percentual de aumento deve ser dobrado automaticamente. Exiba o
novo salário do funcionário.
*/
// const prompt = require("prompt-sync")();
// let salario = Number(prompt('Qual seu salário atual? '))
// let percAumento = Number(prompt('Qual o aumento concedido pela empresa? '))
// if(salario < 1500){
//   salario = salario + (2*(percAumento * salario)/100)
//   console.log(salario)
// }else{
//   salario = salario + ((percAumento * salario)/100)
//   console.log(salario)
// }
/*
4. Crie um programa que leia três números inteiros e exiba o maior deles, sem utilizar
funções prontas como Math.max().
*/
// const prompt = require("prompt-sync")();
// let n1 = Number(prompt('Informe o primeiro número '))
// let n2 = Number(prompt('Informe o segundo número '))
// let n3 = Number(prompt('Informe o terceiro número '))
// let maior = 0
// if((n3 < n1) && (n2 < n1)){
//   maior = n1
//   console.log(maior)
// }else if((n3 < n2) && (n1 < n2)){
//   maior = n2
//   console.log(maior)
// }else if((n1 < n3) && (n2 < n3)){
//   maior = n3
//   console.log(maior)
// }else{

//   console.log('Todos os números são iguais')
// }

/*


5. Uma loja oferece desconto progressivo conforme o valor da compra. Faça um
programa que leia o valor total de uma compra e aplique as seguintes regras:
compras abaixo de R$ 100,00 não têm desconto; compras entre R$ 100,00 e R$
299,99 recebem 10% de desconto; compras entre R$ 300,00 e R$ 499,99 recebem
15% de desconto; compras acima de R$ 500,00 recebem 20% de desconto. Exiba o
valor original, o desconto aplicado e o valor final a pagar.
*/
// const prompt = require("prompt-sync")();
// let totalCompras = Number(prompt("Informe o valor total de compras "));
// console.log("=================================");
// let valorTotal = 0;
// let desconto = 0

// if (totalCompras < 100) {
//   totalCompras = totalCompras
//   desconto = desconto
//   valorTotal = totalCompras;

//   console.log(`O total de compras foi R$ ${totalCompras.toFixed(2)}`)
//   console.log(`O total de descontos foi R$ ${desconto.toFixed(2)}`)
//   console.log(`O valor final a pagar é de R$ ${totalCompras.toFixed(2)}`);

// } else if (totalCompras > 100 && totalCompras < 299.99) {
//   valorTotal = totalCompras - (totalCompras * 10) / 100;
//   desconto = (totalCompras * 10) / 100;
//   console.log(`O total de compras foi R$ ${totalCompras.toFixed(2)}`)
//   console.log(`O total de descontos foi R$ ${desconto.toFixed(2)}`)
//   console.log(`O valor final a pagar é de R$ ${valorTotal.toFixed(2)}`);

// } else if (totalCompras > 300 && totalCompras < 499.99) {
//   totalCompras = totalCompras
//   desconto = (totalCompras * 15) / 100;
//   valorTotal = totalCompras - (totalCompras * 15) / 100;
//   console.log(`O total de compras foi R$ ${totalCompras.toFixed(2)}`)
//   console.log(`O total de descontos foi R$ ${desconto.toFixed(2)}`)
//   console.log(`O valor final a pagar é de R$ ${valorTotal.toFixed(2)}`);

// } else {
//   totalCompras = totalCompras
//   desconto = (totalCompras * 20) / 100;
//   valorTotal = totalCompras - (totalCompras * 20) / 100;
//   console.log(`O total de compras foi R$ ${totalCompras.toFixed(2)}`)
//   console.log(`O total de descontos foi R$ ${desconto.toFixed(2)}`)
//   console.log(`O valor final a pagar é de R$ ${valorTotal.toFixed(2)}`);
// }

/*
6. Crie um programa de caixa eletrônico simplificado. O usuário informa o valor que
deseja sacar (múltiplo de 10). O programa deve calcular e exibir a menor
quantidade possível de cédulas de R$ 100, R$ 50, R$ 20 e R$ 10 necessárias para
compor o saque.
*/
// const prompt = require("prompt-sync")();
// let valor = Number(prompt('Digite um valor multiplo de 10 '))
// console.log('==============================================')
// let multiplo = valor % 10;

// if (multiplo == 0){

// let notas100 = 0;
// let notas50 = 0;
// let notas20 = 0;
// let notas10 = 0;

// if (valor >= 100) {
//     notas100 = (valor - (valor % 100)) / 100;
//     valor = valor % 100;
// }

// if (valor >= 50) {
//     notas50 = (valor - (valor % 50)) / 50;
//     valor = valor % 50;
// }

// if (valor >= 20) {
//     notas20 = (valor - (valor % 20)) / 20;
//     valor = valor % 20;
// }

// if (valor >= 10) {
//     notas10 = (valor - (valor % 10)) / 10;
//     valor = valor % 10;
// }

// console.log("Cédulas de R$100:", notas100);
// console.log("Cédulas de R$50:", notas50);
// console.log("Cédulas de R$20:", notas20);
// console.log("Cédulas de R$10:", notas10);

// } else {
//     console.log('Digite um valor que seja múltiplo de 10')
// }

/*


7. Faça um programa que funcione como uma calculadora básica. Leia dois
números e uma operação desejada (+, -, *, /). Usando switch case, realize a
operação correspondente e exiba o resultado. Trate o caso de divisão por zero e
de operação inválida.
*/
// const prompt = require("prompt-sync")();
// let numero1 = Number(prompt("Digite o primeiro número: "));
// let operacao = prompt("Digite a operação (+, -, * ou /): ");
// let numero2 = Number(prompt("Digite o segundo número: " ));

// console.log('===========================================')
// switch (operacao) {
//     case "+":
//         console.log("Resultado: " + (numero1 + numero2));
//         break;

//     case "-":
//         console.log("Resultado: " + (numero1 - numero2));
//         break;

//     case "*":
//         console.log("Resultado: " + (numero1 * numero2));
//         break;

//     case "/":
//         if (numero2 === 0) {
//             console.log("Erro: divisão por zero não é permitida.");
//         } else {
//             console.log("Resultado: " + (numero1 / numero2));
//         }
//         break;

//     default:
//         console.log("Erro: operação inválida.");
// }

/*



8. Uma pizzaria cobra por tamanho e tipo de borda. Faça um programa que leia o
tamanho da pizza (P, M ou G) e o tipo de borda (tradicional ou recheada) usando
switch case. Os preços base são: P = R$ 25,00, M = R$ 35,00, G = R$ 45,00. A borda
recheada acrescenta R$ 8,00 em qualquer tamanho. Exiba o valor total do pedido.
*/
// const prompt = require("prompt-sync")();

// let tamanho = prompt("Informe o tamanho da pizza (P, M ou G): ");

// let borda = prompt(
//   "Informe o tipo de borda ( [1] para tradicional ou [2] para recheada): "
// );
// console.log(
//   "============================================================================="
// );

// let valor = 0;

// switch (tamanho.toUpperCase()) {
//   case "P":
//     valor = 25;
//     break;

//   case "M":
//     valor = 35;
//     break;

//   case "G":
//     valor = 45;
//     break;

//   default:
//     console.log("Tamanho de pizza inválido!");
//     valor = -1;
// }

// if (valor !== -1) {
//   switch (borda.toLowerCase()) {
//     case "1":
//       break;

//     case "2":
//       valor += 8;
//       break;

//     default:
//       console.log("Tipo de borda inválido!");
//       valor = -1;
//   }
// }

// if (valor !== -1) {
//   console.log("Valor total do pedido: R$ " + valor.toFixed(2));
// }

/*
9. Crie um programa que leia o número do mês (1 a 12) e, usando switch case, exiba
o nome do mês correspondente e quantos dias ele possui. Para fevereiro,
pergunte ao usuário se o ano é bissexto e ajuste a quantidade de dias para 29
caso seja.
*/

// const prompt = require("prompt-sync")();

// let mes = Number(prompt("Digite o número do mês (1 a 12):"));

// switch (mes) {
//   case 1:
//     console.log("Janeiro - 31 dias");
//     break;

//   case 2:
//     let bissexto = prompt("O ano é bissexto? (S/N)");

//     switch (bissexto.toUpperCase()) {
//       case "S":
//         console.log("Fevereiro - 29 dias");
//         break;

//       case "N":
//         console.log("Fevereiro - 28 dias");
//         break;

//       default:
//         console.log("Opção inválida!");
//     }
//     break;

//   case 3:
//     console.log("Março - 31 dias");
//     break;

//   case 4:
//     console.log("Abril - 30 dias");
//     break;

//   case 5:
//     console.log("Maio - 31 dias");
//     break;

//   case 6:
//     console.log("Junho - 30 dias");
//     break;

//   case 7:
//     console.log("Julho - 31 dias");
//     break;

//   case 8:
//     console.log("Agosto - 31 dias");
//     break;

//   case 9:
//     console.log("Setembro - 30 dias");
//     break;

//   case 10:
//     console.log("Outubro - 31 dias");
//     break;

//   case 11:
//     console.log("Novembro - 30 dias");
//     break;

//   case 12:
//     console.log("Dezembro - 31 dias");
//     break;

//   default:
//     console.log("Mês inválido!");
// }

/*

10. Um estacionamento cobra por faixas de tempo. Faça um programa que leia
quantas horas um veículo ficou estacionado e, usando switch case com
intervalos, calcule o valor a pagar conforme a tabela: 1ª hora = R$ 8,00; 2ª hora =
R$ 6,00; 3ª hora = R$ 4,00; acima de 3 horas = R$ 4,00 pelas primeiras 3 horas mais
R$ 2,00 por hora adicional. Exiba o tempo total e o valor cobrado.
*/
const prompt = require("prompt-sync")();
let horas = Number(prompt("Digite a quantidade de horas estacionadas: "));
console.log("========================================")
let valor = 0;

switch (true) {
  case horas === 1:
    valor = 8;
    break;

  case horas === 2:
    valor = 8 + 6;
    break;

  case horas === 3:
    valor = 8 + 6 + 4;
    break;

  case horas > 3:
    valor = 8 + 6 + 4 + (horas - 3) * 2;
    break;

  default:
    console.log("Quantidade de horas inválida!");
}

if (horas > 0) {
  console.log(`Tempo total estacionado: ${horas} hora(s)`);
  console.log(`Valor total a pagar: R$ ${valor.toFixed(2)}`);
}
