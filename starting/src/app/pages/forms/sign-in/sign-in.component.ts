import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Router } from '@angular/router';
import { AuthGmailService } from '../../../_services/auth-gmail.service';

@Component({
  selector: 'app-sign-in',
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  protected router = inject(Router)
  protected gmailService = inject(AuthGmailService);
  
  email: string = '';
  password: string = '';
  isValid!: boolean;
  
  
  onSubmit(form: any): void {
    if (!form.valid) {
      this.isValid = false;
    }
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
  
  goBack(): void {
    this.router.navigateByUrl("/")
  }
  
  clearFields(): void {
    this.email = '';
    this.password = '';
  }

  gmailAuthentication() {
  this.gmailService.signIn(this.email, this.password).subscribe({
      next: (res) => {console.log("Data From Google: ", res.user), this.router.navigate(['/Wellcome'])},
      error: (e) => {console.error("Error in Gmail Authentication"), this.router.navigateByUrl("/")}
    });
  }
}
