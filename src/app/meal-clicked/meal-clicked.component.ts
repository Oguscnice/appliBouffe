import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-meal-clicked',
  templateUrl: './meal-clicked.component.html',
  styleUrls: ['./meal-clicked.component.scss'],
})
export class MealClickedComponent implements OnInit {
  mealId: number = 0;
  informationMeal: any[]=[];

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {
    // on recupère l'ID du repas via l'URL
    this.route.params.subscribe((params) => {
      this.mealId = parseInt(params['mealId']);
    });
    console.log(this.mealId);

    // on requête l'API avec l'ID du repas via l'URL
    this.dataService.searchMealByID(this.mealId).subscribe((data) => {
      this.informationMeal.push(...data.meals);
      console.log(this.informationMeal);
      
    });
  }
}
