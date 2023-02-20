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

}
