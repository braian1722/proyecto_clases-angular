import { Component } from '@angular/core';
import { user } from './models';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  // displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'password', 'role'];
  displayedColumns: string[] = ['id', 'fullName', 'email', 'password', 'role'];//definimos la columnas de las tablas

  dataSource: user[] =[
    {
      id: 1,
      firstName: 'braian', 
      lastName: 'kandyba',
      email: 'braian_1732@hotmail.com',
      password: '1234',
      role: 'user'
    },
    {
      id: 1,
      firstName: 'ivan',
      lastName: 'gems',
      email: 'ivan@hotmail.com',
      password: '12334',
      role: 'user'
    }  
  ];

//cuando recibimos el elemnto
  onUserSudmited(evento: user): void{
    // this.dataSource.push(evento);
    this.dataSource = [...this.dataSource,evento];//creamos un array desde cero actualizado

  }


}
