import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from 'src/app/components/experiencia-educacion/educacion/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private url = "https://backendportfolioap-jada.onrender.com/educacion"

  constructor(private http:HttpClient) { }

  public getEducacion():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.url)
  }

  public postEducacion(educacion:Educacion):Observable<Educacion>{
    return this.http.post<Educacion>(this.url,educacion)

  }

  public deleteEducacion(educacion:Educacion):Observable<Educacion>{
    const api= `${this.url}/${educacion.id}`
    return this.http.delete<Educacion>(api)

  }

  public putEducacion(educacion:Educacion):Observable<Educacion>{
    const api= `${this.url}/${educacion.id}`
    return this.http.put<Educacion>(api,educacion)

  }
}
