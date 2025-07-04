import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solid',
  imports: [],
  templateUrl: './solid.component.html',
  styleUrl: './../../firebase/firebase.component.css'
})
export class SolidComponent {
  private router = inject(Router);
goBack() {
  this.router.navigateByUrl('/srp');
}
}