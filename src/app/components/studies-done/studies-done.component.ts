import { Component, Input } from '@angular/core';
import { StudyModel } from 'src/app/models/study.model';
import { StudiesListService } from 'src/app/services/studies-list.service';

@Component({
  selector: 'app-studies-done',
  templateUrl: './studies-done.component.html',
  styleUrls: ['./studies-done.component.scss', '../works-done/works-done.component.scss']
})
export class StudiesDoneComponent {

  @Input() title: string = "";
  studiesList: StudyModel[] = [];

  constructor(private studiesListService: StudiesListService){}

  ngOnInit(): void {
    this.getStudyList();
  }

  getStudyList(): void{
    this.studiesListService.getStudies().subscribe( studiesList => this.studiesList = studiesList);
  }

  addStudy(): void{
    let newId: number = this.studiesList.length + 1;
    const newWork: StudyModel = {
      id: newId,
      title: 'Titulo de estudio',
      urlImage: 'https://wpdirecto.com/wp-content/uploads/2017/08/alt-de-una-imagen.png',
      institution: 'Nombre de la institucion'
    }
    this.studiesListService.add(newWork as StudyModel)
    .subscribe((work: StudyModel) => {
      this.studiesList.push(work);
    })
  }

  removeStudyToList(studyToRemove: StudyModel): void{
    this.studiesListService.remove(studyToRemove.id).subscribe();
    this.getStudyList();
  }

}
