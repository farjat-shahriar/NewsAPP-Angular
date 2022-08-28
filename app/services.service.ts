import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }
  NewsUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=cb98bad807c544f089ba7368a8e97a6c'
  TechUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=cb98bad807c544f089ba7368a8e97a6c'
  Businessline = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cb98bad807c544f089ba7368a8e97a6c'

  TopHeadline(): Observable<any> {
    return this.http.get(this.NewsUrl);
  }
   Techline(): Observable<any> {
    return this.http.get(this.TechUrl);
  } 
  TopBusinessline(): Observable<any> {
    return this.http.get(this.Businessline);
  }
}
