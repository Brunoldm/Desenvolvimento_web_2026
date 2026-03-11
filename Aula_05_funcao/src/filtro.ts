const numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2];

const semDuplicadas = numeros.filter((valor, indice, self) => {
    return self.indexOf(valor) === indice;
});

let pares = numeros.filter(n => n % 2 === 0);

let maiorQueTres = numeros.filter(a => a > 3 );

let valores = [10, 5, 7, 6, 3, undefined];

let valoresNaoNulos = valores.filter(v => v !== null && v !== undefined);

type Pessoa = {
    nome: string;
    idade: number;
}

const pessoas: Pessoa[] = [
    {nome: "Pedro", idade: 30},
    {nome: "Bruno", idade: 28},
    {nome: "Carol", idade: 28},
    {nome: "Paulo", idade: 56},
]

let maioresDeIdade = pessoas.filter(pessoa => pessoa.idade >= 18);




