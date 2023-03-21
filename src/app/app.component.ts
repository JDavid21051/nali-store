import { Component } from '@angular/core';
import {ProductInterface} from "./shared/interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  productList: ProductInterface[] = [];
  constructor() {
  }
}
