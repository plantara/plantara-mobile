import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantCreatePage } from './plant-create.page';

const routes: Routes = [
  {
    path: '',
    component: PlantCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantCreatePageRoutingModule {}
