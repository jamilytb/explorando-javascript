console.log('Trabalhando com listas');
const salvador = 'Salvador';
const saoPaulo = 'São Paulo';
const rioDeJaneiro = 'Rio de Janeiro';

const listaDeDestinos = new Array (
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
);

listaDeDestinos.push("Curitiba");
listaDeDestinos.push("João Pessoa");

listaDeDestinos.splice(1,2);
console.log(listaDeDestinos[0], listaDeDestinos[2]);