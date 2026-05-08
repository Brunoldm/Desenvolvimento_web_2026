import { Pacote } from "./Pacote";
import { Detalhes } from "./Detalhes";

export class Voo {

    id: string;
    data: string;

    detalhes: Detalhes;

    listaPacotes: Pacote[];

    constructor(dados: any) {

        this.id = dados.id_voo;

        this.data = dados.data_envio;

        // hidratação do objeto detalhes
        this.detalhes = new Detalhes(dados.detalhes);

        // hidratação do array
        this.listaPacotes = dados.pacotes.map((item: any) => {
            return new Pacote(item.peso, item.descricao);
        });
    }

    getPesoTotal(): number {

        let total = 0;

        this.listaPacotes.forEach((pacote) => {
            total += pacote.peso;
        });

        return total;
    }

}