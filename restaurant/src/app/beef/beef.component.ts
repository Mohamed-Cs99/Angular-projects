import { Component } from '@angular/core';
import { ApisService } from '../apis.service';

@Component({
  selector: 'app-beef',
  templateUrl: './beef.component.html',
  styleUrl: './beef.component.css'
})
export class BeefComponent {
  beefList: any[] = [];
  constructor(_ApisService: ApisService) {
    _ApisService.getBeef().subscribe((data) => {
      this.beefList = data.recipes;

    })
  }
}
