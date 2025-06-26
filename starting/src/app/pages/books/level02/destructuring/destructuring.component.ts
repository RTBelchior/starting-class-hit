import { Component } from '@angular/core';

@Component({
  selector: 'app-destructuring',
  imports: [],
  templateUrl: './destructuring.component.html',
  styleUrl: './../../level04/promises/promises.component.css'
})
export class DestructuringComponent {
protected nome!: string;
protected idade!: string | number;
protected apelido!: string;
protected email!:string;
protected email2!:string;
protected primeiro!: number;
protected segundo!: number;


  constructor() {
    const pessoa = {
      nome: "Belchior",
      idade: 40,
      cidade:"Santana",
      apelido: "mutiz",
      email: " oficinadosDrones@gmail.com"
    };
    // Desestuturação com nome igual
    ({nome: this.nome, idade: this.idade} = pessoa)
    console.log("Destruturação com nome igual: ", this.nome, this.idade);
    
    // Destruturação com valor padrão
    ({apelido: this.apelido, email:this.email2 ="segundo@gmail.com"} = pessoa)
    console.log("Destruturação com valor padrão: ", this.apelido, this.email2);
    
    //array
    const numeros = [10,20,30];
    
    [this.primeiro, this.segundo] = numeros;
    console.log("Array 1º: ", this.primeiro,' 2º: ', this.segundo);
    

  }

}
