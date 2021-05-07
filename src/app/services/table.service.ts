import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from 'app/model/api.response';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TableService {

  constructor(private http: HttpClient) { }

  searchAllTables() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${environment.baseUrl}/table/searchAllTables`);
  }

  upload(data) {
    return this.http.post(`${environment.baseUrl}/table/upload`, data);
  }

}
