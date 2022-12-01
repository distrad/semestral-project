import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { redirectUnauthorizedTo, redirectLoggedInTo, canActivate } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    ...canActivate(redirectLoggedInToHome),
  },
  {
    path: 'login',
    redirectTo: ''
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'modal',
    loadChildren: () => import('./pages/modal/modal.module').then( m => m.ModalPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'conductores',
    loadChildren: () => import('./pages/conductores/conductores.module').then( m => m.ConductoresPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'weather',
    loadChildren: () => import('./pages/weather/weather.module').then( m => m.WeatherPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'conversor',
    loadChildren: () => import('./pages/conversor/conversor.module').then( m => m.ConversorPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  //Dejar esta ulitma
  {
    path: 'page404',
    loadChildren: () => import('./pages/page404/page404.module').then( m => m.Page404PageModule)
  },
  {
    path: '**',
    redirectTo: 'page404'
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
