import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReorderListPage } from './reorder-list.page';

const routes: Routes = [
  {
    path: '',
    component: ReorderListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReorderListPageRoutingModule {}
