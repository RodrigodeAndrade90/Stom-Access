class Sensor {
    Serial: string;
    Tipo: string;
    Fabricante: string;
    Precisao: string;
    DataInstalacao: Date;

    constructor(serial: string, tipo: string, fabricante: string, precisao: string, instalacao: Date) {
        this.Serial = serial;
        this.Tipo = tipo;
        this.Fabricante = fabricante;
        this.Precisao = precisao;
        this.DataInstalacao = instalacao;
    }
}

export default Sensor;