class QualidadeAr {
    Data: Date;
    PM2_5: number;
    PM10: number;
    Ozonio_ppb: number;
    CO_ppm: number;

    constructor(data: Date, pm25: number, pm10: number, ozonio: number, co: number) {
        this.Data = data;
        this.PM2_5 = pm25;
        this.PM10 = pm10;
        this.Ozonio_ppb = ozonio;
        this.CO_ppm = co;
    }
}
export default QualidadeAr;