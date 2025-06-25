import { Component, inject, OnInit } from '@angular/core';
import { ObservableService } from '../../../../_services/observable.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-observable02',
  imports: [CommonModule],
  templateUrl: './observable02.component.html',
  styleUrl: './../promises/promises.component.css'
})
export class Observable02Component implements OnInit{
  protected dummyObservableService = inject(ObservableService);
  private router = inject(Router);
  protected localObservable$!: Observable<string | undefined>;
  protected localLoad = false;
  protected localError: string = '';
  protected couter = 0; 


  ngOnInit(): void{
    this.localObservable$ = this.dummyObservableService.dummyAsyncObservable();
    //this.localError = "Error Pipe Async";
  }
  
  updateObs() {
    this.couter = this.couter + 1;
    this.localObservable$ = this.localObservable$.pipe(map((d) => {console.log(d + ' ' + this.couter); return d + ' + this.counter;'}));
    /**É uma Brincadeira para vermos os operadores */
    // this.localObservable$ = this.localObservable$.pipe(exhaustMap((d) =>  {console.log(d + ' ' + this.counter); return d + ': ' + this.counter;}));
    // this.localObservable$ = this.localObservable$.pipe(concatMap((d) =>  {console.log(d + ' ' + this.counter); return d + ' ' + this.counter;}));
    //  this.localObservable$ = this.localObservable$.pipe(switchMap((d) =>  {console.log(d + ' ' + this.counter);  return d + ' ' + this.counter;}));
  }
  
  resetObs() {
    this.couter = 0;
    this.localObservable$ = of(undefined);
    setTimeout(() => {
      this.router.lastSuccessfulNavigation;
    },2000)
  }
}
