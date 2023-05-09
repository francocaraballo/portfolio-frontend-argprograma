import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { SkillModel } from '../models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class HardSkillsService {

  private hardSkillsUrl = 'api/hardSkills';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getSkills(): Observable<SkillModel[]> {
    return this.http.get<SkillModel[]>(this.hardSkillsUrl)
      .pipe(catchError(this.handleError<SkillModel[]>('getSkills',[]))
      );
  }

  add(skillAdd: SkillModel) {
    return this.http.post<SkillModel>(this.hardSkillsUrl, skillAdd, this.httpOptions).pipe(
      tap((newSkill: SkillModel) => console.log(newSkill.description)),
      catchError(this.handleError<SkillModel>('addSkill'))
    );
  }

  removeSkill(id: number): Observable<SkillModel> {
    const url = `${this.hardSkillsUrl}/${id}`;

    return this.http.delete<SkillModel>(url, this.httpOptions).pipe(
      tap(() => console.log(`deleted hard skill id=${id}`)),
      catchError(this.handleError<SkillModel>('deleteWork'))
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
