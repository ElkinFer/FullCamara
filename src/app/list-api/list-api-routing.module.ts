import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListApiPage } from './list-api.page';

const routes: Routes = [
  {
    path: '',
    component: ListApiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListApiPageRoutingModule {}
