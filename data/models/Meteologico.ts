// Classes base para componentes específicos
class DataHora {
    constructor(
        public Data: Date,
        public Time: string
    ) {}
}

class Temperatura {
    constructor(
        public Temp_C: number,
        public TempCabine_C: number
    ) {}
}

class Umidade {
    constructor(
        public Hum: number
    ) {}
}

class Pressao {
    constructor(
        public Press_Bar: number
    ) {}
}

class Carga {
    constructor(
        public Charge: number
    ) {}
}

class RadiacaoSolar {
    constructor(
        public SR_Wm2: number
    ) {}
}

class VentoPico {
    constructor(
        public WindPeak_ms: number
    ) {}
}

class VelocidadeVento {
    constructor(
        public WindSpeed_Inst: number,
        public WindSpeed_Avg: number
    ) {}
}

class DirecaoVento {
    constructor(
        public WindDir_Inst: number,
        public WindDir_Avg: number
    ) {}
}

// Classe principal agregando componentes
class Meteologico{
    constructor(
        public dataHora: DataHora,
        public temperatura: Temperatura,
        public umidade: Umidade,
        public pressao: Pressao,
        public carga: Carga,
        public radiacaoSolar: RadiacaoSolar,
        public ventoPico: VentoPico,
        public velocidadeVento: VelocidadeVento,
        public direcaoVento: DirecaoVento
    ) {}
}

export default Meteologico;