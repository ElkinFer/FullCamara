import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HommePage } from './homme.page';

const routes: Routes = [
  {
    path: '',
    component: HommePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HommePageRoutingModule {}
