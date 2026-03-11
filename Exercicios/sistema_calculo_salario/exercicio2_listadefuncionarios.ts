type Funcionario = {
    nome:string;
    salarioBase:number;
    percentualBonus:number;
}

const funcionarios: Funcionario [] = [
    {nome:"Bruno", salarioBase:4500, percentualBonus: 30},
    {nome:"Jonathas", salarioBase:3000, percentualBonus:10},
    {nome:"Gabriel", salarioBase:2500, percentualBonus:20},
];

function calcularSalario(base: number, bonus: number): number {
  return base + (base * bonus / 100);
}

    funcionarios.forEach((funcionario) => {
    const salarioFinal = calcularSalario(
    funcionario.salarioBase,
    funcionario.percentualBonus
  );

  console.log(`Funcionário: ${funcionario.nome}`);
  console.log(`Salário final: R$ ${salarioFinal.toFixed(2)}`);

if (salarioFinal > 5000) {
    console.log("Funcionário nível premium");
}
    });

