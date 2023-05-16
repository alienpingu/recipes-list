import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../shared/recipe';
import { Item } from '../shared/item';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent {
  recipesList: Recipe[] = [
    {
      name: 'Lorem Ipsum',
      description: 'Lorem aildna nsk nakj kd kajndjn kan jank aj nksna jkn d',
      image: 'https://picsum.photos/id/123/200',
      list: [{name:'Apple',amount: 10}, {name:'Banana',amount: 20}],
    },
    {
      name: 'Lorem Ipsum asdasdad',
      description: 'Lorem aildna nsk nakj kd kajndjn kan jank aj nksna jkn d',
      image: 'https://picsum.photos/id/124/200',
      list: [{name:'Rock',amount: 9}, {name:'Poison',amount: 2}],
    },
    {
      name: 'Loreasm Ipasdasum',
      description: 'Lorem asda nsk nakj kd ghiukuk kan jank aj nksna jkn d',
      image: 'https://picsum.photos/id/125/200',
      list: [{name:'Butter',amount: 6}, {name:'Glue',amount: 3}],
    }
  ]

  selectedRecipe: Recipe = this.recipesList[0]

  @Output() itemEmitter = new EventEmitter<Item[]>();

  onItemEmitted(list: Item[]) {
    this.itemEmitter.emit(list);
  }

  onClick(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }
}
