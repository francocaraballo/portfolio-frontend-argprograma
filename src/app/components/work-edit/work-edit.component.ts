import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WorkModel } from 'src/app/models/work.model';
import { WorksService } from 'src/app/services/works.service';

@Component({
  selector: 'app-work-edit',
  templateUrl: './work-edit.component.html',
  styleUrls: ['./work-edit.component.scss']
})
export class WorkEditComponent implements OnInit {

  @Input() work!: WorkModel;

  constructor(
    private worksService: WorksService,
    private modalService: NgbModal){}


  ngOnInit(): void {
    const id = this.work.id;
    this.worksService.workDetail(id!).subscribe(
      {
        next: data => {
          this.work = data;
        },
        error: err => {
          console.log(err);
        }
      })

    
  }

  onUpdate(): void {
    const id =  this.work.id;
    this.worksService.updateWork(id!, this.work).subscribe(
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
