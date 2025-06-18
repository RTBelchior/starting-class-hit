import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
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
export class AppComponent {

  ReqressService = inject(ReqresService);
  ReqresService: any;

  ngOnInit(): void{
    this.ReqresService.getDataReqresByGet().Subscription({
      next: (res: any) => {console.log("Lembre-se Belchior: ",res)},
      error: (e: any) => {console.error("Error: ", e)},
      complete: () => {},
    })
  }
}
