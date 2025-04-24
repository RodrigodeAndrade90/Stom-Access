class Precipitacao {
    data: Date;
    tipo: string;
    quantidadeMm: number;
    duracaoMin: number;
    intensidade: string;

    constructor(data: Date, tipo: string, quantidadeMm: number, duracaoMin: number, intensidade: string) {
        this.data = data;
        this.tipo = tipo;
        this.quantidadeMm = quantidadeMm;
        this.duracaoMin = duracaoMin;
        this.intensidade = intensidade;
    }
}

export default Precipitacao;
