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
  myRecipesList: any[] = [];
  textReceive: string = '';
  newRecipesReceive: any[] = [];

  // @Input() textStringReceiveFormHeaderForm: string = '';
  @Input() get textStringReceiveFormHeaderForm(): string {
    return this.textReceive;
  }
  set textStringReceiveFormHeaderForm(textStringReceiveFormHeaderForm: string) {
    this.textReceive = textStringReceiveFormHeaderForm;
    this.filterWithInputText(this.textReceive);
  }

  constructor(public dataService: DataService) {}

  filterWithInputText(inputText: string): void {
    if (inputText === '') {
      // this.myRecipesList = []
      this.wantRandomForBeing();
    } else {
      this.newRecipesReceive = [];
      this.dataService.searchMealByName(inputText).subscribe((data) => {
        this.newRecipesReceive.push(data.meals[0]);
       let existed = false;
        for (let i =0; i < this.myRecipesList.length; i++) {         
            if (this.myRecipesList[i].strMeal == this.newRecipesReceive[0].strMeal) {
              existed = true;
            }
        }
        if (existed == false){
          this.myRecipesList.push(this.newRecipesReceive[0]);
        }
      });
    }
  }

  ngOnInit() {
    this.wantRandomForBeing();
  }

  wantRandomForBeing() {
    for (let i = 0; i < 4; i++) {
      this.dataService.searchMealRandom().subscribe((data) => {
        this.myRecipesList.push(data.meals[0]);
      });
    }
  }

  filterNameWithInputTextFromHeader(mealName: string): boolean {
    if (this.textStringReceiveFormHeaderForm === '') {
      return true;
    }
    if (
      mealName
        .toLocaleLowerCase()
        .includes(this.textStringReceiveFormHeaderForm)
    ) {
      return true;
    }
    return false;
  }
}
