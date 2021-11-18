import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../model/api.response';
import { BookVo } from '../model/vo/book-vo';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBookListAll(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${environment.baseUrl}/book/lists`);
  }

  getBookInfo(bookId: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${environment.baseUrl}/book/info/${bookId}`);
  }

  addBook(bookVo: BookVo): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${environment.baseUrl}/book/save`, bookVo);
  }

  bookUpdateById(bookVo: BookVo): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${environment.baseUrl}/book/update`, bookVo);
  }

  deleteBookById(bookId: number): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${environment.baseUrl}/book/delete/${bookId}`, bookId);
  }

  searchBooks(message: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${environment.baseUrl}/book/list/${message}`);
  }
}
