//1 - Converter string para maiuscula

function converterParaMaiuscula(a:string):string{
    return a.toUpperCase();
}

console.log(converterParaMaiuscula("teste"));

const converterParaMaiuscula1 = (a:string):string => a.toUpperCase();

console.log(converterParaMaiuscula1("teste"));

// 2 - Exponenciação de dois numeros

function elevar(n1: number, n2: number): number{
    return n1 ** n2;
}

console.log(elevar(10,3));

// 3 - Crie uma função chamada dobrarNumeros que recebe um array de números e retorna um novo array com todos os valores multiplicados por 2.

function dobrarNumeros(va: number[] = []): number[] {
  const listaNova: number[] = [];

  for (let i = 0; i < va.length; i++) { 
    listaNova.push(va[i]! * 2);
  }
  return listaNova;
}

const valores = [2,5,7,10];

console.log(dobrarNumeros(valores));

//4 - Dado um array de funcionários, escreva uma função que utilize filter() para retornar apenas aqueles que possuem um cargo especifico

type Funcionario = {
    nome: string;
    cargo: string;
}

const funcionarios : Funcionario [] = [
    { nome: "Marcos", cargo: "Desenvolvedor" },
    { nome: "Fernanda", cargo: "Gerente"},
    { nome: "Carlos", cargo: "Desenvolvedor"},
    { nome: "Joana", cargo: "Analista"}
];

const cargoDesejado : string = "Desenvolvedor";

let cargoEspecifico = funcionarios.filter(funcionario => funcionario.cargo === cargoDesejado);

console.log(cargoEspecifico);

//5 - Dado um array de alunos e suas respectivas notas, escreva uma função tipada que utilize filter() para retornar apenas os alunos aprovados.

type Aluno ={
    nome: string;
    nota: number;
};

const alunos: Aluno[] = [
    { nome: "Bruno", nota: 9 },
    { nome: "Thiago", nota: 5},
    { nome: "Carol", nota: 8},
    { nome: "Pedro", nota: 5},
];

let alunosAprovados = alunos.filter(aluno => aluno.nota >= 7 );

console.log(alunosAprovados);

// Exercício 6: Dado um array de eventos tipados, filtre apenas aqueles que ocorrem em um determina do mês.

type Eventos ={
    nome: string;
    mes: string;
}

const eventos: Eventos [] = [
    { nome: "Workshop", mes: "Abril"},
    { nome: "Palestra Clovis Barros", mes: "Janeiro"},
    { nome: "Feira mecanica", mes: "Fevereiro"},
    { nome: "Final do paulistao", mes: "Janeiro"}
];

const mesDesejado: String = "Janeiro";

let mesteste = eventos.filter(evento => evento.mes === mesDesejado);

console.log(mesteste);


