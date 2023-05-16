import { Component } from '@angular/core';
import { Item } from './shared/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  featureWasSelected: string = 'recipes'
  list: Item[] = []

   onSelect(feature:string) {
    this.featureWasSelected = feature;
  }

  onItemEmitted(list: Item[]) { 
   this.list = this.list.concat(list)
  }
}
