import { Component, OnInit } from '@angular/core';
import { SkillModel } from 'src/app/models/skill.model';
import { SoftSkillsService } from 'src/app/services/soft-skills.service';


@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.component.html',
  styleUrls: ['./soft-skills.component.scss']
})
export class SoftSkillsComponent implements OnInit {

  softSkillsList: SkillModel[] = [];

  constructor( private softSkillsService: SoftSkillsService){}

  ngOnInit(): void {
    this.getSoftSkillsList();
  }


  getSoftSkillsList(): void {
    this.softSkillsService.getSkills().subscribe( skillsList => this.softSkillsList = skillsList); 
  }

  addSkill(): void {
    let newId: number = this.softSkillsList.length + 1;
    const newSkill: SkillModel = {
      id: newId,
      value: 100,
      type: "dark",
      description: "New Skill"
    }
    this.softSkillsService.add(newSkill as SkillModel)
      .subscribe((skill: SkillModel) => this.softSkillsList.push(skill));
  }

  removeSkillToList(skillToRemove: SkillModel): void {
    this.softSkillsService.removeSkill(skillToRemove.id).subscribe();
    this.getSoftSkillsList();
  }

}
