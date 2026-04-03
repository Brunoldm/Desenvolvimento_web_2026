const numbers: number [] = [1, 7, 3, 9, 5, 22, 11];

numbers.sort((a,b) => a - b); // Crescente
numbers.sort((a,b) => b - a), // Decrescente

console.log(numbers);

const letras: string[] = ["Item1", "item5", "item2", "item3"];

letras.sort((a,b) => a.localeCompare(b));

console.log(letras);

"anisio".localeCompare("Anisio", undefined, {sensitivity: "base"});