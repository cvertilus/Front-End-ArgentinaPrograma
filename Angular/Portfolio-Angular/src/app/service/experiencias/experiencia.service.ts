import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private apiUrl = "http://localhost:5000/Experiencias"

  constructor(private http:HttpClient) { }
  obtenerDatos():Observable<any>{
    return this.http.get('/assets/Datos/experienciasEduacion.json');
  }
}
