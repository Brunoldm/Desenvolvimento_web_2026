//setInterval(() => console.log("Executando o intervalo"), 1000);
//console.log("Depois do intervalo");

let contador = 0;

const interval = setInterval(() => {
    contador++;
    console.log("Rodando o interval.....");
    if(contador === 3){
        console.log("Interval cancelado....");
        clearInterval(interval);
    }
},700);

console.log("Depois do interval....");