import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReproductorAudioPage } from './reproductor-audio.page';

const routes: Routes = [
  {
    path: '',
    component: ReproductorAudioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReproductorAudioPageRoutingModule {}
