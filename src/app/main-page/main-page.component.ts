import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
constructor(public dataService: DataService){}

  textStringReceiveFormHeaderForm: string = '';

  receiveSearchInputTextFormHeader(inputTextFormReceiveViaOutput: string): void {
    this.textStringReceiveFormHeaderForm = inputTextFormReceiveViaOutput;
  }

}
