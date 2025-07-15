import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../../app.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  protected router = inject(Router)
  email: string = '';
  password: string = '';


  onSubmit(form: any): void {
    if (form.valid) {
      console.log('Email:', this.email);
      console.log('Password:', this.password);
    }
  }

  goBack(): void {
    this.router.navigateByUrl("/")
  }

  clearFields(): void {
    this.email = '';
    this.password = '';
  }
}
