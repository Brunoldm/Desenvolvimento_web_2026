export class Detalhes {

    altitudeMax: number;
    sensores: string[];

    constructor(dados: any) {

        this.altitudeMax = dados.altitude_max;
        this.sensores = dados.sensores;
    }

}