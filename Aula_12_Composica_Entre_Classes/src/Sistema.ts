import { Pedido } from "./Pedido"

export class Sistema{

    listaDePedidos: Pedido[];

    constructor(listaDePedidos: Pedido[]){
        this.listaDePedidos = listaDePedidos;
    }

    exibirDadoDePedido(id:number): void{
        const listaFormatada = this.listaDePedidos.map(r => r.valor).join(', ');

        console.log(`\nO cliente: ${this.listaDePedidos[id]?.cliente.nome}\n
Cidade: ${this.listaDePedidos[id]?.cliente.endereco.cidade}\n
Valor do pedido: ${this.listaDePedidos[id]?.valor}`);
    }
}