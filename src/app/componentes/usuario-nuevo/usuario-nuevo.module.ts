import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UsuarioNuevoPage } from './usuario-nuevo.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioNuevoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UsuarioNuevoPage]
})
export class UsuarioNuevoPageModule {}
