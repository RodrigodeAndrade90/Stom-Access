class QualidadeAr {
    data: Date;
    pm25: number;
    pm10: number;
    ozonioPpb: number;
    coPpm: number;

    constructor(data: Date, pm25: number, pm10: number, ozonioPpb: number, coPpm: number) {
        this.data = data;
        this.pm25 = pm25;
        this.pm10 = pm10;
        this.ozonioPpb = ozonioPpb;
        this.coPpm = coPpm;
    }
}

export default QualidadeAr;
