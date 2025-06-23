import { Routes } from '@angular/router';

export const apisRoutes : Routes =[
    {path: '', redirectTo: 'APIs', pathMatch:'full'},
    {path: 'reqres', loadComponent: () => import('./reqres/reqres.component').then(cChild => cChild.ReqresComponent)}, 
    {path: 'weather-channel', loadComponent: () => import('./weather-channel/weather-channel.component').then(cChild => cChild.WeatherChannelComponent)}, 
    {path: 'success200', loadComponent: () => import('./success-200/success-200.component').then(cChild => cChild.Success200Component)}, 
    {path: 'error400', loadComponent: () => import('./error400/error400.component').then(cChild => cChild.Error400Component)}, 
    {path: 'error500', loadComponent: () => import('./error500/error500.component').then(cChild => cChild.Error500Component)}, 
    
]