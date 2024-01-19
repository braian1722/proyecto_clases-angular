import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.scss'
})
export class CategoriasComponent {

  categoriasForm: FormGroup;
  // creamos un grupo mediante el contructor
  constructor(private fb: FormBuilder){
    this.categoriasForm = this.fb.group({
      name: this.fb.control(''),
      productos: this.fb.array([]),

    })
  }

  get controlProdcutos(){
    return this.categoriasForm.get('productos') as FormArray; //le decimos que lo va a retornar como un form array
  }

  getControl(index:number){
    return this.controlProdcutos.controls[index]?.get('productoName') as FormControl;
  }

  deleteControl(index:number){
    this.controlProdcutos.removeAt(index);

  }

  addproductos(): void{
    //con el get acedemos al formulario
    const formArray =this.categoriasForm.get('productos');
    if(formArray instanceof FormArray){//hacemos una validacion para asegurarnos que sea del tipo que queramos
      formArray.push(
        this.fb.group({
          productoName: this.fb.control(''),
        })
      )
    }
  }

}
