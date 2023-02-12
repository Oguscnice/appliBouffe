import { Component, Input } from '@angular/core';
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
  ingredientsList: any[] = IngredientsList;
  areasList: any[] = AreasList;
  categoriesList: any[] = CategoriesList;

  receipeFromMainIngredient: string[] = [];
  constructor(private dataService: DataService) {}

  @Input() textStringReceiveFormHeaderForm: string = '';
  @Input() arrayIngredientsFromDropdown: string[] = [];

  ngOnChanges() {
    this.searchReceipeForAllIngredientInArray();
  }

  searchReceipeForAllIngredientInArray() {
    for (let ingredient of this.arrayIngredientsFromDropdown) {
      this.dataService
        .searchByMainIngredients(ingredient)
        .subscribe((data) => console.log(...data(ingredient)));
    }
    console.log(this.arrayIngredientsFromDropdown);
  }
}
