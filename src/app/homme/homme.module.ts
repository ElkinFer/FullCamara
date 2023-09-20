import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HommePageRoutingModule } from './homme-routing.module';

import { HommePage } from './homme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HommePageRoutingModule
  ],
  declarations: [HommePage]
})
export class HommePageModule {}
