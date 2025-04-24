class HistoricoDados {
    id: string;
    dataHora: Date;
    tipoDado: string;
    valorAnterior: any;
    valorNovo: any;
    usuarioModificacao: string;

    constructor(id: string, dataHora: Date, tipoDado: string, valorAnterior: any, valorNovo: any, usuarioModificacao: string) {
        this.id = id;
        this.dataHora = dataHora;
        this.tipoDado = tipoDado;
        this.valorAnterior = valorAnterior;
        this.valorNovo = valorNovo;
        this.usuarioModificacao = usuarioModificacao;
    }
}

export default HistoricoDados;
