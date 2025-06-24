import { IWeather } from '../../../_shared/weather';
import { WeatherService } from './../../../_services/weather.service';
import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-weather-channel',
  imports: [],
  templateUrl: './weather-channel.component.html',
  styleUrl: './weather-channel.component.css'
})
export class WeatherChannelComponent {
  private WeatherService = inject(WeatherService);
  protected localWeatherSig = signal<IWeather | undefined>(undefined);
  protected localCountry = "Lisbon";

  ngOnInit(): void{
    this.WeatherService.getWeather2(this.localCountry).subscribe({
      next: (res) => {this.localWeatherSig.set(res), console.log("Res In WeatherComponent: ",this.localWeatherSig())},
      error: (e) => {},
      complete: () => {},
    });
  console.log("Variavel LocalWeatherSig Fora do Observable Undefined: ", this.localWeatherSig()?.current);
  }
}
