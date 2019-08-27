import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then(m => m.ListPageModule)
  },
  { path: 'botoes-page', loadChildren: './pages/botoes-page/botoes-page.module#BotoesPagePageModule' },
  { path: 'aluno', loadChildren: './pages/aluno/aluno.module#AlunoPageModule' },
  { path: 'instalacao', loadChildren: './pages/instalacao/instalacao.module#InstalacaoPageModule' },
  { path: 'layout', loadChildren: './pages/layout/layout.module#LayoutPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
