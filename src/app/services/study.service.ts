import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudyModel } from '../models/study.model';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudyService {

  studiesURL = 'https://backendfnc.onrender.com/formacion/';

  constructor(private http: HttpClient) { }

  public getStudyList() : Observable<StudyModel[]> {
    return this.http.get<StudyModel[]>(this.studiesURL + 'list');
  }

  public studyDetail(id: number): Observable<StudyModel>{
    return this.http.get<StudyModel>(this.studiesURL + `detail/${id}`);
  }

  public saveStudy(work: StudyModel): Observable<any> {
    return this.http.post<any>(this.studiesURL + 'create', work);
  }

  public updateStudy(id: number, work: StudyModel): Observable<any> {
    return this.http.put<any>(this.studiesURL + `update/${id}`, work);
  }

  public deleteStudy(id: number): Observable<StudyModel> {
    return this.http.delete<any>(this.studiesURL + `delete/${id}`);
    // .pipe(
    //   tap(() => console.log(`deleted study id=${id}`)),
    //   catchError(this.handleError<StudyModel>('deleteWork'))
    //   );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      console.log(`${operation} failed: ${error.body.error}`);
      return of(result as T);
      };
    }


}
