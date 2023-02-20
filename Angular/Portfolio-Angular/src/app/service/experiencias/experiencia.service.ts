import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from 'src/app/components/experiencias/experiencias';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private apiUrl = "http://localhost:5000/Experiencias"

  constructor(private http:HttpClient) { }
  obtenerDatos():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.apiUrl);
  }
}
