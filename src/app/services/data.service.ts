import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiResponse } from "app/model/api.response";
import { WordDictionaryVO } from "app/model/word.dictionary.vo";
import { environment } from "environments/environment";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  searchDatas(params: any) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${environment.baseUrl}/data/searchDatas`, params);
  }

  registerDatas(params: WordDictionaryVO) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${environment.baseUrl}/data/registerDatas`, params);
  }

  selectWordBywordId(params: number) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${environment.baseUrl}/data/selectWordBywordId`, params);
  }

  modifyDatas(params: WordDictionaryVO) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${environment.baseUrl}/data/modifyDatas`, params);
  }

  deleteData(params: number) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${environment.baseUrl}/data/deleteData`, params);
  }


  // upload(data) {
  //   return this.http.post(`${environment.baseUrl}/table/upload`, data);
  // }

}
