import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceRequestService {
  constructor(private http: HttpClient) {}

  getData(model: string, dataFilter?: any): Observable<any> {
    let url = 'http://localhost:3000/' + model;
    if (dataFilter) {
      //
      const filter = { where: { nombre: { like: dataFilter, options: 'i' } } };
      const params = new HttpParams().append('filter', JSON.stringify(filter));
      const httpOptions = {
        params,
      };
      return this.http.get(url, httpOptions);
    } else {
      return this.http.get(url);
    }
  }

  postData(model: string, data: string): Observable<any> {
    let url = 'http://localhost:3000/' + model;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const httpOptions = {
      headers,
    };
    return this.http.post(url, data, httpOptions);
  }

  deleteData(model: string, code: string): Observable<any> {
    let url = 'http://localhost:3000/' + model + '/' + code;
    return this.http.delete(url);
  }

  patchData(model: string, data: string, code: string): Observable<any> {
    let url = 'http://localhost:3000/' + model + '/' + code;

    // const filter: any = {};
    // const field: any = {};
    // field[keyCode] = code;
    // filter['where'] = field;

    // const params = new HttpParams().append('filter', JSON.stringify(filter));

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const httpOptions = {
      headers,
      // params,
    };
    return this.http.patch(url, data, httpOptions);
  }
}
