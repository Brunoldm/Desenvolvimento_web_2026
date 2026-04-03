import { Contato } from "./Contato";
import { Endereco } from "./Endereco";
import { Medico } from "./Medico";
import { Paciente } from "./Paciente";
import { Pessoa } from "./Pessoa";
import { Prontuario } from "./Prontuario";
import { Remedio } from "./Remedio";

const contato1: Contato = new Contato('998409115', 'Bruno.ldm@hotmail.com');
const contato2: Contato = new Contato('996614961', 'Pedro@hotmail.com');
const endereco1: Endereco = new Endereco('Jose thome', 332, 'Boituva', '18557-016');
const endereco2: Endereco = new Endereco('Jose Antonio', 332, 'Boituva', '18550-016');
const pessoa1: Pessoa = new Pessoa('Bruno', 23, endereco1, contato1);
const pessoa2: Pessoa = new Pessoa('Pedro', 35, endereco2, contato2);
const medico1: Medico = new Medico(pessoa2, 'Clinico Geral');
const remedio1: Remedio = new Remedio('Gerovital', '1 capsula a cada 12 horas');
const remedio2: Remedio = new Remedio('Dipirona', '20 gotas a cada 12 horas');
const paciente1: Paciente = new Paciente(pessoa1, [remedio1, remedio2]);
const prontuario1: Prontuario = new Prontuario(paciente1, medico1);

prontuario1.exibirProntuario();