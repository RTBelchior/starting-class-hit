import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dependendency-injection',
  imports: [CommonModule],
  templateUrl: './dependendency-injection.component.html',
  styleUrl: './dependendency-injection.component.css'
})
export class DependendencyInjectionComponent {
  private router = inject(Router);

  changeRouter = () =>{
    this.router.navigateByUrl('/hit');
  }
}
