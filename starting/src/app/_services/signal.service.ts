import { Injectable, signal, Signal, WritableSignal } from '@angular/core';
import { ObservableService } from './observable.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class SignalService {
  
  localToSignal: Signal<string | undefined>;
  name = signal<string| undefined>(undefined);
  dummySignal: WritableSignal<string | undefined> = signal<string>("Wellcome Signal");
  constructor(private dummyObservableService: ObservableService) { 

    this.localToSignal = toSignal(dummyObservableService.dummyAsyncObservable());
    this.name.set("Belchior");
  }

  // getDummySig = () => {
  //   setTimeout(() => {
  //     return this.dummySignal.set("Wellcome Signal");
  //   }, 1000)
  // }
}
