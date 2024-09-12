import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignubPageRoutingModule } from './signub-routing.module';

import { SignubPage } from './signub.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignubPageRoutingModule
  ],
  declarations: [SignubPage]
})
export class SignubPageModule {}
