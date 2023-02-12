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

  receipeFromMainIngredient: any[] = [];
  constructor(private dataService: DataService) {}

  @Input() textStringReceiveFormHeaderForm: string = '';
  @Input() arrayIngredientsFromDropdown: string[] = [];

  ngOnChanges() {
    // console.log(this.textStringReceiveFormHeaderForm);
    this.searchReceipeForAllIngredientInArray();
  }

  searchReceipeForAllIngredientInArray() {
    for (let ingredient of this.arrayIngredientsFromDropdown) {
      this.dataService
        .searchByMainIngredients(ingredient)
        .subscribe((data) => this.receipeFromMainIngredient.push(data));
    }
    console.log(this.arrayIngredientsFromDropdown);
    console.log(this.receipeFromMainIngredient);
  }
}
// Quand on coche un truc dans le drop down il y a une requête api qui se fait directement dessus
// Genre tu recherches egg il y a une requête API qui se fait sur toute les recettes avec des oeufs
// Clairement pas ce qu'on veut je pense finalement, à mon avis on veut un truc qui includes tout les ingrédients qui sont coché à la fin