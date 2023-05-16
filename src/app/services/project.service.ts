import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjectModel } from '../models/project.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projectsURL = 'http://localhost:8080/proyectos/';

  constructor(private http: HttpClient) { }

  public getProjectsList() : Observable<ProjectModel[]> {
    return this.http.get<ProjectModel[]>(this.projectsURL + 'list');
  }

  public projectDetail(id: number): Observable<ProjectModel>{
    return this.http.get<ProjectModel>(this.projectsURL + `detail/${id}`);
  }

  public saveProject(project: ProjectModel): Observable<any> {
    return this.http.post<any>(this.projectsURL + 'create', project);
  }

  public updateProject(id: number, project: ProjectModel): Observable<any> {
    return this.http.put<any>(this.projectsURL + `update/${id}`, project);
  }

  public deleteProject(id: number): Observable<ProjectModel> {
    return this.http.delete<any>(this.projectsURL + `delete/${id}`);
  }
}
