import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantCreatePageRoutingModule } from './plant-create-routing.module';

import { PlantCreatePage } from './plant-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PlantCreatePageRoutingModule
  ],
  declarations: [PlantCreatePage]
})
export class PlantCreatePageModule {}
