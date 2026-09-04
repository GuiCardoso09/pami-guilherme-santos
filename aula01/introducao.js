console.log("Olá Mundo");
/*variáveis js
Para uma variável ser definifa entre string, int, float, etc, dependerá daquilo
que está dentro dela. Se você escreveu algo, é string; se você colocou números, é int*/
var Variavel01 = "Oi, " //Gerencia a memória de uma maneira inferior
let Variavel02 = "tudo bem?"; //
const Variavel03 = "Vocês são lindos"

//Concatenação (Várias variáveis na mesma linha de código)
console.log(Variavel01 + Variavel02);
console.log(Variavel01, Variavel02);// a vírgula cria um espaço entre as variáveis

Variavel01 = "Olá!";
console.log(Variavel01, Variavel02);

// Variavel03 = "Helooooo";
//Variaveis do tipo constante não podem receber um novo valor que sobre-escreva o original

let Teste = "texto"
console.log(typeof(Teste))
Teste = 2;
console.log(typeof(Teste));
Teste = {nome: "João", idade: 38};
console.log(typeof(Teste))
Teste = [1, 2];
console.log("O resultado do tipo array é", typeof(Teste))