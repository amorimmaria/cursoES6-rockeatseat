const usuario = {
    nome: 'Maria',
    idade: 25,
};

const {nome,...resto} = usuario;

console.log(nome);
console.log(resto);