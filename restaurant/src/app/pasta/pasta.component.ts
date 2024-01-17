import { Component } from '@angular/core';
import { ApisService } from '../apis.service';

@Component({
  selector: 'app-pasta',
  templateUrl: './pasta.component.html',
  styleUrl: './pasta.component.css'
})
export class PastaComponent {

  pastaList:any[] =[] ; 
  constructor(_ApisService: ApisService) {
    _ApisService.getPasta().subscribe((data) => {
     this.pastaList=data.recipes ;
     
    })
  }
}
