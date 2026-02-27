function calcularSalarioFinal(base: number, bonus: number): number {
    const valorBonus: number = base * (bonus / 100);
    return base + valorBonus;
}

let nome: string = "João Silva";
let salarioBase: number = 3000;
let percentualBonus: number = 25;

const valorBonus: number = salarioBase * (percentualBonus / 100);
const salarioFinal: number = calcularSalarioFinal(salarioBase, percentualBonus);

console.log(`Funcionário: ${nome}`);
console.log(`Salário base: R$ ${salarioBase.toFixed(2)}`);
console.log(`Bônus: R$ ${valorBonus.toFixed(2)}`);
console.log(`Salário final: R$ ${salarioFinal.toFixed(2)}`);

if (percentualBonus > 20) {
    console.log("Bônus acima do padrão da empresa");
}