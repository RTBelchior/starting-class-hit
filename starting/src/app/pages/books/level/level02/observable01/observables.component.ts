import { Router } from '@angular/router';
import { Component, inject, OnDestroy } from '@angular/core';
import { ObservableService } from '../../../../../_services/observable.service';
import { Subscription, take } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-observables',
  imports: [CommonModule],
  templateUrl: './observables.component.html',
  styleUrl: './../promises/promises.component.css'
})
export class ObservablesComponent implements OnDestroy{

  protected observableService$ = inject(ObservableService);
   private router = inject(Router);
  protected localLoad = false;
  protected localMessage: string = "";
  protected localerror: string = "";
  private unSub!: Subscription;
  private unSbRxJs!: Subscription;
 


  loadData() {
    this.localLoad = true;
    // this.unsub = this.observableService$.seekData$().subscribe(d => console.log("Assincrono() ", d));
    console.log("Sincrono() ");
    this.unSub = this.observableService$.dummySeekdata$.subscribe({
      next: (res: string) => {console.log("Success"), this.localMessage = res, this.router.navigateByUrl("/angular")},
      error: (err: string) => {console.log("Error "), this.localerror = err, this.router.navigateByUrl("/not-found")},
      complete: () => {console.log("complete: "), this.localLoad = false}
    });
  }

  loadDataRxJs() {
    this.unSbRxJs = this.observableService$.dummyDataObservableRxJsOf().pipe(take(1)).subscribe({
      next: (result) => this.localMessage = result as string,
      error: (err: string) => this.localerror = err,
      complete: () => console.log(" Is Done Observable"),
    });
  };


  ngOnDestroy(): void {
    this.unSub?.unsubscribe();
    this.unSbRxJs?.unsubscribe();
  }
}
