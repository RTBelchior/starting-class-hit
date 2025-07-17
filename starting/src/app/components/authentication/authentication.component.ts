import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGmailService } from '../../_services/auth-gmail.service';
import { UpcaseFirstWordPipe } from '../../_shared/pipes/upcase-first-word.pipe';
import { PopUpService } from '../../_shared/pop-up/pop-up.service';

@Component({
  selector: 'app-authentication',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './../../pages/forms/sign-in/sign-in.component.html',
  styleUrl: './../../pages/forms/sign-in/sign-in.component.css'
})
export class AuthenticationComponent {
  protected router = inject(Router)
  private popUpService = inject(PopUpService)
  protected gmailService = inject(AuthGmailService);
  protected signInForms: UntypedFormGroup | undefined;
  isValid!: boolean;
  
  constructor (private fb: UntypedFormBuilder) {
    this.signInForms = this.fb.nonNullable.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })  
  }
  
  goBack(): void {
    this.router.navigateByUrl("/")
  }
  
  onSubmit(form: any): void {
    if (!this.signInForms?.valid) {
      this.isValid = false;
    }
 
  }

  gmailAuthentication() {
    const email = this.signInForms?.get("email")?.value;
    const password = this.signInForms?.get("password")?.value;

    this.gmailService.signIn(email, password).subscribe({
        next: (res) => {console.log("Data From Google: ", res.user), this.router.navigate(['/Wellcome'])},
        error: (e) => {console.error("Error in Gmail Authentication"), this.router.navigateByUrl("/")}
    });
  }
}
