import { Component, inject } from '@angular/core';
import { ObservableService } from '../../../../../_services/observable.service';

@Component({
  selector: 'app-observables',
  imports: [],
  templateUrl: './observables.component.html',
  styleUrl: './../promises/promises.component.css'
})
export class ObservablesComponent {

  protected promiseService = inject(ObservableService);
  protected localLoad = false;
  protected localMessage: string = "";
  protected localerror: string = "";


  loadDataRxJs() {

  }

  loadData() {

  }

}
