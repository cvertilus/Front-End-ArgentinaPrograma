import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from 'src/app/components/habilidad/habiliad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  private url = 'http://localhost:8080/habilidad'

  constructor(private http:HttpClient) { }

  public getHablidad():Observable<Habilidad[]>{
    return this.http.get<Habilidad[]>(this.url)

  }

  public postHabilidad(habilidad:Habilidad):Observable<Habilidad>{
    return this.http.post<Habilidad>(this.url,habilidad)
  }

  public deleteHabilidad(habilidad:Habilidad):Observable<Habilidad>{
    const api = `${this.url}/${habilidad.id}`
    return this.http.delete<Habilidad>(api)
  }

  public putHabiliad(habilidad:Habilidad):Observable<Habilidad>{
    const api = `${this.url}/${habilidad.id}`
    return this.http.put<Habilidad>(api,habilidad)
  }
}
