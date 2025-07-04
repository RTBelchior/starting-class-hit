import { Component } from '@angular/core';
import { UpcaseFirstWordPipe } from "../../../_shared/pipes/upcase-first-word.pipe";

@Component({
  selector: 'app-level03',
  imports: [UpcaseFirstWordPipe],
  templateUrl: './level03.component.html',
  styleUrl: './../level.css'
})
export class Level03Component {

}
