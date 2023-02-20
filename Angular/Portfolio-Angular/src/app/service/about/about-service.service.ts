import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aboutme } from 'src/app/components/about-me/about';

const httpOptions = {
  headers : new HttpHeaders
   

}

@Injectable({
  providedIn: 'root'
})
export class AboutServiceService {
  private apiUrl = "http://localhost:5000/AboutMe"

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<Aboutme>{
    return this.http.get<Aboutme>(this.apiUrl);
  }
  updateAboutMe(about:Aboutme):Observable<Aboutme>{
    return this.http.put<Aboutme>(this.apiUrl,about,httpOptions);
  }



}
