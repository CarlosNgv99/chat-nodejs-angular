import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NoLoginGuard } from './guards/no-login.guard';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './componentes/login/login.module#LoginPageModule'/*,canActivate:[NoLoginGuard] */},
  { path: 'home/:usuario', loadChildren: './componentes/home/home.module#HomePageModule'/*, canActivate:[AuthGuard]*/ },
  { path: 'administrador', loadChildren: './componentes/administrador/administrador.module#AdministradorPageModule' },
  { path: 'login-admin', loadChildren: './componentes/login-admin/login-admin.module#LoginAdminPageModule' },
  { path: 'usuarios-admin', loadChildren: './componentes/usuarios-admin/usuarios-admin.module#UsuariosAdminPageModule' },
  { path: 'usuario-nuevo', loadChildren: './componentes/usuario-nuevo/usuario-nuevo.module#UsuarioNuevoPageModule' },
  { path: 'adminchats', loadChildren: './componentes/adminchats/adminchats.module#AdminchatsPageModule' },
  { path: 'reporte1', loadChildren: './componentes/reporte1/reporte1.module#Reporte1PageModule' },
  { path: 'reportes', loadChildren: './componentes/reportes/reportes.module#ReportesPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
