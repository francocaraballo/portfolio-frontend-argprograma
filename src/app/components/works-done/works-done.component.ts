import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private workListService: WorkListService){}

  ngOnInit(): void {
    this.getWorkList();
  }

  getWorkList(): void{
    this.workListService.getWorks().subscribe( workList => this.workList = workList);
  }

  addWork(): void{
    let newId: number = this.workList.length + 1;
    const newWork: WorkModel = {
      id: newId,
      title: `trabajo ${newId}`,
      urlImage: "https://res.cloudinary.com/discountclub/image/upload/6k6LzXgpzeWZVUFYIbRpAIrzmmVCLYC4zcn76Ir4.png",
      description: "Uno de los mejores trabajos lejos"
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
}
