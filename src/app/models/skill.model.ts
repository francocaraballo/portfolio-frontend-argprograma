export class SkillModel {
    id!: number;
    titulo: string
    color: string;
    porcentaje: number;

    constructor(titulo: string, color: string, porcentaje: number){
        this.titulo = titulo;
        this.color = color;
        this.porcentaje = porcentaje;
    }
}
