import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SkillModel } from 'src/app/models/skill.model';
import { SoftSkillsService } from 'src/app/services/soft-skills.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.scss']
})
export class EditSkillComponent implements OnInit {

  @Input() skillDataIn!: SkillModel;

  constructor(
    private modalService: NgbModal,
    private softSkillsService: SoftSkillsService){}

  openVerticallyCentered(content: any) {
		this.modalService.open(content, { centered: true });
	}

  ngOnInit(): void {
    const id = this.skillDataIn.id;
    this.softSkillsService.skillDetail(id!).subscribe(
      {
        next: data => {
          this.skillDataIn= data;
        },
        error: err => {
          console.log(err);
        }
      })
    
  }

  onUpdate(): void {
    const id =  this.skillDataIn.id;
    this.softSkillsService.updateSkill(id!, this.skillDataIn).subscribe(
      {
        next: resp => {
          console.log(resp);
        },
        error: err => {
          console.log(err);
        }
      });
    this.modalService.dismissAll();
  }



}
