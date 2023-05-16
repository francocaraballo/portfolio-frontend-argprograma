import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WorkModel } from 'src/app/models/work.model';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  logged = false;

  @Input() workData!: any;
  @Output() workRemove: EventEmitter<WorkModel> = new EventEmitter();

  constructor(private tokenService: TokenService){}

  ngOnInit(): void {
    this.isLogged();
  }

  deleteWork(workToDelete: WorkModel){
    console.log("eliminar ", workToDelete);
    this.workRemove.emit(workToDelete);
  }

  isLogged(){
    if(this.tokenService.getToken()){
      this.logged = true;
    } else {
      this.logged = false;
    }
  }

}
