import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {IProductListRepository,
  GetAllProductListUseCases,
  ProductListRepository,
  ProductListComponent} from './product';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: IProductListRepository,
      useClass: ProductListRepository
    },
    GetAllProductListUseCases
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
