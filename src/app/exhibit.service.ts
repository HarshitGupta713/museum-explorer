// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class ExhibitService {
//   private apiUrl = 'https://api.example.com/exhibits';

//   constructor(private http: HttpClient) { }

//   getExhibits(id: any): Observable<Exhibit[]> {
//     return this.http.get<Exhibit[]>(this.apiUrl);
//   }
// }

// interface Exhibit {
//   id: number;
//   name: string;
//   // other exhibit properties
// }


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExhibitService {
  private apiUrl = 'https://api.harvardartmuseums.org/object';
  private apiKey = 'cc747964-7309-4222-8436-6919e54da6be';  // Replace with your actual API key

  constructor(private http: HttpClient) { }

  getAllExhibits(): Observable<any[]> {
    const headers = new HttpHeaders().set('apikey', this.apiKey);
    // Add any other necessary parameters for your API call

    return this.http.get<any[]>(this.apiUrl, { headers });
  }

  getExhibitById(id: number): Observable<any> {
    const headers = new HttpHeaders().set('apikey', this.apiKey);
    const params = new HttpParams().set('id', id.toString());

    return this.http.get<any>(this.apiUrl, { headers, params });
  }
}
