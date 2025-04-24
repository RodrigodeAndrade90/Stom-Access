class ConfiguracaoEstacao {
    estacaoId: string;
    intervaloLeituraMin: number;
    modoOperacao: string;
    limiteAlerta: object;
    atualizacaoFirmware: Date;

    constructor(estacaoId: string, intervaloLeituraMin: number, modoOperacao: string, limiteAlerta: object, atualizacaoFirmware: Date) {
        this.estacaoId = estacaoId;
        this.intervaloLeituraMin = intervaloLeituraMin;
        this.modoOperacao = modoOperacao;
        this.limiteAlerta = limiteAlerta;
        this.atualizacaoFirmware = atualizacaoFirmware;
    }
}

export default ConfiguracaoEstacao;
