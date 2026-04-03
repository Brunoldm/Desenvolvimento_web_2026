// console.log("Antes do setTimeout");

// setTimeout(() => console.log("Executando o setTimeout"), 2000); 

// console.log("Depois do setTimeout");

console.log("Antes do setTimeout");

let frase = "Rodando o setTimeout";

const timeout = setTimeout(() => console.log("Executando o setTimeout"), 1000);

frase = "Rodando o clear timeout";

if( frase !== "Rodando o setTimeout"){
    clearTimeout(timeout);
    console.log(frase);
}

console.log("Depois do setTimeout");