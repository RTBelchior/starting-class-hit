import { Pipe, PipeTransform } from '@angular/core';

// /\b\w/g - Esta regex encontra:
// /\b- o limite de uma palavra( inicio da palavra )
// \w - o primeiro caractere alfanumérico da palavra 
// A função de substituição pega cada match (primeira letra de cada palavra) e transforma em minúscula.

@Pipe({
  name: 'upcaseFirstWord'
})
export class UpcaseFirstWordPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/\b\w/g, char => char.toLocaleUpperCase());
  }

}
