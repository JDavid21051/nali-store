import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NgxStarRatingModule} from 'ngx-star-rating';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {
  IProductListRepository,
  GetAllProductListUseCases,
  ProductListRepository,
  ProductListComponent,
} from './product';
import { ProductFormComponent } from './product/infrastructure /ui/product-form/product-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxStarRatingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: IProductListRepository,
      useClass: ProductListRepository,
    },
    GetAllProductListUseCases,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
