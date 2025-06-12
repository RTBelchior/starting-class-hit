import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  constructor() { }

   //Versão básica com New Observable

  seekData$ = () : Observable<string> => {
    return new Observable(observer => {
      setTimeout(() => {
        const success = Math.random() > 0.3;
        if (!success){
          observer.error("Error: Falha ao carregar dados!");
        }
        observer.error("Dados Carregados com Sucesso!");
        observer.complete();
      }, 1500);
    });
  }

  dummyDataObservableRxJsOF = (): Observable<string | null> => {
    return of(null).pipe(delay(1500), map(() => {
      if (Math.random() > 0.3) {
        return"Dados Carregados com sucesso";
      }
      throw new Error('Error: Falha ao carregar os Dados!');
    }));
  }
}
