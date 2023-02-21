import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from 'src/app/components/experiencias/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {


  private apiUrl = "http://localhost:5000/Educacion"

  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.apiUrl);
  }

  agregarEducacion(educacion: Educacion): Observable<Educacion[]> {
    return this.http.post<Educacion[]>(this.apiUrl, educacion)
  }

  updateEduacion(actual: Educacion) :Observable<Educacion> {
    const url = `${this.apiUrl}/${actual.id}`
    return this.http.put<Educacion>(url,actual);
  }

  deleteEducacion(actual:Educacion) :Observable<Educacion>{
    const url = `${this.apiUrl}/${actual.id}`
    return this.http.delete<Educacion>(url);
  }

}
