import { Routes } from '@angular/router';

export const solidRoutes : Routes =[
    {path: '', redirectTo: 'Solid', pathMatch:'full'},
    {path: 'srp', loadComponent: () => import('./srp/solid.component').then(cChild => cChild.SolidComponent)},
    {path: 'ocp', loadComponent: () => import('./ocp/ocp.component').then(cChild => cChild.OcpComponent)},
    {path: 'lsp', loadComponent: () => import('./lsp/lsp.component').then(cChild => cChild.LspComponent)},
    {path: 'isp', loadComponent: () => import('./isp/isp.component').then(cChild => cChild.IspComponent)},
    {path: 'dip', loadComponent: () => import('./dip/dip.component').then(cChild => cChild.DipComponent)},    
]