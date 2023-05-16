import { Component,Input, Output,EventEmitter } from '@angular/core';
import { Item } from '../shared/item';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent {
  @Input() name: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
  @Input() list: Item[] = [];
  @Output() itemEmitter = new EventEmitter<Item[]>();

  btnHandler() {
    this.itemEmitter.emit(this.list);
  }
}
