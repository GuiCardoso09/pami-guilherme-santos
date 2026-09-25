function saudacao(nome: string): string {
    return 'Olá, $(nome)!';
}

console.log(saudacao('Bernardo')); // Retorna 'Olá, Leandro!'

interface Usuario {
    nome: string;
    idade: number;
    email?: string;
}

function exibirUsuario(usuario: Usuario): void {
    console.log(`Nome: ${usuario.nome}`);
    console.log(`Idade: ${usuario.idade}`);
}

exibirUsuario({ nome: 'Marcos', idade: 22 }); // Retorna 'Nome: Marcos' e 'Idade: 22'
//Exemplo de função que retorna arrays e tem parametros opcionais
function listarNomes(nomes: string[]): void {
    nomes.forEach(nome => console.log(nome));
}

listarNomes(['Ana', 'Bruno', 'Carlos']); // Retorna 'Ana', 'Bruno' e 'Carlos'