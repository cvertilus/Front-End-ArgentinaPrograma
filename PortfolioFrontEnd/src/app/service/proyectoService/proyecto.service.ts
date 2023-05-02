import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from 'src/app/components/proyecto/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private  url = 'https://localhost:8080/proyecto';

  constructor(private http:HttpClient) { }

  public getProyecto():Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.url)
  }

  public postProyecto(proyecto:Proyecto):Observable<Proyecto>{
    return this.http.post<Proyecto>(this.url,proyecto)
  }

  public deleteProyecto(proyecto:Proyecto):Observable<Proyecto>{
    const api = `${this.url}/${proyecto.id}`
    return this.http.delete<Proyecto>(api)
  }

  public putProyecto(proyecto:Proyecto):Observable<Proyecto>{
    const api = `${this.url}/${proyecto.id}`
    return this.http.put<Proyecto>(api,proyecto)
  }


}
