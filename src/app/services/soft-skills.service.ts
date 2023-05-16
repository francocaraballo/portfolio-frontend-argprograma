import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { SkillModel } from '../models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SoftSkillsService {

  private softSkillsURL = 'https://backendfnc.onrender.com/softskill/';


  constructor(private http: HttpClient) { }

  getSkillsList(): Observable<SkillModel[]> {
    return this.http.get<SkillModel[]>(this.softSkillsURL + 'list');
  }

  saveSkill(skill: SkillModel) {
    return this.http.post<SkillModel>(this.softSkillsURL + 'create', skill);
  }

  updateSkill(id: number, skill: SkillModel): Observable<any>{
    return this.http.put<any>(this.softSkillsURL + `update/${id}`, skill);

  }


  removeSkill(id: number): Observable<SkillModel> {
    return this.http.delete<SkillModel>(this.softSkillsURL + `delete/${id}`);
  }

  skillDetail(id: number): Observable<SkillModel>{
    return this.http.get<SkillModel>(this.softSkillsURL + `detail/${id}`);
  }

}

