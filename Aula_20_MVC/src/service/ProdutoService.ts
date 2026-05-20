import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProductService {

produtoRepository : ProdutoRepository = ProdutoRepository.getInstance ();

cadastrarProduto ( produtoData : any): Produto {
const { name , description , price } = produtoData ;
if (!name || !description || !price ){
throw new Error (" Informacoes incompletas ");
}

const novoProduto = new Produto (name , description , price );
this . produtoRepository.insereProduto (novoProduto);
return novoProduto ;
}

consultarProduto (id: any): Produto | undefined {
const idNumber : number = parseInt (id , 10);
console .log(id)
return this.produtoRepository.filtraProdutoPorID ( idNumber );
}

getProdutos (): Produto []{
return this.produtoRepository.filtraTodosProdutos ();
}
}