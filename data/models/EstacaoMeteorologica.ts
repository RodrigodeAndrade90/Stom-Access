class EstacaoMeteorologica {
    id: string;
    localizacao: string;
    altitudeM: number;
    sensores: string[];
    ultimaManutencao: Date;

    constructor(id: string, localizacao: string, altitudeM: number, sensores: string[], ultimaManutencao: Date) {
        this.id = id;
        this.localizacao = localizacao;
        this.altitudeM = altitudeM;
        this.sensores = sensores;
        this.ultimaManutencao = ultimaManutencao;
    }
}

export default EstacaoMeteorologica;
