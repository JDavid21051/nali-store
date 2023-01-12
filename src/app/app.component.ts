import { Component } from '@angular/core';
import {ProductInterface} from "./shared/interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  productList: ProductInterface[];
  constructor() {
    this.productList = [
      {
        id: 34022,
        name: '',
        category: 1,
        price: 43111,
        promo_value: 21,
        promo_value_unit: null,
      }
    ];
  }
}
