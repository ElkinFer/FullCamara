import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReproductorAudioPageRoutingModule } from './reproductor-audio-routing.module';

import { ReproductorAudioPage } from './reproductor-audio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReproductorAudioPageRoutingModule
  ],
  declarations: [ReproductorAudioPage]
})
export class ReproductorAudioPageModule {}
