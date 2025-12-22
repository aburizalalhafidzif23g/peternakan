import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WilayahService {

  apiUrl = 'http://192.168.2.108:8000/api';

  constructor(private http: HttpClient) { }

  getWilayah() {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json'
    });

    return this.http.get(`${this.apiUrl}/wilayah`, { headers });
  }
}
