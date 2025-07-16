import { PopUpService } from './../../../_shared/pop-up/pop-up.service';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { IWeather } from '../../../_shared/interfaces/weather';
import { WeatherService } from './../../../_services/weather.service';
import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpcaseFirstWordPipe } from "../../../_shared/pipes/upcase-first-word.pipe";

@Component({
  selector: 'app-weather-channel',
  imports: [CommonModule, ReactiveFormsModule, UpcaseFirstWordPipe],
  templateUrl: './weather-channel.component.html',
  styleUrl: './weather-channel.component.css'
})
export class WeatherChannelComponent {
  private WeatherService = inject(WeatherService);
  private popUpService = inject(PopUpService)
  protected weatherForms: UntypedFormGroup;
  protected localWeatherSig = signal<IWeather | undefined>(undefined);
  protected localCountry = "Lisbon";
  private justletter: RegExp = /^[a-zA-ZÀ-ÿ\s]+$/;


  constructor(private fb:UntypedFormBuilder){
    this.weatherForms = this.fb.nonNullable.group({
      city: ["", [Validators.required, Validators.pattern(this.justletter)]]
    });

    // Exemplo de como aceder aos controlos do forms
    console.log("Form controls.", this.weatherForms.controls);
    console.log("Form weatherForm.", this.weatherForms.get('city')?.invalid);
  }
  
  ngOnInit(): void{
    this.WeatherService.getWeather2(this.localCountry).subscribe({
      next: (res) => {this.localWeatherSig.set(res), console.log("Res In WeatherComponent: ",this.localWeatherSig())},
      error: (e) => {},
      complete: () => {},
    });
  console.log("Variavel LocalWeatherSig Fora do Observable Undefined: ", this.localWeatherSig()?.current);
  }

  submit() {
    console.log("nossa cidade", this.weatherForms.get('city')?.value)
    this.localCountry = this.weatherForms.get('city')?.value;
    this.WeatherService.getWeather(this.localCountry).subscribe({
      next:(res) => {this.localWeatherSig.set(res), this.popUpService.show("everyting ok!", "success")},
      error:(e) => {console.error("Error In Api"), this.popUpService.show("ops... Error in API Weater: " + e, 'error')}
    });
  }
}
