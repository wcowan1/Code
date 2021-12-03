import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AwardDetailPage } from './award-detail.page';

const routes: Routes = [
  {
    path: '',
    component: AwardDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AwardDetailPageRoutingModule {}
