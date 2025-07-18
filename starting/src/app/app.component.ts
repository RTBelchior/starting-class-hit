import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReqresService } from './_services/reqres.service';


@Component({
  selector: 'app-root',
  imports: [CommonModule, HeaderComponent,MainComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  ReqresService = inject(ReqresService);

  ngOnInit(): void{
    this.ReqresService.getDataReqresByGet().subscribe({
      next: (res) => {console.log("Lembre-se Belchior: ",res.data[1].email)},
      error: (e) => {console.error("Error: ", e)},
      complete: () => {},
    })
  } 
}
