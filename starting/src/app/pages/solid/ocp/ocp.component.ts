import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ocp',
  imports: [CommonModule],
  templateUrl: './ocp.component.html',
  styleUrl: './ocp.component.css'
})
export class OcpComponent {
  private router = inject(Router);
  goBack() {
  this.router.navigateByUrl('/srp');
}
}