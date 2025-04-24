class DadosMeteorologicos {
    data: Date;
    hora: string;
    temperaturaC: number;
    umidadePercent: number;
    pressaoBar: number;
    temperaturaCabineC: number;
    carga: number;
    radiacaoSolarWm2: number;
    picoVentoMs: number;
    ventoInstMs: number;
    ventoMedioMs: number;
    direcaoVentoInst: number;
    direcaoVentoMedia: number;

    constructor(
        data: Date,
        hora: string,
        temperatura: number,
        umidade: number,
        pressao: number,
        temperaturaCabine: number,
        carga: number,
        radiacaoSolar: number,
        picoVento: number,
        ventoInst: number,
        ventoMedio: number,
        direcaoVentoInst: number,
        direcaoVentoMedia: number
    ) {
        this.data = data;
        this.hora = hora;
        this.temperaturaC = temperatura;
        this.umidadePercent = umidade;
        this.pressaoBar = pressao;
        this.temperaturaCabineC = temperaturaCabine;
        this.carga = carga;
        this.radiacaoSolarWm2 = radiacaoSolar;
        this.picoVentoMs = picoVento;
        this.ventoInstMs = ventoInst;
        this.ventoMedioMs = ventoMedio;
        this.direcaoVentoInst = direcaoVentoInst;
        this.direcaoVentoMedia = direcaoVentoMedia;
    }
}

export default DadosMeteorologicos;
