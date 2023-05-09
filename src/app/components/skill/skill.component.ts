import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SkillModel } from 'src/app/models/skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {
  @Input() skillData!: SkillModel;
  @Output() skillRemove: EventEmitter<SkillModel> = new EventEmitter();

  deleteSkill(skillToDelete: SkillModel){
    console.log("eliminar", skillToDelete);
    this.skillRemove.emit(skillToDelete);
  }

}
