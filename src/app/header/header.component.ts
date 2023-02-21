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
}
