import { Routes } from "@angular/router";

export const DryRoutes :Routes =[
    {path: '', redirectTo:'dry', pathMatch:'full'},
    {path: 'dry', loadComponent:() => import('./dry.component').then(cChild => cChild.DryComponent)},

];