import { Injectable } from '@angular/core';
import { Award } from './award';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AwardService {


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  addAward(award: Award): Observable<any> {
    return this.http.post<Award>('http://localhost:3000/api/create-award', award, this.httpOptions)
      .pipe(
        catchError(this.handleError<Award>('Add Award'))
      );
  }

  getAward(id): Observable<Award[]> {
    return this.http.get<Award[]>('http://localhost:3000/api/get-award/' + id)
      .pipe(
        tap(_ => console.log(`Award fetched: ${id}`)),
        catchError(this.handleError<Award[]>(`Get Award id=${id}`))
      );
  }

  getAwardList(): Observable<Award[]> {
    return this.http.get<Award[]>('http://localhost:3000/api')
      .pipe(
        tap(songs => console.log('Award fetched!')),
        catchError(this.handleError<Award[]>('Get Awards', []))
      );
  }

  updateAward(id, award: Award): Observable<any> {
    return this.http.put('http://localhost:3000/api/update-award/' + id, award, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Award updated: ${id}`)),
        catchError(this.handleError<Award[]>('Update Award'))
      );
  }

  deleteAward(id): Observable<Award[]> {
    return this.http.delete<Award[]>('http://localhost:3000/api/delete-award/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Award deleted: ${id}`)),
        catchError(this.handleError<Award[]>('Delete Award'))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
