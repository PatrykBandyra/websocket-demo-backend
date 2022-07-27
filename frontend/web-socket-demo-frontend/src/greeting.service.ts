import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Greeting} from "./greeting";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GreetingService {

  constructor(private http: HttpClient) {
  }

  getGreeting(): Observable<Greeting> {
    return this.http.get<Greeting>("/api/hello");
  }
}
