import promptSync from "prompt-sync";

const prompt = promptSync();

let opcao: number = -1;
let valorDolar: number = 5.13;
let valor: number;
let resul: number;

console.log(" ---- Conversor de moeda ----");

do{

    const entrada: string = prompt("Escolha a opção 1 - BRL para USD; 2. USD para BRL; 3. Alterar Cotação; 4. Para verificar a cotação atual do sistema; 0. Para Sair ").trim();
    
    if (entrada === "") {
        console.log("Digite uma opção válida.");
        continue; 
}
    
opcao = Number(entrada)

    switch(opcao){
        case 1:
            valor = Number(prompt("Digite o valor a ser convertido: "));
            if(Number.isNaN(valor) || valor<0){
                console.log("Valor invalido.");
                break;
            } 
            resul = valor/valorDolar
            console.log(`O valor R$ ${valor} em dolar é: US$ ${resul.toFixed(2)}`);
        break;
        case 2:
            valor = Number(prompt("Digite o valor para ser convertido: "));
            if(Number.isNaN(valor) || valor<0){
                console.log("Valor invalido.");
                break;
            } 
            resul = valor*valorDolar;
            console.log(`O valor US$ ${valor} em real é R$ ${resul.toFixed(2)}`);
        break;
        case 3:
            valorDolar = Number(prompt("Digite o valor da cotação do dolar desejada: "));
            if(Number.isNaN(valorDolar) || valorDolar<0){
                console.log("Valor invalido.");
                break;
            } 
            console.log(`Cotação do dolar foi alterada para US$ ${valorDolar.toFixed(2)}`);
        break;
        case 4:
            console.log(`A cotação atual do sistema é R$ 1 = US$ ${valorDolar.toFixed(2)}`);
        break;
        case 0:
            console.log("Ate logo!");
        break
        default:
            console.log("Digite uma opção valida.");
}
} while(opcao !== 0);