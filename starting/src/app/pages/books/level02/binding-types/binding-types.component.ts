import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Falando sobre Type, tipagem do TypeScript
type user = {
  name: string,
  email: string,
  isAdmin: boolean,
  avatar?: string,
}

@Component({
  selector: 'app-binding-types',
  imports: [CommonModule, FormsModule],
  templateUrl: './binding-types.component.html',
  styleUrl: './../../level04/promises/promises.component.css'
})
export class BindingTypesComponent {
  protected user: user = {name: 'Belchior', email:'rodrigo@gmail.com', isAdmin:true, avatar: "./../../../../../assets/img/avatar/WhatsApp Image 2021-12-17 at 00.59.35.jpeg"}
}
