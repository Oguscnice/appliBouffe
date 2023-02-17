import { Component, Output, EventEmitter } from '@angular/core';
import { IngredientsList } from '../data/ingredientsList';
import { AreasList } from '../data/areasList';
import { CategoriesList } from '../data/categoriesList';
import {
  searchRecipes,
  MarmitonQueryBuilder,
  RECIPE_PRICE,
  RECIPE_DIFFICULTY,
  Recipe,
} from 'marmiton-api';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  searchInputForm: string = '';
  menuVisibility: boolean = false;
  @Output() searchInputTextForm: EventEmitter<string> = new EventEmitter();

  inputChange(stringReceiveForInput: any): void {
    this.searchInputForm = stringReceiveForInput.toLowerCase();
    this.searchInputTextForm.emit(this.searchInputForm);
  }

  menuburger() {
    this.menuVisibility = !this.menuVisibility;
  }
  ngOnInit() {
    this.go();
  }


  async go(){
    const qb = new MarmitonQueryBuilder();
    // A query builder is provided to make complex queries
    const query = qb
      .withTitleContaining('soja')
      .withoutOven()
      .withPrice(RECIPE_PRICE.CHEAP)
      .takingLessThan(45)
      .withDifficulty(RECIPE_DIFFICULTY.EASY)
      .build()
    // Fetch the recipes
    const recipes: Recipe[] = await searchRecipes(query)
    console.log(recipes);
  }
}
