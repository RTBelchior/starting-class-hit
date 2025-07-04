import { Component } from '@angular/core';
import { ControlStructuresComponent } from "./control-structures/control-structures.component";
import { OperatorsComponent } from "./operators/operators.component";
import { DependendencyInjectionComponent } from "./dependendency-injection/dependendency-injection.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { UpcaseFirstWordPipe } from "../../../_shared/pipes/upcase-first-word.pipe";

@Component({
  selector: 'app-level01',
  imports: [ControlStructuresComponent, OperatorsComponent, DependendencyInjectionComponent, CommonModule, RouterLink, UpcaseFirstWordPipe],
  templateUrl: './level01.component.html',
  styleUrl: './../level.css'
})
export class Level01Component {

}
