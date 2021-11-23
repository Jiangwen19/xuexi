import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../model/api.response';
import { LessonVo } from '../model/vo/lesson-vo';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(private http: HttpClient) { }

  getAllBookNumber(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${environment.baseUrl}/lesson/allBookInfo`);
  }

  getLessonsByBookId(bookId: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${environment.baseUrl}/lesson/list/${bookId}`);
  }

  addLesson(lessonVo: LessonVo): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${environment.baseUrl}/lesson/save`, lessonVo);
  }

  getLessonInfo(lessonId: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${environment.baseUrl}/lesson/info/${lessonId}`);
  }

  lessonUpdateById(lessonVo: LessonVo): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${environment.baseUrl}/lesson/update`, lessonVo);
  }

  searchLessonsByInfo(bookId: number, searchInfo: string): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${environment.baseUrl}/lesson/searchList/${searchInfo}`, bookId);
  }

  delateLessonInBook(lessonIds: number[]): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${environment.baseUrl}/lesson/delete`, lessonIds);
  }
}
