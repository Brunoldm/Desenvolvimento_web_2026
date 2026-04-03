import { Pessoa } from "./Pessoa"
import { Remedio } from "./Remedio";

export class Paciente{
    pessoa: Pessoa;
    remedio: Remedio[];

    constructor(pessoa: Pessoa, remedio: Remedio[]){
        this.pessoa = pessoa;
        this.remedio = remedio;
    }
}