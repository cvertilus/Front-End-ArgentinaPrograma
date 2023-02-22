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

  public obtenerDatos():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.apiUrl);
  }

  public actualizarExperiencia(datos: Experiencia):Observable<Experiencia> {
    const url = `${this.apiUrl}/${datos.id}`
    return this.http.put<Experiencia>(url,datos);
  }

  public agregarExperiencia(nuevaExp: Experiencia):Observable<Experiencia[]> {
    return this.http.post<Experiencia[]>(this.apiUrl,nuevaExp);
  }

  eliminarExperiencia(eliminarExp: Experiencia) :Observable<Experiencia>{
    const url = `${this.apiUrl}/${eliminarExp.id}`
    return this.http.delete<Experiencia>(url)
    
  }
}


