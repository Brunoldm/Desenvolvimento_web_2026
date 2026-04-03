import { Cliente } from "./Cliente";
import { Endereco } from "./Endereco";
import { Pedido } from "./Pedido";
import { Sistema } from "./Sistema";

const endereco1: Endereco = new Endereco('Jose thome', 332, 'Boituva');
const cliente1: Cliente = new Cliente('Bruno', 27, endereco1);
const pedido1: Pedido = new Pedido(250, cliente1);
const pedido2: Pedido = new Pedido(300, cliente1);
const sistema1: Sistema = new Sistema([pedido1, pedido2]);

console.log(`O cliente ${cliente1.nome}, da cidade ${endereco1.cidade}, tem pedido nos valores de ${pedido1.valor}, e ${pedido2.valor}`)

sistema1.exibirDadoDePedido(0);