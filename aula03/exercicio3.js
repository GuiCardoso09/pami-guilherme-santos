"use strict";
let livro = {
    titulo: 'O Pequeno Príncipe',
    autor: 'Guilherme',
    anoPublicacao: 1943
};
function exibirLivro(livro) {
    console.log(`Título: ${livro.titulo}`);
    console.log(`Autor: ${livro.autor}`);
    console.log(`Ano de publicação: ${livro.anoPublicacao}`);
}
exibirLivro(livro);
