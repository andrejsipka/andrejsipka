import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        data: {
            title: 'Home | Andrej Sipka',
            description: 'This is a home page',
            keywords: 'home'
        },
        loadComponent: () => import('./home/home.component').then((c) => c.default)
    },
    {
        path: 'about',
        data: {
            title: 'About | Andrej Sipka',
            description: 'This is a about page',
            keywords: 'about'
        },
        loadComponent: () => import('./about/about.component').then((c) => c.default)
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
