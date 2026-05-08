import { Voo } from "./models/Voo";

const jsonBruto = `
{
    "id_voo": "DRN-7742",
    "data_envio": "2026-04-28",

    "detalhes": {
        "altitude_max": 120,
        "sensores": [
            "GPS",
            "Termometro",
            "Lidar"
        ]
    },

    "pacotes": [
        {
            "peso": 1.2,
            "descricao": "Medicamentos"
        },

        {
            "peso": 0.8,
            "descricao": "Suprimentos"
        }
    ]
}
`;

class Main {

    static executar(): void {

        const dadosSimulados = JSON.parse(jsonBruto);

        console.log("--- Iniciando Sistema de Logistica ---");

        const meuVoo = new Voo(dadosSimulados);

        console.log("\nID do voo:");
        console.log(meuVoo.id);

        console.log("\nData de envio:");
        console.log(meuVoo.data);

        console.log("\nAltitude máxima:");
        console.log(meuVoo.detalhes.altitudeMax + "m");

        console.log("\nSensores disponíveis:");
        console.log(meuVoo.detalhes.sensores);

        console.log("\nPeso total dos pacotes:");
        console.log(meuVoo.getPesoTotal() + "kg");
    }

}

Main.executar();