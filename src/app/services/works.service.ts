import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkModel } from '../models/work.model';

@Injectable({
  providedIn: 'root'
})
export class WorksService {

  worksURL = 'http://localhost:8080/explab/';

  constructor(private http: HttpClient) { }


  // cambiar nombre al metodo por getworklist
  public workList() : Observable<WorkModel[]> {
    return this.http.get<WorkModel[]>(this.worksURL + 'list');
  }

  public workDetail(id: number): Observable<WorkModel>{
    return this.http.get<WorkModel>(this.worksURL + `detail/${id}`);
  }

  public saveWork(work: WorkModel): Observable<any> {
    return this.http.post<any>(this.worksURL + 'create', work);
  }

  public updateWork(id: number, work: WorkModel): Observable<any> {
    return this.http.put<any>(this.worksURL + `update/${id}`, work);
  }

  public deleteWork(id: number): Observable<WorkModel> {
    return this.http.delete<any>(this.worksURL + `delete/${id}`);
  }
}
