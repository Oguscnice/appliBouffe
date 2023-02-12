import { Component, Output, EventEmitter } from '@angular/core';
import { IngredientsList } from '../data/ingredientsList';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  dropdownHave: boolean = false;
  dropdownHavent: boolean = false;
  ingredientHave: string[] = [];
  ingredientHavent: string[] = [];
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
  }
}
