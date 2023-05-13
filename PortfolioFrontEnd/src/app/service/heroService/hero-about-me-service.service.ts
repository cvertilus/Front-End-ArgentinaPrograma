import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HeroAboutMe } from '../../components/hero-about-me/heroAboutMe';
import { Observable } from 'rxjs';

 

@Injectable({
  providedIn: 'root'
})

export class HeroAboutMeServiceService {
  
  private url = "https://backendportfolioap-jada.onrender.com/hero";

  constructor(private http:HttpClient) { }

  public obtenerDatos(): Observable<HeroAboutMe[]>{
    return this.http.get<HeroAboutMe[]>(this.url);

  }

  public editarDatos(hero:HeroAboutMe): Observable<HeroAboutMe>{
    const apiurl = `${this.url}/${hero.id}`
    return this.http.put<HeroAboutMe>(apiurl,hero);
  }

  public cargarDatos(hero: HeroAboutMe):Observable<HeroAboutMe> {
   return this.http.post<HeroAboutMe>(this.url,hero);
  }
}
