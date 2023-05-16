import { Component, Input } from '@angular/core';
import { Item } from '../shared/item';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {
  @Input() list: Item[] = []
  amount: any;
  name: any;
  onAdd(name:string, amount: number) {
    this.list.push({name: name, amount: amount})
  }
}
