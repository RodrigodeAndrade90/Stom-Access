class EventoClimatico {
    id: string;
    tipoEvento: string;
    intensidade: string;
    areaAfetada: string[];
    dataInicio: Date;
    dataFim: Date;
    danosRegistrados: string;

    constructor(id: string, tipoEvento: string, intensidade: string, areaAfetada: string[], dataInicio: Date, dataFim: Date, danosRegistrados: string) {
        this.id = id;
        this.tipoEvento = tipoEvento;
        this.intensidade = intensidade;
        this.areaAfetada = areaAfetada;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
        this.danosRegistrados = danosRegistrados;
    }
}

export default EventoClimatico;
