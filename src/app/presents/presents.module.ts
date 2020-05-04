import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PresentsPage } from './presents.page';
import { ModalPage } from './../modal/modal.page';

const routes: Routes = [
  {
    path: '',
    component: PresentsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PresentsPage, ModalPage],
  entryComponents: [ ModalPage ]
})
export class PresentsPageModule {}
