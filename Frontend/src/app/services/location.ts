import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Country {
  id: number;
  name: string;
}

export interface State {
  id: number;
  name: string;
  countryId: number;
}

export interface LocationLookupResponse {
  countries: Country[];
  states: State[];
}

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private baseUrl = 'https://localhost:7058/api/Location';

  constructor(private http: HttpClient) {}

  getLookupData(): Observable<LocationLookupResponse> {
    return this.http.get<LocationLookupResponse>(`${this.baseUrl}/lookup`);
  }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.baseUrl}/countries`);
  }

  getStates(countryId: number): Observable<State[]> {
    return this.http.get<State[]>(`${this.baseUrl}/states/${countryId}`);
  }
}