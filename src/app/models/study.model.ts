export class StudyModel {
    id!: number;
    nombreF: string;
    descripcionF: string;
    imagenUrl: string

    constructor(nombreF: string, descripcionF: string, imagenUrl: string){
        this.nombreF = nombreF;
        this.descripcionF = descripcionF;
        this.imagenUrl = imagenUrl;
    }
}