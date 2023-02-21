import { Component, Input, SimpleChange } from '@angular/core';
import { IngredientsList } from '../data/ingredientsList';
import { AreasList } from '../data/areasList';
import { CategoriesList } from '../data/categoriesList';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  ingredientsList: any[] = IngredientsList.sort((a: any, b: any) =>
    a.strIngredientFR > b.strIngredientFR ? 1 : -1
  );
  searchInputForm: string = '';
  menuVisibility: boolean = false;
  areasList: any[] = AreasList;
  categoriesList: any[] = CategoriesList;
  myRecipesList: any[] = [];
  ingredientHave: string[] = [];
  ingredientHavent: string[] = [];
  newRecipesReceive: any[] = [];
  counterIngredient: number = 0;
  dropdownHave: boolean = false;
  dropdownHavent: boolean = false;

  inputChange(stringReceiveForInput: any): void {
    this.searchInputForm = stringReceiveForInput;
    if (this.searchInputForm == '') {
      this.wantRandomForBeing();
    } else {
      this.newRecipesReceive = [];
      this.dataService
        .searchMealByName(this.searchInputForm)
        .subscribe((data) => {
          this.newRecipesReceive.push(data.meals);
          this.newRecipesReceive = this.newRecipesReceive[0];
          if (
            this.newRecipesReceive.length != 0 &&
            this.newRecipesReceive.length != null
          ) {
            this.myRecipesList = this.dataService.checkExistedMeal(
              this.newRecipesReceive,
              this.myRecipesList
            );
          }
        });
    }
    console.log(this.myRecipesList);
  }

  menuburger() {
    this.menuVisibility = !this.menuVisibility;
  }

  iHaveVissibility() {
    this.dropdownHave = !this.dropdownHave;
  }

  iHaventVissibility() {
    this.dropdownHavent = !this.dropdownHavent;
  }

  filterNameDropdownWithInputTextFromHeader(
    ingredientNameFromNgFor: string
  ): boolean {
    if ((ingredientNameFromNgFor.toLowerCase()).includes(this.searchInputForm)) {
      return true;
    }
    return false;
  }

  updateDropdownHave(ingredientCheckboxed: string): void {
    if (this.ingredientHave.includes(ingredientCheckboxed)) {
      this.ingredientHave = this.ingredientHave.filter(
        (genre) => genre !== ingredientCheckboxed
      );
    } else {
      this.ingredientHave.push(ingredientCheckboxed);
    }

    this.dataService
      .searchByMainIngredients(ingredientCheckboxed)
      .subscribe((data) => {
        this.newRecipesReceive = [];
        this.newRecipesReceive.push(data.meals);
        this.newRecipesReceive = this.newRecipesReceive[0];

        if (ingredientCheckboxed !== '') {
          if (
            this.newRecipesReceive.length != 0 &&
            this.newRecipesReceive.length != null
          ) {
            this.myRecipesList = this.dataService.checkExistedMeal(
              this.newRecipesReceive,
              this.myRecipesList
            );
          }
        }

        for (let i = 0; i < this.myRecipesList.length; i++) {
          if (!this.myRecipesList[i].strIngredient1) {
            this.dataService
              .searchMealByID(this.myRecipesList[i].idMeal)
              .subscribe((data) => {
                this.myRecipesList[i] = data.meals[0];
              });
          }
        }
      });
  }

  updateDropdownHavent(ingredientCheckboxed: any): void {
    if (this.ingredientHavent.includes(ingredientCheckboxed)) {
      this.ingredientHavent = this.ingredientHavent.filter(
        (genre) => genre !== ingredientCheckboxed
      );
    } else {
      this.ingredientHavent.push(ingredientCheckboxed);
    }
  }

  searchByMainIngredientsList(ingredientHave: string[]): void {
    console.log(ingredientHave);

    for (let i = 0; i < this.myRecipesList.length; i++) {
      if (!this.myRecipesList[i].strIngredient1) {
        this.dataService
          .searchMealByID(this.myRecipesList[i].idMeal)
          .subscribe((data) => {
            this.myRecipesList[i] = data.meals[0];
          });
      }
    }
  }

  constructor(public dataService: DataService) {}

  addingIngredientHave(recipe: any): boolean {
    if (this.ingredientHave.length !== 0) {
      let counter = 0;
      for (let i = 0; i < this.ingredientHave.length; i++) {
        for (let property in recipe) {
          if (
            property.includes('strIngredient') &&
            recipe[property] !== null &&
            recipe[property] !== '' &&
            recipe[property] == this.ingredientHave[i]
          ) {
            counter++;
          }
        }

        if (counter == this.ingredientHave.length) {
          return true;
        }
        return false;
      }
    }
    return true;
  }

  ngOnInit() {
    this.wantRandomForBeing();
  }

  wantRandomForBeing() {
    for (let i = 0; i < 4; i++) {
      this.dataService.searchMealRandom().subscribe((data) => {
        this.myRecipesList.push(data.meals[0]);
        this.myRecipesList.sort((a: any, b: any) =>
          a.strMeal > b.strMeal ? 1 : -1
        );
      });
    }
  }

  filterNameWithInputTextFromHeader(mealName: string): boolean {
    if (this.searchInputForm == '') {
      return true;
    }
    if (mealName.toLowerCase().includes(this.searchInputForm)) {
      return true;
    }
    return false;
  }
}
