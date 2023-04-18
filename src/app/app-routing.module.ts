import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from './product';
import {ProductFormComponent} from "./product/infrastructure /ui/product-form/product-form.component";

const routes: Routes = [
  {
    path: 'product',
    children: [
      {path: '', redirectTo: 'list', pathMatch: 'prefix'},
      {path: 'list', component: ProductListComponent},
      {path: 'create', component: ProductFormComponent},
    ],
  },
  {path: '**', redirectTo: 'product/list'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
