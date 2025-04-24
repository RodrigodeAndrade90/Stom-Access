class AlertaMeteorologico {
    codigo: string;
    tipo: string;
    nivel: string;
    areaAfetada: string;
    validadeInicio: Date;
    validadeFim: Date;

    constructor(codigo: string, tipo: string, nivel: string, areaAfetada: string, validadeInicio: Date, validadeFim: Date) {
        this.codigo = codigo;
        this.tipo = tipo;
        this.nivel = nivel;
        this.areaAfetada = areaAfetada;
        this.validadeInicio = validadeInicio;
        this.validadeFim = validadeFim;
    }
}

export default AlertaMeteorologico;
