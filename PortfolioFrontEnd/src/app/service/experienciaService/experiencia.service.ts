import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from 'src/app/components/experiencia-educacion/experencia/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private url ="https://backendportfolioap-jada.onrender.com/experiencia"

  constructor(private http:HttpClient) { }

  public getExperiencia():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.url)
  }

  public postExperiencia(experiencia:Experiencia):Observable<Experiencia>{
    return this.http.post<Experiencia>(this.url, experiencia)
  }

  public deleteExperiencia(experiencia:Experiencia):Observable<Experiencia>{
    const api = `${this.url}/${experiencia.id}`
    return this.http.delete<Experiencia>(api)
  }

  public putExperiencia(experiencia:Experiencia):Observable<Experiencia>{
    const api = `${this.url}/${experiencia.id}`
    return this.http.put<Experiencia>(api,experiencia)
  }
}


