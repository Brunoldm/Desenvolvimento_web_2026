class Endereco{
    cidade: string;
    pais: string;

    constructor(cidade: string, pais: string){
        this.cidade = cidade;
        this.pais = pais;
    }
}

class Fabricante{
    nome: string;
    endereco: Endereco;

    constructor(nome: string, endereco: Endereco){
        this.nome = nome;
        this.endereco = endereco;
    }
}

class Produto{
    id: number;
    nome: string;
    preco: number;
    fabricante: Fabricante;

    constructor(id: number, nome: string, preco: number, fabricante: Fabricante){
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.fabricante = fabricante;
    }
}

const endereco1 = new Endereco("Boituva","Brasil");
const fabricante1 = new Fabricante("Lanco", endereco1);
const produto1 = new Produto(1,"Caneta",3.00,fabricante1);