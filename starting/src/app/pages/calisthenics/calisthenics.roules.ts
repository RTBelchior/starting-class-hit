import { Routes } from "@angular/router";

export const calisthenicsRoutes :Routes =[
    {path: '', redirectTo:'calisthenics', pathMatch:'full'},
    {path: 'calisthenics', loadComponent:() => import('./calisthenics.component').then(cChild => cChild.CalisthenicsComponent)},
    {path: 'rule1', loadComponent:() => import('./rule1/rule1.component').then(cChild => cChild.Rule1Component)},
    {path: 'rule2', loadComponent:() => import('./rule2/rule2.component').then(cChild => cChild.Rule2Component)},
    {path: 'rule3', loadComponent:() => import('./rule3/rule3.component').then(cChild => cChild.Rule3Component)},
    {path: 'rule4', loadComponent:() => import('./rule4/rule4.component').then(cChild => cChild.Rule4Component)},
    {path: 'rule5', loadComponent:() => import('./rule5/rule5.component').then(cChild => cChild.Rule5Component)},
    {path: 'rule6', loadComponent:() => import('./rule6/rule6.component').then(cChild => cChild.Rule6Component)},
    {path: 'rule7', loadComponent:() => import('./rule7/rule7.component').then(cChild => cChild.Rule7Component)},
    {path: 'rule8', loadComponent:() => import('./rule8/rule8.component').then(cChild => cChild.Rule8Component)},
    {path: 'rule9', loadComponent:() => import('./rule9/rule9.component').then(cChild => cChild.Rule9Component)},
];