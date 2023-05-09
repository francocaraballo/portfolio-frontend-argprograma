import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WorkModel } from 'src/app/models/work.model';
import { WorkListService } from 'src/app/services/work-list.service';

@Component({
  selector: 'app-works-done',
  templateUrl: './works-done.component.html',
  styleUrls: ['./works-done.component.scss']
})
export class WorksDoneComponent implements OnInit {
  @Input() title: string = "";

  workList: WorkModel[] = [];

  constructor(
    private workListService: WorkListService,
    private modalService: NgbModal){}

  ngOnInit(): void {
    this.getWorkList();
  }

  getWorkList(): void{
    this.workListService.getWorks().subscribe( workList => this.workList = workList);
  }

  addWork(): void{
    let newId: number = this.workList.length + 1;
    let newWork: WorkModel = {
      id: newId,
      title: 'Titulo del trabajo',
      urlImage: 'https://wpdirecto.com/wp-content/uploads/2017/08/alt-de-una-imagen.png',
      description: 'Descripcion'
    }
    this.workListService.add(newWork as WorkModel)
    .subscribe((work: WorkModel) => {
      this.workList.push(work);
    })
  }

  removeWorkToList(workToRemove: WorkModel): void{
    this.workListService.remove(workToRemove.id).subscribe();
    this.getWorkList();
  }

  openVerticallyCentered(content: any) {
		this.modalService.open(content, { centered: true });
    this.addWork();
	}
}
