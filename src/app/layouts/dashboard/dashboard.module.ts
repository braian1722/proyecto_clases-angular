import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';// importamos los modulos de agular material para usarlos
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { UserModule } from './pages/user/user.module';
import { CategoriasModule } from './pages/categorias/categorias.module';
import { Clase08Module } from './pages/clase-08/clase-08.module';



@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    UserModule,
    CategoriasModule,
    Clase08Module,
  ],
  exports: [
    DashboardComponent,
  ],
})
export class DashboardModule {
  
}
