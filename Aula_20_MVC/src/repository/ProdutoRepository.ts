import { Produto } from "../model/Produto";

export class ProdutoRepository{
    private static instance : ProdutoRepository;
    private produtoList : Produto [] = [];

    private constructor() {}

    public static getInstance (): ProdutoRepository {
        if (! this.instance ) {
            this.instance = new ProdutoRepository ();
    }
        return this . instance ;
}

    insereProduto ( produto : Produto ){
        this.produtoList.push ( produto );
}

    filtraProdutoPorID (id: number ): Produto | undefined {
        return this.produtoList.find ( produto => produto.id === id);
}

    filtraTodosProdutos (): Produto []{
        return this.produtoList ;
}
}