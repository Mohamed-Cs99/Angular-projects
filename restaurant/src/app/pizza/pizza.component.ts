import { Component } from '@angular/core';
import { ApisService } from '../apis.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrl: './pizza.component.css'
})
export class PizzaComponent {

  pizzaList:any[] =[] ; 
  constructor(_ApisService:ApisService)
  {
   _ApisService.getPizza().subscribe((data)=>
   {
     this.pizzaList = data.recipes ; 
    
   })
  }
}
