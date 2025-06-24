import { Observable } from 'rxjs';
import { IWeather } from '../../../_shared/weather';
import { WeatherService } from '../../../_services/weather.service';
import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather-channel',
  imports: [CommonModule],
  templateUrl: './weather$-channel.component.html',
  styleUrl: './weather-channel.component.css'
})
export class WeatherChannelComponent {
  private WeatherService = inject(WeatherService);
  protected localWeather$!: Observable<IWeather>;
  protected localCountry = "Lisbon";

  ngOnInit(): void{
    this.localWeather$ = this.WeatherService.getWeather(this.localCountry);
  
  }
}
