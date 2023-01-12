// core
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError, of,  } from 'rxjs';
import { map  } from 'rxjs/operators'
// interfaces
import { ResultadoDataInterface } from './../interfaces/general.interfaces';
@Injectable({
  providedIn: 'root'
})
export class GetResultadoService {

  constructor (private http_client: HttpClient) { }

  getResultado(): Observable<Array<ResultadoDataInterface>> {
    return this.http_client.get<Array<ResultadoDataInterface>>("/resultados")
      .pipe(
         catchError((error) => {
            return throwError(() => new Error('Error at service'))
         })
      );
  }

  getResultadoFake(): Observable<Array<ResultadoDataInterface>> {
    const resultado = [
      { genero: 'Rock', count: 10 },
      { genero: 'Pop', count: 5 },
      { genero: 'Jazz', count: 15 },
      { genero: 'Funky', count: 2 }
    ];
    return of(resultado);
  }
}
