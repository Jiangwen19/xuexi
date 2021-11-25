import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../model/api.response';
import { SentenceVo } from '../model/vo/sentence-vo';

@Injectable({
  providedIn: 'root'
})
export class SentenceService {

  constructor(private http: HttpClient) { }

  getCodeList(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${environment.baseUrl}/sentence/code-list`);
  }

  getSentencesMatchCode(sentenceVo: SentenceVo): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${environment.baseUrl}/sentence/match-code`, sentenceVo);
  }

  getSentencesByLessonId(lessonId: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${environment.baseUrl}/sentence/list/${lessonId}`);
  }

  addSentence(sentenceVo: SentenceVo): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${environment.baseUrl}/sentence/save`, sentenceVo);
  }

  getSentenceInfo(sentenceSeq: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${environment.baseUrl}/sentence/info/${sentenceSeq}`);
  }

  SentenceUpdateById(sentenceVo: SentenceVo): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${environment.baseUrl}/sentence/update`, sentenceVo);
  }

  delateSentences(sentenceSeqIds: number[]): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${environment.baseUrl}/sentence/delete`, sentenceSeqIds);
  }
}
