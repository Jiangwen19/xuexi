import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../model/api.response';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  constructor(private http: HttpClient) { }

  getConsumerList(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${environment.baseUrl}/history/userList`);
  }

  searchConsumer(str: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${environment.baseUrl}/history/userSearch/${str}`);
  }

  getFavList(userId: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${environment.baseUrl}/history/favList/${userId}`);
  }

  getMisList(userId: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${environment.baseUrl}/history/misList/${userId}`);
  }

  deleteFavByIds(favIds: number[]): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${environment.baseUrl}/history/favDelete`, favIds);
  }

  deleteMisByIds(misIds: number[]): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${environment.baseUrl}/history/MisDelete`, misIds);
  }
}
