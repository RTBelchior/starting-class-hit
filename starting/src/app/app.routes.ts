import { authenticationGuard } from './_guards/authentication.guard';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo:'angular', pathMatch:'full'}, //Rota Padrão
    {path: 'angular', loadChildren:() => import('./pages/angular/angular.routes').then(c => c.angularRoutes)},
    {path: 'angular/dry', loadChildren:() => import('./pages/dry/dry.routes').then(c => c.DryRoutes)},
    {path: 'angular/calisthenics', loadChildren:() => import('./pages/calisthenics/calisthenics.roules').then(c => c.calisthenicsRoutes), canActivate:[authenticationGuard]},

    {path: 'angular/firebase', loadChildren:() => import('./pages/firebase/firebase.routes').then(c => c.hitRoutes)},
    
    {path: 'angular/hit', loadChildren:() => import('./pages/hit/hit.routes').then(c =>c.hitRoutes), canActivate:[authenticationGuard]},
    {path: 'angular/forms', loadChildren: () => import('./pages/forms/forms.routes').then(c => c.formsRoutes)},
    {path: 'wellcome', loadComponent: () => import('./pages/wellcome/wellcome.component').then(c => c.WellcomeComponent), canActivate:[authenticationGuard]},
    
    {path: 'angular/level', loadChildren: () => import('./pages/books/level.routes').then(c => c.levelRoutes), canActivate:[authenticationGuard]},
    {path: 'angular/solid', loadChildren: () => import('./pages/solid/solid.routes').then(c => c.solidRoutes), canActivate:[authenticationGuard]},
    {path: 'angular/apis', loadChildren: () => import('./pages/ApIs/apis.routes').then(c => c.apisRoutes), canActivate:[authenticationGuard]},


    {path: 'hit/class-project', loadComponent:() => import('./pages/hit/class-project/class-project.component').then(c => c.ClassProjectComponent)},

    {path: '**', loadComponent:() => import('./pages/not-found/not-found.component').then(c => c.NotFoundComponent)}
    //{path: '**', redirectTo: () => {return 'not-found'}},
];

export const routesExemplo: Routes = [
    {path: '', redirectTo:'home', pathMatch:'full'}, //Rota Padrão
    {path: '**', component:NotFoundComponent}
];