import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StudyModel } from 'src/app/models/study.model';
import { StudyService } from 'src/app/services/study.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-studies-done',
  templateUrl: './studies-done.component.html',
  styleUrls: ['./studies-done.component.scss', '../works-done/works-done.component.scss']
})
export class StudiesDoneComponent {

  @Input() title: string = "";
  studiesList: StudyModel[] = [];

  nombreF: string = '';
  descripcionF: string = '';
  imagenUrl: string = '';

  logged = false;

  constructor(
    private studyService: StudyService,
    private tokenService: TokenService,
    private modalService: NgbModal){}

  ngOnInit(): void {
    this.getStudyList();
  }

  getStudyList(): void{
    this.studyService.getStudyList().subscribe( studiesList => this.studiesList = studiesList);
  }

  onCreate(): void {
    const study = new StudyModel(this.nombreF, this.descripcionF, this.imagenUrl);
    this.studyService.saveStudy(study).subscribe();
    this.modalService.dismissAll();
  }

  
  removeStudy(studyToRemove: StudyModel): void{
    this.studyService.deleteStudy(studyToRemove.id).subscribe();
    this.getStudyList();
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
