import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { SkillModel } from '../models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class HardSkillsService {

  private hardSkillsURL = 'https://backendfnc.onrender.com/hardskill/';


  constructor(private http: HttpClient) { }

  getSkillsList(): Observable<SkillModel[]> {
    return this.http.get<SkillModel[]>(this.hardSkillsURL + 'list');
  }

  saveSkill(skill: SkillModel) {
    return this.http.post<SkillModel>(this.hardSkillsURL + 'create', skill);
  }

  updateSkill(id: number, skill: SkillModel): Observable<any>{
    return this.http.put<any>(this.hardSkillsURL + `update/${id}`, skill);

  }

  removeSkill(id: number): Observable<SkillModel> {
    return this.http.delete<SkillModel>(this.hardSkillsURL + `delete/${id}`);
  }

  skillDetail(id: number): Observable<SkillModel>{
    return this.http.get<SkillModel>(this.hardSkillsURL + `detail/${id}`);
  }
}
