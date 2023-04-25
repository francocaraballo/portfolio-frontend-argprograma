import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WorkModel } from 'src/app/models/work.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  @Input() workDataIn!: WorkModel;

  constructor(private modalService: NgbModal){}

  openVerticallyCentered(content: any) {
		this.modalService.open(content, { centered: true });
	}

}
