import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { MealClickedComponent } from './meal-clicked/meal-clicked.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'meal/:mealId', component: MealClickedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
