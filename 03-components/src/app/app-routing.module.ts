import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module')
      .then(m => m.HomePageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./pages/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  {
    path: 'chip',
    loadChildren: () => import('./pages/chip/chip.module').then( m => m.ChipPageModule)
  },
  {
    path: 'button',
    loadChildren: () => import('./pages/button/button.module').then( m => m.ButtonPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./pages/card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'check',
    loadChildren: () => import('./pages/check/check.module').then( m => m.CheckPageModule)
  },
  {
    path: 'date-time',
    loadChildren: () => import('./pages/date-time/date-time.module').then( m => m.DateTimePageModule)
  },
  {
    path: 'fab',
    loadChildren: () => import('./pages/fab/fab.module').then( m => m.FabPageModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
