import { Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';

export const routes: Routes = [

    {
        path: '',
        component: AuthComponent,
        pathMatch: 'full',
        title: 'Iniciar Sesión'
    },
    {
        path: 'registro',
        loadComponent: () =>
            import('./components/register/register.component').then((m) => m.RegisterComponent),
        title: 'Registrarse',
      },
      {
        path: 'inicio',
        loadComponent: () =>
            import('./components//home/home.component').then((m) => m.HomeComponent),
        title: 'Inicio',
        //canActivate: [loginGuard]
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
      }
];
