import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/body/header/header.component';
import { MainComponent } from './components/body/main/main.component';
import { FooterComponent } from './components/body/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet,HeaderComponent,MainComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
