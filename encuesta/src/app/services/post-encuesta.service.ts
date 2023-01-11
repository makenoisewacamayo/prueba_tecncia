import { Observable, of, catchError, throwError, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EncuestaDataInterface } from '../interfaces/general.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostEncuestaService {

  constructor(private http_client: HttpClient) { }

  postEncuesta( payload: EncuestaDataInterface ): Observable<boolean>  {
    return this.http_client.post<boolean>('/encuesta', payload)
      .pipe(
        map( response => true),
        catchError((error) => {
          return throwError(() => new Error('Error at service'))
       })
      );
  }

  postEncuestaFake(payload: EncuestaDataInterface): Observable<boolean> {
    return of(true);
  }

}
