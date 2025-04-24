class EventoClimatico {
    ID: string;
    TipoEvento: string;
    Intensidade: string;
    AreaAfetada: string[];
    DataInicio: Date;
    DataFim: Date;
    DanosRegistrados: string;

    constructor(id: string, tipo: string, intensidade: string, area: string[], inicio: Date, fim: Date, danos: string) {
        this.ID = id;
        this.TipoEvento = tipo;
        this.Intensidade = intensidade;
        this.AreaAfetada = area;
        this.DataInicio = inicio;
        this.DataFim = fim;
        this.DanosRegistrados = danos;
    }
}

export default EventoClimatico;