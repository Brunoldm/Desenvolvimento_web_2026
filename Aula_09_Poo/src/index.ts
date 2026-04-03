import { Aluno } from "./Aluno";
import { Carro } from "./Carro";
import { Livro } from "./Livro";
import { Produto } from "./Produto";
import { Usuario } from "./Usuario";

const aluno1: Aluno = new Aluno ('Pedro',68,'ADS','BT3041638');

aluno1.imprimir();

const livro1: Livro = new Livro ('Os contos do Bruno','Bruno',2026,'Boituva livros');

livro1.exibirDados();

const livro2: Livro = new Livro ('Chapeuzinho Vermelho','Carol',1998,'SP livros');

livro2.exibirDados();

const usuario1: Usuario = new Usuario('Bruno','bruno.ldm@hotmail.com');

usuario1.boasVindas();

const carro1: Carro = new Carro('Fiat','Punto',2002);

carro1.mostrarCarro();

carro1.ano = 2020;

carro1.mostrarCarro();

const produto1: Produto = new Produto('mouse', 50);

produto1.mostrarInformacoes();