import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectModel } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-projects-done',
  templateUrl: './projects-done.component.html',
  styleUrls: ['./projects-done.component.scss', '../works-done/works-done.component.scss']
})
export class ProjectsDoneComponent implements OnInit {

  @Input() title: string = "";

  nombreP: string = "";
  descripcionP: string = "";
  imagenUrl: string = "";

  projectsList: ProjectModel[] = [];

  logged = false;

  constructor(
    private projectService: ProjectService,
    private tokenService: TokenService,
    private modalService: NgbModal){}

  ngOnInit(): void {
    this.getProjectsList();
    this.isLogged();

  }

  getProjectsList(): void {
    this.projectService.getProjectsList().subscribe( data => this.projectsList = data);
  }

  removeProject(project: ProjectModel): void {
    this.projectService.deleteProject(project.id).subscribe();
    this.getProjectsList();
  }

  onCreate(): void {
    const project = new ProjectModel(this.nombreP, this.descripcionP, this.imagenUrl);
    this.projectService.saveProject(project)
    .subscribe(
      {
        next: resp => {
          console.log(resp);
        },
        error: err => {
          console.log(err);
        }
      })
    this.modalService.dismissAll();
  }

  isLogged(){
    if(this.tokenService.getToken()){
      this.logged = true;
    } else {
      this.logged = false;
    }
  }

  openVerticallyCentered(content: any) {
		this.modalService.open(content, { centered: true });
	}




}
