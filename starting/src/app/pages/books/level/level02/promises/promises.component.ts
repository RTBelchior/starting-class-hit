import { Component, inject} from '@angular/core';
import { PromisesService } from '../../../../../_services/promises.service';

@Component({
  selector: 'app-promises',
  imports: [],
  templateUrl: './promises.component.html',
  styleUrl: './promises.component.css'
})
export class PromisesComponent {
  protected promiseService = inject(PromisesService);
  protected localLoad = false;
  protected message = "";
  protected localerror = "";
  ngOnInit() {
    
  }
  /** Exemplo */
  loadData = () => {
    this.localLoad = true;
    this.promiseService.seekRandomData().then((res) => {
      this.message = res;
      this.localLoad = false;
    }).catch((err) => {
      this.localerror = err;
      this.localLoad = false;
    });
  }
  /** Exemplo 2 */
 async loadDataAsync () {
    this.localLoad = true;
    try {
      this.message = await this.promiseService.seekRandomData();
    } catch (error) {
      this.localerror = error as string;
    }
  }
}