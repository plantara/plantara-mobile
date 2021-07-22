import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'plant-list',
    loadChildren: () => import('./plants/pages/plant-list/plant-list.module').then( m => m.PlantListPageModule)
  },
  {
    path: 'plant-create',
    loadChildren: () => import('./plants/pages/plant-create/plant-create.module').then( m => m.PlantCreatePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
