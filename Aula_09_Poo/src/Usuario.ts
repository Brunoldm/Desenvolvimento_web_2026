export class Usuario{
    nome: string
    email: string

    constructor(nome: string, email: string){
        this.nome = nome;
        this.email = email;
    }

    boasVindas(): void{
        console.log(`Bem vindo, ${this.nome}! seu email é: ${this.email}`)
    }
}