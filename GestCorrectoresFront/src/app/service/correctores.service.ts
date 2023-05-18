import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Corrector } from '../models/correctores';

@Injectable({
  providedIn: 'root'
})
export class CorrectorService {

  private apiUrl = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  getAllCorrectors(): Observable<Corrector[]> {
    return this.http.get<[Corrector]>(`${this.apiUrl}/correctores`);
  }

  getCorrectorById(id: number): Observable<Corrector> {
    return this.http.get<Corrector>(`${this.apiUrl}/correctores/${id}`);
  }

  addCorrector(corrector: Corrector): Observable<any> {
    return this.http.post(`${this.apiUrl}/correctores`, corrector, { observe: 'response' });
  }

  updateCorrector(corrector: Corrector): Observable<any> {
    return this.http.put(`${this.apiUrl}/correctores/${corrector.id}`, corrector, { observe: 'response' });
  }

  deleteCorrector(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/correctores/${id}`, { observe: 'response' });
  }

}
