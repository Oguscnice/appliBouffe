import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class DataService {
  constructor(private http: HttpClient) {}

  //Chercher un repas par son nom
  searchMealByName(nameSeached: string) {
    return this.http.get<any>(
      'https://www.themealdb.com/api/json/v1/1/search.php?s=' + nameSeached
    );
  }

  //Chercher un repas par la première lettre
  searchMealByFirstLetter(firstLetterSearched: string) {
    return this.http.get<any>(
      'https://www.themealdb.com/api/json/v1/1/search.php?f=' + firstLetterSearched
    );
  }

  //Chercher un repas par son ID
  searchMealByID(idSearched: number) {
    return this.http.get<any>(
      'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + idSearched
    );
  }

  //Chercher un repas aléatoire
  searchMealRandom() {
    return this.http.get<any>('https://www.themealdb.com/api/json/v1/1/random.php');
  }


  //liste de toutes les catégories de repas
  searchAllCategoriesMeal() {
    return this.http.get<any>('https://www.themealdb.com/api/json/v1/1/categories.php');
  }

  //liste de toutes les catégories  (DEJA MIS DANS LE DATA CATEGORIESLIST.TS)
  // searchAllCategories() {
  //   return this.http.get<any>(
  //     'www.themealdb.com/api/json/v1/1/list.php?c=list'
  //   );
  // }

  //liste de toutes les Area (zone géographique, exemple : -plats- Canadiens)  (DEJA MIS DANS LE DATA AREASLIST.TS)
  // searchAllArea() {
  //   return this.http.get<any>(
  //     'www.themealdb.com/api/json/v1/1/list.php?a=list'
  //   );
  // }

  //liste de toutes les ingredients (DEJA MIS DANS LE DATA INGREDIENTSLIST.TS)
  // searchAllIngredients() {
  //   return this.http.get<any>(
  //     'www.themealdb.com/api/json/v1/1/list.php?i=list'
  //   );
  // }

  //Filtrer par ingredients principales
  searchByMainIngredients(mainIngredientsSearched: string) {
    return this.http.get<any>(
      'https://www.themealdb.com/api/json/v1/1/filter.php?i=' + mainIngredientsSearched
    );
  }

  //Filtrer par Catégorie
  searchByCategory(categorySearched: string) {
    return this.http.get<any>(
      'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + categorySearched
    );
  }

  //filtrer par Area (zone géographique, exemple : -plats- Canadiens)
  searchByArea(areaSearched: string) {
    return this.http.get<any>(
      'https://www.themealdb.com/api/json/v1/1/filter.php?a=' + areaSearched
    );
  }

  //récupérer une 'petite' image du plat
  searchSmallMealPicture(mealPictureSearched: string) {
    return this.http.get<any>(
      'https://www.themealdb.com/api/json/v1/1/filter.php?a=' +
      mealPictureSearched +
        '/images/media/meals/llcbn01574260722.jpg/preview'
    );
  }

  //récupérer une image de l'ingrédient
  searchIngredientPicture(ingredientSearched: string) {
    return this.http.get<any>(
      'https://www.themealdb.com/images/ingredients/' + ingredientSearched + '.png'
    );
  }
}
