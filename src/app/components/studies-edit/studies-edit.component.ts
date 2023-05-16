import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StudyModel } from 'src/app/models/study.model';
import { StudyService } from 'src/app/services/study.service';

@Component({
  selector: 'app-studies-edit',
  templateUrl: './studies-edit.component.html',
  styleUrls: ['./studies-edit.component.scss']
})
export class StudiesEditComponent implements OnInit {
  @Input() study!: StudyModel;
  

  constructor(
    private studyService: StudyService,
    private modalService: NgbModal){}

  ngOnInit(): void {
    const id = this.study.id;
    this.studyService.studyDetail(id!).subscribe();
  }

  onUpdate(): void{
    const id = this.study.id;
    this.studyService.updateStudy(id!, this.study).subscribe();
    this.modalService.dismissAll();
  }

  openVerticallyCentered(content: any) {
		this.modalService.open(content, { centered: true });
	}

  
}
