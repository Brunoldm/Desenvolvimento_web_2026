const numeros: number[] = [ 1, 2, 3, 4, 5];
const frutas: string[] = [ "Maca", "Banana", "Melancia"];

frutas.forEach( (item, index)=>{
    console.log(`${index}: ${item}`);
});

let contador: number = 0;

numeros.forEach( item => {
    contador += item;
});

console.log(contador);

type Produt = {id: number, nome: string, preco:number}

const produts: Produt[] = [
    {id: 1, nome: "Mouse", preco: 20.00},
    {id: 2, nome: "Teclado", preco: 50.00},
    {id: 3, nome: "Monitor", preco: 250.00},
];

produts.forEach( p => {
    p.nome = p.nome + "Teste";
});