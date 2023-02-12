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

  receipeFromMainIngredient: any;
  constructor(private dataService: DataService) {}

  @Input() textStringReceiveFormHeaderForm: string = '';
  @Input() arrayIngredientsFromDropdown: string[] = [];

  ngOnChanges() {
    // console.log(this.textStringReceiveFormHeaderForm);
    this.searchReceipeForAllIngredientInArray();
  }

  
  // On a un tableau (arraIngredientsFromDropDown), on boucle sur ce tableau, à chaque item on fait une
  // requête API, la requête ne fonctionne pas
  searchReceipeForAllIngredientInArray() {
    console.log(this.arrayIngredientsFromDropdown); //fonctionne
    for (let i = 0; i < this.arrayIngredientsFromDropdown.length; i++) {
      this.dataService
        .searchByMainIngredients(this.arrayIngredientsFromDropdown[i])
        .subscribe((data) => this.receipeFromMainIngredient.push(...data));
      console.log(this.receipeFromMainIngredient); // Undefined
    }
  }
}
