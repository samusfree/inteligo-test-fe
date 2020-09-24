import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { GeoPoint } from '../model/geopoint';


@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(private http: HttpClient) { }

  getAtms(): Observable<GeoPoint[]> {
    // now returns an Observable of Config
    return this.http.get<GeoPoint[]>(environment.url_base + "v1/location/atm");
  }
}
