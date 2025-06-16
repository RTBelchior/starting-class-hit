import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {
  private counter: number | null = null;
  private localObservable$!: Observable<string | undefined>;
  dummySeekdata$: any;
  updateObservable: any;
  resetObservable: any;
  constructor() { }

  seekData$ = ():Observable<string> => {
    return new Observable(observer => {
      setTimeout(() => {
        const success = Math.random() > 0.3;
        if (!success) {
          observer.error("Error: Falha ao Carregar dados!");
        }
        observer.next("Dados Carregados com Sucesso!");
        observer.complete();
      },1500);
    });
  }
  dummyDataObservableRxJsOf = (): Observable<string | null> => {
    return of(null).pipe(delay(1500), map(() => {
      if (Math.random() > 0.3) {
        return "Dados carregados com sucesso";
      }
      throw new Error('Error: Falha ao carregar Dados!')
    }));
  }

  dummyAsyncObservable(): Observable<string>{
    return this.localObservable$ = of(`Data by PipeAsync. Já disponivel e subscrito sem que vc pedisse: `).pipe(delay(1000));
  }

}
