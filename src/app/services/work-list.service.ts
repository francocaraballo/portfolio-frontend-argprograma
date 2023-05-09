import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { WorkModel } from '../models/work.model';

@Injectable({
  providedIn: 'root'
})
export class WorkListService {

  private worksUrl = 'api/works';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  
  getWorks(): Observable<WorkModel[]> {
    return this.http.get<WorkModel[]>(this.worksUrl).pipe(
      catchError(this.handleError<WorkModel[]>('getWorks',[]))
      );
    }
    
  add(workAdd: WorkModel){
    return this.http.post<WorkModel>(this.worksUrl, workAdd, this.httpOptions).pipe(
      tap((newWork: WorkModel) => console.log(newWork.title)),
      catchError(this.handleError<WorkModel>('addWork'))
      );
      }

  remove(id: number): Observable<WorkModel>{
    const url = `${this.worksUrl}/${id}`;

    return this.http.delete<WorkModel>(url, this.httpOptions).pipe(
      tap(() => console.log(`deleted work id=${id}`)),
      catchError(this.handleError<WorkModel>('deleteWork'))
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
