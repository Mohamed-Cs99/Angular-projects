import { Component } from '@angular/core';
import { ApisService } from '../apis.service';

@Component({
  selector: 'app-salad',
  templateUrl: './salad.component.html',
  styleUrl: './salad.component.css'
})
export class SaladComponent {
  saladList:any[] =[] ; 
 constructor(_ApisService:ApisService)
 {
  _ApisService.getSalad().subscribe((data)=>
  {
   this.saladList=data.recipes ; 
  })
 }
}
