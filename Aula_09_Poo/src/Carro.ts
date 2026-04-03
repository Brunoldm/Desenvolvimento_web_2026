export class Carro{
    marca: string
    modelo: string
    ano: number

    constructor(marca: string, modelo: string, ano: number){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }

    mostrarCarro(): void{
        console.log(`O carro ${this.modelo}, da marca ${this.marca}, e do ano de ${this.ano}`)
    }
}