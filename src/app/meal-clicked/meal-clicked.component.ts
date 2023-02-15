import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { IngredientsList } from '../data/ingredientsList';

@Component({
  selector: 'app-meal-clicked',
  templateUrl: './meal-clicked.component.html',
  styleUrls: ['./meal-clicked.component.scss'],
})
export class MealClickedComponent implements OnInit {
  mealId: number = 0;
  informationMeal: any;
  ingredients: string[] = [];
  ingredientsFR : string[] = [];
  ingredientsQuantites: string[] = [];
  ingredientAndQuantity: any[] = [];
  ingredientsList : any = IngredientsList

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {
    // on recupère l'ID du repas via l'URL
    this.route.params.subscribe((params) => {
      this.mealId = parseInt(params['mealId']);
    });

    // on requête l'API avec l'ID du repas via l'URL
    this.dataService.searchMealByID(this.mealId).subscribe((data) => {
      this.informationMeal = data.meals;
      for (let property in this.informationMeal[0]) {
        if (
          property.includes('strIngredient') &&
          this.informationMeal[0][property] !== null &&
          this.informationMeal[0][property] !== ''
        ) {
          this.ingredients.push(this.informationMeal[0][property]);
        } else if (
          property.includes('strMeasure') && (
          this.informationMeal[0][property] !== null &&
          this.informationMeal[0][property] !== '')
        ) {
          this.ingredientsQuantites.push(this.informationMeal[0][property]);
        }
      }

      for (let quantity = 0; quantity < this.ingredientsQuantites.length; quantity++) {
      this.ingredientsQuantites[quantity] = this.ingredientsQuantites[quantity].replaceAll(
        'teaspoon',
        'cuillère à café')
        this.ingredientsQuantites[quantity] = this.ingredientsQuantites[quantity].replaceAll(
          'Tablespoons',
          'grosse cuillère')
      }

      for (let i = 0; i < this.ingredients.length; i++) {
        for (let ingredient in this.ingredientsList){
          if (this.ingredients[i].toLowerCase() === this.ingredientsList[ingredient].strIngredient.toLowerCase()){
            this.ingredientsFR[i] = this.ingredientsList[ingredient].strIngredientFR
          }
        }
        this.ingredientAndQuantity[i] = [this.ingredientsFR[i], this.ingredients[i], this.ingredientsQuantites[i], "https://www.themealdb.com/images/ingredients/"+ this.ingredients[i] +"-Small.png"]
      }
      console.log(this.ingredientAndQuantity);
      
    });
  }
}
