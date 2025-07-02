import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UpcaseFirstWordPipe } from "../../_shared/pipes/upcase-first-word.pipe";

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, UpcaseFirstWordPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
