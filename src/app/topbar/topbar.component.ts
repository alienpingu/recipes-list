import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  
  @Output() featureSelected = new EventEmitter<string>();;

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
