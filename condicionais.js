console.log("Trabalhando com listas");
const salvador = "Salvador";
const saoPaulo = "São Paulo";
const rioDeJaneiro = "Rio de Janeiro";

const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
);

listaDeDestinos.push("Curitiba");
listaDeDestinos.push("João Pessoa");

const idadeComprador = 17;
const estaAcompanhada = false;
const temPassagemComprada = true;
console.log("Destinos Possíveis:");

if (idadeComprador >= 18 || estaAcompanhada) {
    console.log("Pode comprar, maior de idade e/ou acompanhado");
    listaDeDestinos.splice(1, 2);
} else {
    console.log("Não pode comprar, menor de idade e/ou desacompanhado");
}

console.log("Embarque: \n\n");
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem!");
} else {
    console.log("Você não pode embarcar");
}


