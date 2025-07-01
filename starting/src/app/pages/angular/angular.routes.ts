import { Routes } from "@angular/router";

export const angularRoutes : Routes =[
    {path: '', redirectTo:'angular', pathMatch:'full'},
    {path: 'angular', loadComponent:() => import('./angular.component').then(c => c.AngularComponent)},
    {path: 'get-starting', loadComponent:() => import('./get-starting-angular/get-starting.component').then(c => c.AngularComponent)},
    {path: 'git', loadComponent: () => import('./git/git.component').then(c => c.GitComponent)},
]