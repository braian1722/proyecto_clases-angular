import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Clase08Component } from './clase-08.component';
import { SharedModule } from '../../../../shared/shared.module';



@NgModule({
  declarations: [
    Clase08Component
  ],
  imports: [
    CommonModule,
    SharedModule,// importo el modulo del pipe
  ],
  exports:[
    Clase08Component,
  ]
})
export class Clase08Module { }
