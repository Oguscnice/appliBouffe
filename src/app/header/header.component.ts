import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  searchInputForm: string = '';
  menuVisibility :boolean = false;


  inputChange(stringReceiveForInput: string): void {
    this.searchInputForm = stringReceiveForInput;
  }

  menuburger(){
    this.menuVisibility = !this.menuVisibility
}

}
