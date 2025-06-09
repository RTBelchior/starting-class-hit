import { PromisesService } from './../../../../../_services/promises.service';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  imports: [],
  templateUrl: './promises.component.html',
  styleUrl: './promises.component.css'
})
export class PromisesComponent implements OnInit {
  
  protected PromisesService = inject(PromisesService);
  protected localPromise : any;
  

  ngOnInit(): void {
    console.log("Promise in Component:");
    console.log("Promise in Component:"), this.PromisesService.getPromise();
  
    console.log("promiseValue:", this.PromisesService.promiseValue);
  }
}
