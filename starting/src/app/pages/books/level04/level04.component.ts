import { Component } from '@angular/core';
import { PromisesComponent } from "./promises/promises.component";
import { ObservablesComponent } from "./observable01/observables.component";
import { SignalComponent } from "./signal/signal.component";
import { Observable02Component } from "./observable02/observable02.component";
import { RouterLink } from '@angular/router';
import { UpcaseFirstWordPipe } from "../../../_shared/pipes/upcase-first-word.pipe";

@Component({
  selector: 'app-level04',
  imports: [PromisesComponent, ObservablesComponent, SignalComponent, Observable02Component, RouterLink, UpcaseFirstWordPipe],
  templateUrl: './level04.component.html',
  styleUrl: './../level.css'
})
export class Level04Component {

}
