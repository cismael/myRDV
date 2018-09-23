// Angular modules
import {Injectable} from '@angular/core';

// Angular HTTP
import {HttpClient, HttpHeaders} from '@angular/common/http';

// RxJs
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  private apiUrl = 'http://localhost:8080/api/hello';

  constructor(private http: HttpClient) {
  }

  getHello(): Observable<string> {
    return this.http.get(this.apiUrl, {responseType: 'text'});
  }

}

