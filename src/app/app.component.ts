import { Component } from '@angular/core';
import {ProductInterface} from "./shared/interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private readonly route: Router) {
  }

  onClickCreate(): void{
    this.route.navigate(['product/create']).then();
  }

  onClickList(): void{
    this.route.navigate(['product/list']).then();
  }
}
