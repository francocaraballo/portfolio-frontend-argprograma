import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WorkModel } from 'src/app/models/work.model';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  @Input() workData!: WorkModel;
  @Output() workRemove: EventEmitter<WorkModel> = new EventEmitter();

  deleteWork(workToDelete: WorkModel){
    console.log("eliminar ", workToDelete);
    this.workRemove.emit(workToDelete);
  }

}
