import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private url = 'https://mailthis.to/verticol'

  constructor(private httpclient: HttpClient) { }

  public sendEmail(input: any) {
    return this.httpclient.post(this.url, input, { responseType: 'text' }).pipe(
      map(
      (response: any) => {
        if (response) return response;
      },
      (error: any) => {
        return error;
      }
      )
    )
  }
}
