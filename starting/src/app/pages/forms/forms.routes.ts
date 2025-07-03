import { Routes } from "@angular/router";

export const formsRoutes :Routes =[
    {path: '', redirectTo:'forms', pathMatch:'full'},
    {path: 'forms', loadComponent:() => import('./forms.component').then(cChild => cChild.FormsComponent)},
    {path: 'validators', loadComponent:() => import('./validators/validators.component').then(cChild => cChild.ValidatorsComponent)},
    {path: 'signIn', loadComponent:() => import("./sign-in/sign-in.component").then(cChild =>cChild.SignInComponent)},
    {path: 'signUp', loadComponent:() => import("./sign-up/sign-up.component").then(cChild =>cChild.SignUpComponent)}
];