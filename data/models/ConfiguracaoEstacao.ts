class ConfiguracaoEstacao {
    EstacaoID: string;
    IntervaloLeitura_min: number;
    ModoOperacao: string;
    LimiteAlerta: object;
    AtualizacaoFirmware: Date;

    constructor(estacao: string, intervalo: number, modo: string, limites: object, firmware: Date) {
        this.EstacaoID = estacao;
        this.IntervaloLeitura_min = intervalo;
        this.ModoOperacao = modo;
        this.LimiteAlerta = limites;
        this.AtualizacaoFirmware = firmware;
    }
}

export default ConfiguracaoEstacao;