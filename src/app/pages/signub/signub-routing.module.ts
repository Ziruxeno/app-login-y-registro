import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignubPage } from './signub.page';

const routes: Routes = [
  {
    path: '',
    component: SignubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignubPageRoutingModule {}
