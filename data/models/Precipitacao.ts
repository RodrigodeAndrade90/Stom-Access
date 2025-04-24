class Precipitacao {
    Data: Date;
    Tipo: string;
    Quantidade_mm: number;
    Duracao_min: number;
    Intensidade: string;

    constructor(data: Date, tipo: string, quantidade: number, duracao: number, intensidade: string) {
        this.Data = data;
        this.Tipo = tipo;
        this.Quantidade_mm = quantidade;
        this.Duracao_min = duracao;
        this.Intensidade = intensidade;
    }
}


export default Precipitacao;