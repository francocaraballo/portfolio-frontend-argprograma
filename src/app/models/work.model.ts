export class WorkModel {
    // Estos campos tienen que coincidir con los nombres del back
    id? : number;
    nombreE : string;
    descripcionE : string;
    imagenUrl: string

    constructor(nombreE: string, descripcionE: string, imagenUrl: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.imagenUrl = imagenUrl;
    }
}
