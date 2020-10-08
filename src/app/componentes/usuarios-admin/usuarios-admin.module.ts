import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UsuariosAdminPage } from './usuarios-admin.page';

const routes: Routes = [
  {
    path: '',
    component: UsuariosAdminPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UsuariosAdminPage]
})
export class UsuariosAdminPageModule {}
