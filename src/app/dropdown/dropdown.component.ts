import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  dropdownHave : boolean = false;
  dropdownHavent : boolean = false;
  ingredientHave : string[]=[]
  ingredientHavent : string[]=[]

  iHaveVissibility(){
    this.dropdownHave = !this.dropdownHave
  }

  iHaventVissibility(){
    this.dropdownHavent = !this.dropdownHavent
  }

  updateDropdownHave(ingredientCheckboxed:string):void {
    if (this.ingredientHave.includes(ingredientCheckboxed)) {
      this.ingredientHave = this.ingredientHave.filter(
        (genre) => genre !== ingredientCheckboxed
      );
    } else {
      this.ingredientHave.push(ingredientCheckboxed);
    }
  }

  updateDropdownHavent(ingredientCheckboxed:any):void{
    if (this.ingredientHavent.includes(ingredientCheckboxed)) {
      this.ingredientHavent = this.ingredientHavent.filter(
        (genre) => genre !== ingredientCheckboxed
      );
    } else {
      this.ingredientHavent.push(ingredientCheckboxed);
    }
  }
}
