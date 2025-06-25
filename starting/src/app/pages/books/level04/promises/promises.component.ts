import { Component, inject} from '@angular/core';
import { PromisesService } from '../../../../_services/promises.service';


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
localMessage: any;
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

  /**
   * Método async:
 
 O método carregarDados() é marcado com async, o que permite usar await dentro dele
 
 Isso faz com que o método retorne implicitamente uma Promise
 
 Sintaxe await:
 
 Substitui o .then(), fazendo o código esperar até a Promise ser resolvida
 
 O código parece síncrono, mas mantém o comportamento assíncrono
 
 Tratamento de erros:
 
 Usamos try/catch em vez de .catch()
 
 Mais natural e similar ao tratamento de erros síncrono
 
 Adicionei um bloco finally que sempre executa, independente de sucesso ou erro
 
 Vantagens:
 
 Código mais limpo e linear
 
 Mais fácil de ler e entender
 
 Melhor encadeamento de operações assíncronas
 
 Tratamento de erros mais intuitivo
   */


  /** Exemplo 2 */
 async loadDataAsync () {
    this.localLoad = true;
    try {
      this.message = await this.promiseService.seekRandomData();
    } catch (error) {
      this.localerror = error as string;
    }finally{
        this.localLoad = false;
    }
  }
}
