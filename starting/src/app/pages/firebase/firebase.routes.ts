import { Routes } from "@angular/router";

export const hitRoutes :Routes =[
    {path: '', redirectTo:'firebase', pathMatch:'full'},
    {path: 'firebase', loadComponent:() => import('./firebase.component').then(cChild => cChild.FirebaseComponent)},
    {path: 'init-with-hosting', loadComponent:() => import("./init-wit-hosting/init-wit-hosting.component").then(cChild =>cChild.InitWitHostingComponent)},
    {path: 'authentication', loadComponent:() => import("./authentication/authentication.component").then(cChild =>cChild.AuthenticationComponent)}
];