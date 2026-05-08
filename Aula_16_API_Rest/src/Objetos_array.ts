class Item{
    nome: string;
    quantidade: number;

    constructor(nome: string, quantidade: number){
        this.nome = nome;
        this.quantidade = quantidade;
    }
}

class Produto{
    id: number;
    nome: string;
    itens: Item[];

    constructor(id: number, nome: string, itens: Item[]){
        this.id = id;
        this.nome = nome;
        this.itens = itens;
    }
}

const item01 = new Item("Mounjaro",1);
const item02 = new Item("Zoopidem",3);

const produto01 = new Produto(1,"Kit de remedios",[item01,item02]);