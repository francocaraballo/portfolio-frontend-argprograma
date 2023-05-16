import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StudyModel } from 'src/app/models/study.model';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.scss', '../work/work.component.scss']
})
export class StudiesComponent implements OnInit {
  @Input() studiesData: any;
  @Output() studyRemove: EventEmitter<StudyModel> = new EventEmitter();

  logged = false;
  
  constructor(private tokenService: TokenService){}

  ngOnInit(): void {
    this.isLogged()
  }

  deleteStudy(studyToDelete: StudyModel) {
    console.log("eliminar ", studyToDelete);
    this.studyRemove.emit(studyToDelete);
  }

  isLogged(){
    if(this.tokenService.getToken()){
      this.logged = true;
    } else {
      this.logged = false;
    }
  }
}
