let nome: string = 'Guilherme';
let idade: number = 25;
let estAtivo: boolean  = true;

//Arrays
let numeros: number[] = [1,2,3,4,5];
let nomes: string[] = ['Ana', 'Bruno', 'Caio'];
let misto: (string | number)[] = ['Ana', 25, 'Caio', 30]; //Os numeros e nomes estão em casas separadas. O que vale é a ,
let misto2: Array<string|number> = ['Ana', 25, 'Caio', 30];

//Tuplas
let pessoa: [string, number] = ['Maria', 30];

//Union Types
let id: number | string = 123;
id = 'ABC123';

//Interfaces - são usadas para definir estrutura de objetos
interface Usuario {
    nome: string;
    idade: number;
    email?: string; //?: Opcional
}

//utilizar elas fica assim:
let novo_usuario: Usuario = {
    nome: 'Amanda',
    idade: 18
}

console.log(pessoa);