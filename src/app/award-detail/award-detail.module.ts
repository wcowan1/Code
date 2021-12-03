import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AwardDetailPageRoutingModule } from './award-detail-routing.module';

import { AwardDetailPage } from './award-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AwardDetailPageRoutingModule
  ],
  declarations: [AwardDetailPage]
})
export class AwardDetailPageModule {}
