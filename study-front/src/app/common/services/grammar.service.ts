import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../model/api.response';
import { GrammarVo } from './../model/vo/grammar-vo';

@Injectable({
  providedIn: 'root'
})
export class GrammarService {

  constructor(private http: HttpClient) { }

  getGrammarInSentence(sentenceSeq: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${environment.baseUrl}/grammer/GrammarInSentence/${sentenceSeq}`);
  }

  addGrammarInSentence(sentenceSeq: number, grammarVo: GrammarVo): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${environment.baseUrl}/grammer/addGrammarInSentence/${sentenceSeq}`, grammarVo);
  }

  deleteGrammarByIdInSentence(sentenceSeq: number, grammarId: number): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${environment.baseUrl}/grammer/delete/${sentenceSeq}`, grammarId);
  }

  deleteGrammarByIds(grammarIds: number[]): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${environment.baseUrl}/grammer/delete`, grammarIds);
  }
}
