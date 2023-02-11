import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  searchInputForm: string = '';

  inputChange(stringReceiveForInput: string): void {
    this.searchInputForm = stringReceiveForInput;
  }
}
