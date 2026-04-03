export class Livro{
    titulo: string
    autor: string
    anoPublicacao: number
    editora: string

    constructor(titulo: string, autor: string, anoPublicacao: number, editora: string){
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.editora = editora;
    }

    exibirDados(): void{
        console.log(`Titulo: ${this.titulo}\n
            Autor: ${this.autor}\n
            Ano de publicação: ${this.anoPublicacao}\n
            Editora: ${this.editora}`)
    }
}