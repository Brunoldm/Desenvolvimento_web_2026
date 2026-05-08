
class Categoria{
    id : number;
    nome : string;

    constructor(id: number, nome: string){
        this.id = id;
        this.nome = nome;
    }
}

class Produto{
    id: number;
    nome: string;
    preco: number;
    categoria : Categoria;

    constructor(id: number, nome: string, preco: number, categoria: Categoria){
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
    }
}

const cat = new Categoria(1, "Informática");
const notebook = new Produto(2, "Notebook", 2500.00, cat);