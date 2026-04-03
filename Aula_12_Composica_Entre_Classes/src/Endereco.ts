export class Endereco{
    rua: string;
    numero: number;
    cidade: string;

    constructor(rua: string, numero: number, cidade:string){
        this.rua = rua;
        this.numero = numero;
        this.cidade = cidade;
    }
}