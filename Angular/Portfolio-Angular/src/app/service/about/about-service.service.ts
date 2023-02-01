import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Aboutme } from 'src/app/components/about-me/about';


@Injectable({
  providedIn: 'root'
})
export class AboutServiceService {
  private apiUrl = "http://localhost:5000/AboutMe"

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<Aboutme>{
    return this.http.get<Aboutme>(this.apiUrl);
  }
}
