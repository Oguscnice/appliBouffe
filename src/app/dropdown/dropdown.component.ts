import { Component, Output, EventEmitter, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {

  constructor(public dataService: DataService){}


}
