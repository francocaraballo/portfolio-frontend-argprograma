import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StudyModel } from 'src/app/models/study.model';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.scss', '../work/work.component.scss']
})
export class StudiesComponent {
  @Input() studiesData: any;
  @Output() studyRemove: EventEmitter<StudyModel> = new EventEmitter();

  deleteStudy(studyToDelete: StudyModel) {
    console.log("eliminar ", studyToDelete);
    this.studyRemove.emit(studyToDelete);
  }
}
