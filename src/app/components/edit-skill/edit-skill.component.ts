import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SkillModel } from 'src/app/models/skill.model';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.scss']
})
export class EditSkillComponent {

  @Input() skillDataIn!: SkillModel;

  constructor(private modalService: NgbModal){}

  openVerticallyCentered(content: any) {
		this.modalService.open(content, { centered: true });
	}



}
