import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SkillModel } from 'src/app/models/skill.model';
import { SoftSkillsService } from 'src/app/services/soft-skills.service';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.component.html',
  styleUrls: ['./soft-skills.component.scss', '../hard-skills/hard-skills.component.scss']
})
export class SoftSkillsComponent implements OnInit {

  softSkillsList: SkillModel[] = [];

  titulo: string = '';
  color: string = '';
  porcentaje!: number;

  logged = false;
  

  constructor(
    private softSkillsService: SoftSkillsService,
    private tokenService: TokenService,
    private modalService: NgbModal){}

  ngOnInit(): void {
    this.getSoftSkillsList();
    this.isLogged();
  }


  getSoftSkillsList(): void {
    this.softSkillsService.getSkillsList().subscribe( skillsList => this.softSkillsList = skillsList); 
  }

  onCreate(): void {
    const skill = new SkillModel(this.titulo, this.color, this.porcentaje);
    this.softSkillsService.saveSkill(skill).subscribe(
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

  removeSkill(skillToRemove: SkillModel): void {
    this.softSkillsService.removeSkill(skillToRemove.id).subscribe();
    this.getSoftSkillsList();
  }

  openVerticallyCentered(content: any) {
		this.modalService.open(content, { centered: true });
	}

  isLogged(){
    if(this.tokenService.getToken()){
      this.logged = true;
    } else {
      this.logged = false;
    }
  }

}
