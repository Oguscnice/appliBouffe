import { Component, Output, EventEmitter, Input } from '@angular/core';
import { IngredientsList } from '../data/ingredientsList';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  dropdownHave: boolean = true;
  dropdownHavent: boolean = true;
  ingredientHave: string[] = [];
  ingredientHavent: string[] = [];
  ingredientsList : any[] = IngredientsList.sort((a: any, b: any) => (a.strIngredient > b.strIngredient ? 1 : -1))

  @Input() textStringReceiveFormHeaderForm : string = ""

  @Output() ingredientArrayHaveFromDropdown: EventEmitter<string[]> =
    new EventEmitter();
  @Output() ingredientArrayHaventFromDropdown: EventEmitter<string[]> =
    new EventEmitter();

  iHaveVissibility() {
    this.dropdownHave = !this.dropdownHave;
  }

  iHaventVissibility() {
    this.dropdownHavent = !this.dropdownHavent;
  }

  updateDropdownHave(ingredientCheckboxed: string): void {
    if (this.ingredientHave.includes(ingredientCheckboxed)) {
      this.ingredientHave = this.ingredientHave.filter(
        (genre) => genre !== ingredientCheckboxed
      );
    } else {
      this.ingredientHave.push(ingredientCheckboxed);
    }
    this.ingredientArrayHaveFromDropdown.emit(this.ingredientHave);
    // console.log("Have"+this.ingredientHave);
  }

  updateDropdownHavent(ingredientCheckboxed: any): void {
    if (this.ingredientHavent.includes(ingredientCheckboxed)) {
      this.ingredientHavent = this.ingredientHavent.filter(
        (genre) => genre !== ingredientCheckboxed
      );
    } else {
      this.ingredientHavent.push(ingredientCheckboxed);
    }
    this.ingredientArrayHaventFromDropdown.emit(this.ingredientHavent);
    console.log("Havent"+this.ingredientHavent);

  }

filterNameWithInputTextFromHeader(ingredientNameFromDataTS : string):boolean {
  if (ingredientNameFromDataTS.toLowerCase().includes(this.textStringReceiveFormHeaderForm.toLowerCase())){
    return true
  }
  return false
}

}
