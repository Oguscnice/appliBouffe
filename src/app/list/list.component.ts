import { Component, Input } from '@angular/core';
import { IngredientsList } from '../data/ingredientsList';
import { AreasList } from '../data/areasList';
import { CategoriesList } from '../data/categoriesList';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  ingredientsList: any[] = IngredientsList;
  areasList: any[] = AreasList;
  categoriesList: any[] = CategoriesList;

  @Input() textStringReceiveFormHeaderForm: string = '';
  @Input() arrayIngredientsFromDropdown: string[] = [];

  ngOnChanges() {
    console.log(this.arrayIngredientsFromDropdown);
  }
}
