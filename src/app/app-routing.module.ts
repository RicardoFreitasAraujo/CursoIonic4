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
  { path: 'layout', loadChildren: './pages/layout/layout.module#LayoutPageModule' },
  { path: 'layout-header-footer', loadChildren: './pages/layout-header-footer/layout-header-footer.module#LayoutHeaderFooterPageModule' },
  { path: 'layout-tabs', loadChildren: './pages/layout-tabs/layout-tabs.module#LayoutTabsPageModule' },
  { path: 'layout-menu', loadChildren: './pages/layout-menu/layout-menu.module#LayoutMenuPageModule' },
  { path: 'layout-split-panel', loadChildren: './pages/layout-split-panel/layout-split-panel.module#LayoutSplitPanelPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
