import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { StudyModel } from '../models/study.model';

@Injectable({
  providedIn: 'root'
})
export class StudiesListService {

  private studiesUrl = '';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getStudies(): Observable<StudyModel[]> {
    return this.http.get<StudyModel[]>(this.studiesUrl).pipe(
      catchError(this.handleError<StudyModel[]>('getWorks',[]))
      );
    }
    
  // add(studyAdd: StudyModel){
  //   return this.http.post<StudyModel>(this.studiesUrl, studyAdd, this.httpOptions).pipe(
  //     tap((newStudy: StudyModel) => console.log(newStudy.title)),
  //     catchError(this.handleError<StudyModel>('addStudy'))
  //     );
  //   }

    remove(id: number): Observable<StudyModel>{
      const url = `${this.studiesUrl}/${id}`;

      return this.http.delete<StudyModel>(url, this.httpOptions).pipe(
        tap(() => console.log(`deleted study id=${id}`)),
        catchError(this.handleError<StudyModel>('deleteWork'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      console.log(`${operation} failed: ${error.body.error}`);
      return of(result as T);
      };
    }
}
