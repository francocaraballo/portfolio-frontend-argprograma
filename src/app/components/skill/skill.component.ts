import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SkillModel } from 'src/app/models/skill.model';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  @Input() skillData!: SkillModel;
  @Output() skillRemove: EventEmitter<SkillModel> = new EventEmitter();

  logged = false;

  deleteSkill(skillToDelete: SkillModel){
    console.log("eliminar", skillToDelete);
    this.skillRemove.emit(skillToDelete);
  }

  constructor(private tokenService: TokenService){}

  ngOnInit(): void {
    this.isLogged();
  }

  isLogged(){
    if(this.tokenService.getToken()){
      this.logged = true;
    } else {
      this.logged = false;
    }
  }
  



}
