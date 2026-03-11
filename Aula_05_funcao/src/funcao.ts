
import unescapeLeadingUnderscores = require("typescript");
import type ts = require("typescript");

function mensagem (f:string): string{
    return f;
}

console.log(mensagem("Segura ae"));

function soma(n1: number, n2: number):void{
    console.log(n1+n2);
}

function saudacao(nome: string =  "Visitante"):string{
    return `Ola, ${nome}`;
}

function multiplicar(n3: number, n4: number):number{
    return n3 * n4;
}

const mensagemLambda = (a:string):string => a;

const somaLambda = (nu1: number, nu2: number):void => console.log(nu1+nu2);

const saudacaoLambda = (nome:string):string => `Ola, ${nome}`;

//Valores opcionais
//Valor com "?" é uma variavel com valor opcional
const multiplicar1 = (a:number, b?:number):number => {
    if(b === undefined){
        return a;
    }
    return a*b;
}

//Operador Ternario

const multiplicarOpTernario = (a: number, b: number):number => (b === undefined) ? a : a*b;

//Operador de Coalescencia Nula

const multiplicarCoalescencia = (a: number, b?: number): number => a * (b ?? 1);