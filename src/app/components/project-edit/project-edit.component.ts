import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectModel } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss']
})
export class ProjectEditComponent implements OnInit{

  @Input() project!: ProjectModel;

  constructor(
    private projectService: ProjectService,
    private modalService: NgbModal){}

  
  ngOnInit(): void {
    const id = this.project.id;
    this.projectService.projectDetail(id!).subscribe(
      {
        next: data => {
          this.project = data;
        },
        error: err => {
          console.log(err);
        }
      })
  }

  onUpdate(): void {
    const id =  this.project.id;
    this.projectService.updateProject(id!, this.project).subscribe(
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

  openVerticallyCentered(content: any) {
		this.modalService.open(content, { centered: true });
	}

}
