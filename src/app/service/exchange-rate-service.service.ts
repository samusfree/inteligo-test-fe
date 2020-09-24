import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ExchangeRate } from '../model/exchange-rate';


@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {
  constructor(private http: HttpClient) { }

  getExchangeRate(): Observable<ExchangeRate> {
    // now returns an Observable of Config
    return this.http.get<ExchangeRate>(environment.url_base + "v1/exchangerate");
  }
}
