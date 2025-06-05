import { NotFoundComponent } from './pages/not-found/not-found.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo:'angular', pathMatch:'full'}, //Rota Padrão
    {path: 'angular', loadComponent:() => import('./pages/angular/angular-component/angular.component').then(c => c.AngularComponent)},
    {path: 'angular/git', loadComponent: () => import('./pages/angular/git/git.component').then(c => c.GitComponent)},
    {path: 'hit', loadChildren:() => import('./pages/hit/hit.routes').then(c =>c.hitRoutes)},

    {path: 'hit/class-project', loadComponent:() => import('./pages/hit/class-project/class-project.component').then(c => c.ClassProjectComponent)},

    {path: '**', loadComponent:() => import('./pages/not-found/not-found.component').then(c => c.NotFoundComponent)}
    //{path: '**', redirectTo: () => {return 'not-found'}},
];

export const routesExemplo: Routes = [
    {path: '', redirectTo:'home', pathMatch:'full'}, //Rota Padrão

    {path: '**', component:NotFoundComponent}
];