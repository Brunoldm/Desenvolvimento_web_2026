import { Medico } from "./Medico";
import { Paciente } from "./Paciente";

export class Prontuario{
    paciente: Paciente;
    medico: Medico;

    constructor(paciente: Paciente, medico: Medico){
        this.paciente = paciente;
        this.medico = medico;
    }

    exibirProntuario(): void{
        const listaFormatada = this.paciente.remedio
        .map(r => r.nome) 
        .join(", ");

        console.log(`Paciente: ${this.paciente.pessoa.nome}\n Medico: ${this.medico.pessoa.nome}\n remedios: ${listaFormatada}`)
    }
}