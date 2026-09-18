let cidades: string[] = [
    'São Paulo',
    'Rio de Janeiro',
    'Curitiba',
    'Salvador',
    'Belo Horizonte'
];

function listarCidades(cidades: string[]): void {
    cidades.forEach((cidade) => {
        console.log(cidade);
    });
}

listarCidades(cidades);