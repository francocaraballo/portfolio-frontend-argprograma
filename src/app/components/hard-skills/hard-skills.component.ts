import { Component, OnInit } from '@angular/core';
import { HardSkillsService } from 'src/app/services/hard-skills.service';
import { SkillModel } from 'src/app/models/skill.model';

@Component({
  selector: 'app-hard-skills',
  templateUrl: './hard-skills.component.html',
  styleUrls: ['./hard-skills.component.scss']
})
export class HardSkillsComponent implements OnInit {

  hardSkillsList: SkillModel[] = [];

  constructor( private hardSkillsService: HardSkillsService){}

  ngOnInit(): void {
    this.getHardSkillsList();
  }


  getHardSkillsList(): void {
    this.hardSkillsService.getSkills().subscribe( skillsList => this.hardSkillsList = skillsList); 
  }

  addSkill(): void {
    let newId: number = this.hardSkillsList.length + 1;
    const newSkill: SkillModel = {
      id: newId,
      value: 100,
      type: "dark",
      description: "New Skill"
    }
    this.hardSkillsService.add(newSkill as SkillModel)
      .subscribe((skill: SkillModel) => this.hardSkillsList.push(skill));
  }

  removeSkillToList(skillToRemove: SkillModel): void {
    this.hardSkillsService.removeSkill(skillToRemove.id).subscribe();
    this.getHardSkillsList();
  }

}
