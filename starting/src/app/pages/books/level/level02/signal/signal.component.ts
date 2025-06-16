import { CommonModule } from '@angular/common';
import { SignalService } from './../../../../../_services/signal.service';
import { Component, inject, Signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [CommonModule],
  templateUrl: './signal.component.html',
  styleUrl: './../promises/promises.component.css'
})
export class SignalComponent {
dummySignal() {
throw new Error('Method not implemented.');
}

  SignalService = inject(SignalService);
  localToSignalWhithoutGet = this.SignalService.localToSignal; //Signal sem Get()
  localToSignalWithGet = this.SignalService.dummySignal(); //Signal com Get()
  localname = this.SignalService.name;

  localNumber: number = 0;

  construtor() {
    console.log(`My Signal() `, this.localname());
  }

  updateObs() {
    this.localNumber =this.localNumber + 1;
    this.localname.set(this.localname() + this.localNumber.toString());
  }
  
  resetObs = () => {
    this.localNumber = this.localNumber! -1;
    this.localname.set(this.localname() + this.localNumber.toString());
  }
}
