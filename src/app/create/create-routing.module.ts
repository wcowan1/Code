import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatePage } from './create.page';

const routes: Routes = [
  {
    path: '',
    component: CreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),FormsModule, ReactiveFormsModule],
  exports: [RouterModule],
})
export class CreatePageRoutingModule {}
