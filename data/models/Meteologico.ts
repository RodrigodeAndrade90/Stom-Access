class DataHora {
    constructor(public data: Date, public hora: string) {}
}

class Temperatura {
    constructor(public temperaturaC: number, public temperaturaCabineC: number) {}
}

class Umidade {
    constructor(public umidade: number) {}
}

class Pressao {
    constructor(public pressaoBar: number) {}
}

class Carga {
    constructor(public carga: number) {}
}

class RadiacaoSolar {
    constructor(public radiacaoWm2: number) {}
}

class PicoVento {
    constructor(public picoVentoMs: number) {}
}

class VelocidadeVento {
    constructor(public velocidadeInstMs: number, public velocidadeMediaMs: number) {}
}

class DirecaoVento {
    constructor(public direcaoInst: number, public direcaoMedia: number) {}
}


class Meteorologico {
    constructor(
        public dataHora: DataHora,
        public temperatura: Temperatura,
        public umidade: Umidade,
        public pressao: Pressao,
        public carga: Carga,
        public radiacaoSolar: RadiacaoSolar,
        public picoVento: PicoVento,
        public velocidadeVento: VelocidadeVento,
        public direcaoVento: DirecaoVento
    ) {}
}

export default Meteorologico;
