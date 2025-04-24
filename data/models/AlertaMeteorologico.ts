class AlertaMeteorologico {
    Codigo: string;
    Tipo: string;
    Nivel: string;
    AreaAfetada: string;
    ValidadeInicio: Date;
    ValidadeFim: Date;

    constructor(codigo: string, tipo: string, nivel: string, area: string, inicio: Date, fim: Date) {
        this.Codigo = codigo;
        this.Tipo = tipo;
        this.Nivel = nivel;
        this.AreaAfetada = area;
        this.ValidadeInicio = inicio;
        this.ValidadeFim = fim;
    }
}

export default AlertaMeteorologico;