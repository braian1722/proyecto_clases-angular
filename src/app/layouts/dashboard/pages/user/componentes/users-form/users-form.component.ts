import { Component,EventEmitter,Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrl: './users-form.component.scss'
})
export class UsersFormComponent {
// mandamos el evento del hijo al padre
  @Output()
  userCreate = new EventEmitter();
  

  userForm: FormGroup;

  constructor( private fb: FormBuilder  ){
    this.userForm = this.fb.group({
      firstName: this.fb.control(''),
      lastName: this.fb.control(''),
      email: this.fb.control(''),
      password: this.fb.control(''),
      role: this.fb.control(''),

    })
  }

  onSubmit():void{
    console.log(this.userForm.value);
    this.userCreate.emit(this.userForm.value);//enviamos el valor del formulario
  }

}
