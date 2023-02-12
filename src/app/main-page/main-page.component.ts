import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  textStringReceiveFormHeaderForm: string = '';
  arrayOfIngredientHaveFormDropdown : string[]=[]
  arrayOfIngredientHaventFormDropdown : string[]=[]

  receiveSearchInputTextForm(inputTextFormReceiveViaOutput: string): void {
    this.textStringReceiveFormHeaderForm = inputTextFormReceiveViaOutput;
  }

  receiveIngredientHaveArraySearchFromDropdown(arrayIngredientHaveReceive : string[]){
    this.arrayOfIngredientHaveFormDropdown = arrayIngredientHaveReceive
  }

  receiveIngredientHaventArraySearchFromDropdown(arrayIngredientHaventReceive : string[]){
    this.arrayOfIngredientHaventFormDropdown = arrayIngredientHaventReceive
  }

}
