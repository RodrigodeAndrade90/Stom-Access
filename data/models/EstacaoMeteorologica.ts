class EstacaoMeteorologica {
    ID: string;
    Localizacao: string;
    Altitude_m: number;
    Sensores: string[];
    UltimaManutencao: Date;

    constructor(id: string, local: string, altitude: number, sensores: string[], manutencao: Date) {
        this.ID = id;
        this.Localizacao = local;
        this.Altitude_m = altitude;
        this.Sensores = sensores;
        this.UltimaManutencao = manutencao;
    }
}

export default EstacaoMeteorologica;