export class ProjectModel {
    id!: number;
    nombreP: string;
    descripcionP: string;
    imagenUrl: string;

    constructor(nombreP: string, descripcionP: string, imagenUrl: string){
        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
        this.imagenUrl = imagenUrl;
    }

}