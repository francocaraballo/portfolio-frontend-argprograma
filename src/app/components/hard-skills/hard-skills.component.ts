import { Component, OnInit } from '@angular/core';
import { HardSkillsService } from 'src/app/services/hard-skills.service';
import { SkillModel } from 'src/app/models/skill.model';
import { TokenService } from 'src/app/services/token.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hard-skills',
  templateUrl: './hard-skills.component.html',
  styleUrls: ['./hard-skills.component.scss']
})
export class HardSkillsComponent implements OnInit {

  hardSkillsList: SkillModel[] = [];

  titulo: string = '';
  color: string = '';
  porcentaje!: number;

  logged = false;

  constructor(
    private hardSkillsService: HardSkillsService,
    private tokenService: TokenService,
    private modalService: NgbModal){}

  ngOnInit(): void {
    this.getHardSkillsList();
    this.isLogged();
  }


  getHardSkillsList(): void {
    this.hardSkillsService.getSkillsList().subscribe( skillsList => this.hardSkillsList = skillsList); 
  }

  onCreate(): void {
    const skill = new SkillModel(this.titulo, this.color, this.porcentaje);
    this.hardSkillsService.saveSkill(skill).subscribe(
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
    this.hardSkillsService.removeSkill(skillToRemove.id).subscribe();
    this.getHardSkillsList();
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
