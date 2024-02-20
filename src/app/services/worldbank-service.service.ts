import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorldbankService {
  private apiUrl = 'http://api.worldbank.org/v2/country/all/indicator/SP.POP.TOTL?format=json';

  constructor(private http: HttpClient) { }

  getCountryData(countryId: string): Observable<any> {
    const apiUrl = `http://api.worldbank.org/v2/country/${countryId}?format=json`;
    return this.http.get(apiUrl);
  }
}
