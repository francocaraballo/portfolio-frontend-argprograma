import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WorkModel } from 'src/app/models/work.model';
import { TokenService } from 'src/app/services/token.service';
import { WorksService } from 'src/app/services/works.service';

@Component({
  selector: 'app-works-done',
  templateUrl: './works-done.component.html',
  styleUrls: ['./works-done.component.scss']
})
export class WorksDoneComponent implements OnInit {
  @Input() title: string = "";

  nombreE: string = '';
  descripcionE: string = '';
  imagenUrl: string = '';


  workList: WorkModel[] = [];

  logged = false;

  constructor(
    private worksService: WorksService,
    private tokenService: TokenService,
    private modalService: NgbModal){}

  ngOnInit(): void {
    this.getWorkList();
    this.isLogged();
  }


  getWorkList(): void{
    this.worksService.workList().subscribe( data => this.workList = data)
  }


  removeWork(work: WorkModel): void{
    this.worksService.deleteWork(work.id!).subscribe();
    this.getWorkList()
  }

  // delete(id?: number){
  //   if(id != undefined){
  //     this.worksService.deleteWork(id).subscribe(
  //       () => {
  //         this.getWorkList();
  //       }, () => {
  //         alert("No se pudo borrar la experiencia");
  //       }
  //     )
  //   }
  // }

  openVerticallyCentered(content: any) {
		this.modalService.open(content, { centered: true });
	}

  onCreate(): void {
    const work = new WorkModel(this.nombreE, this.descripcionE, this.imagenUrl);
    this.worksService.saveWork(work)
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
}
