import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProjectModel } from 'src/app/models/project.model';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss', '../work/work.component.scss']
})
export class ProjectsComponent implements OnInit {

  @Input() projectData!: any;
  @Output() projectRemove: EventEmitter<ProjectModel> = new EventEmitter();

  logged = false;

  constructor(private tokenService: TokenService){}

  ngOnInit(): void {
    this.isLogged();
  }

  deleteProject(projectToDelete: ProjectModel){
    console.log("eliminar", projectToDelete);
    this.projectRemove.emit(projectToDelete);
  }

  isLogged(){
    if(this.tokenService.getToken()){
      this.logged = true;
    } else {
      this.logged = false;
    }
  }


}
