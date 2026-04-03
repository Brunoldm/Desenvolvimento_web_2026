type CategoriaPersonagem = "Espadachim" | "Mago" | "Arqueiro";

export class Heroi {
  nome: string;
  categoria: CategoriaPersonagem;
  ataque: number;
  consumoStamina: number;
  stamina: number;

  constructor(nome: string, categoria: CategoriaPersonagem, ataque: number, consumoStamina: number) {
    this.nome = nome;
    this.categoria = categoria;
    this.ataque = ataque;
    this.consumoStamina = consumoStamina;

    if (categoria === "Espadachim") {
      this.stamina = 10;
    } else if (categoria === "Mago") {
      this.stamina = 20;
    } else {
      this.stamina = 30;
    }
  }
}