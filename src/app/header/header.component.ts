import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  searchInputForm: string = '';
  menuVisibility :boolean = false;


  inputChange(stringReceiveForInput: any): void {
    // this.searchInputForm = stringReceiveForInput
    console.log(this.searchInputForm);
  }

  menuburger(){
    this.menuVisibility = !this.menuVisibility
}

}
