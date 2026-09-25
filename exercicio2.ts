let cidades: string[] = [
    'São Paulo',
    'Rio de Janeiro',
    'Belém',
    'Salvador',
    'Botelhos'
]; //pode ser escrito numa única linha

function listarCidades(cidades: string[]): void {
    cidades.forEach((cidade) => {
        console.log(cidade);
    });
}

listarCidades(cidades);