import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from 'src/app/components/proyectos/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private apiUrl = "http://localhost:5000/Proyectos"

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.apiUrl);
  }
}
