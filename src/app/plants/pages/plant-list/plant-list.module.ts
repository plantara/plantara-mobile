import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantListPageRoutingModule } from './plant-list-routing.module';

import { PlantListPage } from './plant-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantListPageRoutingModule
  ],
  declarations: [PlantListPage]
})
export class PlantListPageModule {}
