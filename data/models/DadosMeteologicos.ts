class DadosMeteologicos {
    Data: Date;
    Time: string;
    Temp_C: number;
    Hum_percent: number;
    Press_Bar: number;
    TempCabine_C: number;
    Charge: number;
    SR_Wm2: number;
    WindPeak_ms: number;
    WindSpeed_Inst: number;
    WindSpeed_Avg: number;
    WindDir_Inst: number;
    WindDir_Avg: number;

    constructor(data: Date, time: string, temp: number, hum: number, press: number,
        tempCabine: number, charge: number, sr: number, windPeak: number,
        windInst: number, windAvg: number, windDirInst: number, windDirAvg: number) {
        this.Data = data;
        this.Time = time;
        this.Temp_C = temp;
        this.Hum_percent = hum;
        this.Press_Bar = press;
        this.TempCabine_C = tempCabine;
        this.Charge = charge;
        this.SR_Wm2 = sr;
        this.WindPeak_ms = windPeak;
        this.WindSpeed_Inst = windInst;
        this.WindSpeed_Avg = windAvg;
        this.WindDir_Inst = windDirInst;
        this.WindDir_Avg = windDirAvg;
    }
}

export default DadosMeteologicos;