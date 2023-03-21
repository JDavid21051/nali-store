/*
 * Developed by CQ Inversiones SAS. Copyright ©. 2023 - 2024. All rights reserved.
 * Desarrollado por CQ Inversiones SAS. Copyright ©. 2023 - 2024. Todos los derechos reservados.
 */

/*
 * Project:      nali-store
 * Developed by: Juan David Pelaez Cumbe
 * Date:         18/03/23 - 12:00 PM
 * Module name:  i-product-list.repository.ts
 * File name:    i-product-list.repository.ts
 * IDE:          WebStorm
 */

import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ProductInterface} from '../../../shared/interface';
import {IProductListRepository} from '../../application';

@Injectable()
export class ProductListRepository extends IProductListRepository<HttpResponse<ProductInterface[]>> {

  constructor(private readonly http: HttpClient) {
    super();
  }

  getAllProductList(): Observable<HttpResponse<ProductInterface[]>> {
    return this.http.get<HttpResponse<ProductInterface[]>>('../../../../assets/json/products.json');
  }

}
