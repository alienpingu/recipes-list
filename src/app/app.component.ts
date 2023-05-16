import { Component } from '@angular/core';
import { Item } from './shared/item';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmdsMS-U9awxwkBGA7ValCp_dHjjN8_5w",
  authDomain: "recipe-list-fdc90.firebaseapp.com",
  projectId: "recipe-list-fdc90",
  storageBucket: "recipe-list-fdc90.appspot.com",
  messagingSenderId: "833748306425",
  appId: "1:833748306425:web:7ecb429da9fa4553765528",
  measurementId: "G-KJ01G4N8BP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
