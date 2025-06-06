import { Routes } from '@angular/router';

export const apisRoutes : Routes =[
    {path: '', redirectTo: 'APIs', pathMatch:'full'},
    {path: 'reqres', loadComponent: () => import('./reqres/reqres.component').then(cChild => cChild.ReqresComponent)}, 
    {path: 'weather-channel', loadComponent: () => import('./weather-channel/weather-channel.component').then(cChild => cChild.WeatherChannelComponent)}, 
    
]