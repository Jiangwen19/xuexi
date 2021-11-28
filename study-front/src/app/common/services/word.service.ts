import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../model/api.response';
import { CompactSearchVo } from '../model/vo/compact-search-vo';
import { WordVo } from '../model/vo/word-vo';

@Injectable({
  providedIn: 'root'
})
export class WordService {

  constructor(private http: HttpClient) { }

  getWordInSentence(sentenceSeq: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${environment.baseUrl}/word/wordInSentence/${sentenceSeq}`);
  }

  addWordInSentence(sentenceSeq: number, wordVo: WordVo): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${environment.baseUrl}/word/addWordInSentence/${sentenceSeq}`, wordVo);
  }

  deleteWordByIdInSentence(sentenceSeq: number, wordId: number): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${environment.baseUrl}/word/delete/${sentenceSeq}`, wordId);
  }

  deleteWordByIds(wordIds: number[]): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${environment.baseUrl}/word/delete`, wordIds);
  }

  getWordInfoOfAll(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${environment.baseUrl}/word/list`);
  }

  getWordInfoById(wordId: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${environment.baseUrl}/word/info/${wordId}`);
  }

  wordUpdate(wordVo: WordVo): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${environment.baseUrl}/word/update`, wordVo);
  }

  searchWords(compactSearchVo: CompactSearchVo): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${environment.baseUrl}/word/search`, compactSearchVo);
  }
}
