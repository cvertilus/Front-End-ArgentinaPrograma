import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from 'src/app/components/skills/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  
  private apiUrl="http://localhost:5000/Skills"

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<Skill[]>{
    return this.http.get<Skill[]>(this.apiUrl);
  }

  public updateSkill(data:Skill) :Observable<Skill>{
    const url = `${this.apiUrl}/${data.id}`
    return this.http.put<Skill>(url,data)
  }

  public eliminarSkill(data:Skill):Observable<Skill>{
    const url = `${this.apiUrl}/${data.id}`
    return this.http.delete<Skill>(url)

  }

  agregarSkill(dato: Skill):Observable<Skill[]> {
    return this.http.post<Skill[]>(this.apiUrl,dato);
  }

}
