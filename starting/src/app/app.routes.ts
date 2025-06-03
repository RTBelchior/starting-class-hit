import { ClassProjectComponent } from './pages/class-project/class-project.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo:'home', pathMatch:'full'}, //Rota Padrão
    {path: 'home', loadComponent:() => import('./pages/home/home.component').then(c => c.HomeComponent)}, // loadlazy
    {path: 'class-project', loadComponent:() => import('./pages/class-project/class-project.component').then(c => c.ClassProjectComponent)},
    {path: 'levelone', loadComponent:() => import('./pages/books/level/level01/level01.component').then(c => c.Level01Component)},
    {path: '**', loadComponent:() => import('./pages/not-found/not-found.component').then(c => c.NotFoundComponent)}
    //{path: '**', redirectTo: () => {return 'not-found'}},
];

export const routesExemplo: Routes = [
    {path: '', redirectTo:'home', pathMatch:'full'}, //Rota Padrão
    {path: 'home',component: HomeComponent}, // loadlazy
    {path: 'class-project', component: ClassProjectComponent},
    {path: '**', component:NotFoundComponent}
];