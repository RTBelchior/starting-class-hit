import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromisesService {
  protected promise = new Promise(resolve => resolve('Nossa Promessa'));
  promiseValue: any = null;
  constructor() {
      this.promise.then(value => console.log("Promise in Service", value))
  }
  getPromise() {
    this.promise.then(res => this.promiseValue = res + 'Agora foi modificada')
  }
  seekRandomData = (): Promise<string> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.3;
        if (!success) {
          reject('Erro: Falha ao carregar dados!');
        }
        resolve('Dados carregados com sucesso!')
      }, 1500);
    });
  }
}
