import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import {MatTableModule} from '@angular/material/table';
import { UsersFormComponent } from './componentes/users-form/users-form.component';
// importo los modulos para formularios los cuales pueden se usados solo por los componentes de este modulo
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserComponent,
    UsersFormComponent
  ],
  imports: [
    CommonModule,MatTableModule,MatFormFieldModule,MatInputModule,MatSelectModule,MatButtonModule,ReactiveFormsModule 
  ],
  exports: [
    UserComponent,
  ],
})
export class UserModule { }
