export class HoraModel {
    public hora: number;
    public minuto: number;

    constructor (hora: number, minuto: number) {
        this.hora = (hora) ? hora : null;
        this.minuto = (minuto) ? minuto : null;
    }
}
export class PicoplacaModel {
    public numeroPlaca: number;
    public fecha: string;
    public hora: HoraModel;
}
