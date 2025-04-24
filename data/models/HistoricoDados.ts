class HistoricoDados {
    ID: string;
    DataHora: Date;
    TipoDado: string;
    ValorAnterior: any;
    ValorNovo: any;
    UsuarioModificacao: string;

    constructor(id: string, datahora: Date, tipo: string, anterior: any, novo: any, usuario: string) {
        this.ID = id;
        this.DataHora = datahora;
        this.TipoDado = tipo;
        this.ValorAnterior = anterior;
        this.ValorNovo = novo;
        this.UsuarioModificacao = usuario;
    }
}

export default HistoricoDados;