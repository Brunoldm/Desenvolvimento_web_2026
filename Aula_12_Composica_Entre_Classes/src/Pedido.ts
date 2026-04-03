import { Cliente } from "./Cliente";

export class Pedido{
    static proximoId: number = 1;

    id: number;
    valor: number;
    cliente: Cliente;

    constructor(valor: number, cliente: Cliente){
        this.id = Pedido.proximoId++;
        this.valor = valor;
        this.cliente = cliente;
    }
}