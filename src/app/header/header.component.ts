import { Component, Output, EventEmitter } from '@angular/core';
import { IngredientsList } from '../data/ingredientsList';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  searchInputForm: string = '';
  menuVisibility :boolean = false;
  @Output() searchInputTextForm: EventEmitter<string> = new EventEmitter();


  inputChange(stringReceiveForInput: any): void {
    this.searchInputForm = stringReceiveForInput
    this.searchInputTextForm.emit(this.searchInputForm);
  }

  menuburger(){
    this.menuVisibility = !this.menuVisibility
}

}
