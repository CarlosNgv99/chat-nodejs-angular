import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {SigninService} from './services/signin.service'
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {ChatComponent} from './componentes/chat/chat.component';
import {EditarUsuarioComponent} from './componentes/editar-usuario/editar-usuario.component';
import { ContactosComponent } from './componentes/contactos/contactos.component'

@NgModule({
  declarations: [AppComponent,ChatComponent,EditarUsuarioComponent,ContactosComponent],
  entryComponents: [ChatComponent,EditarUsuarioComponent,ContactosComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    SigninService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
