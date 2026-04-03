export class Produto{
    nome: string 
    preco: number

    constructor(nome: string, preco: number) { 
        this.nome = nome 
        this.preco = preco } 
        
        mostrarInformacoes(): void { 
            console.log(`O produto ${this.nome} tem o preço de: ${this.preco}`)
}
}