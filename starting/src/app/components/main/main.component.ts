import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PopUpComponent } from "../../_shared/pop-up/pop-up.component";

@Component({
  selector: 'app-main',
  imports: [RouterOutlet, PopUpComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

    casa = {porta: 'porta azul', quantPorta: 2, arca: {marca: 'LG', modelo: 'xpto'}};
 
  constructor() {
    console.log("CASA", this.casa);
    console.log("CASA-Arca", this.casa.arca);
    console.log("CASA-arca-modelo", this.casa.arca['modelo']);
    console.log("CASA-porta", this.casa.porta);
    console.log("CASA-quant-porta", this.casa.quantPorta);
   
  }
  
}
