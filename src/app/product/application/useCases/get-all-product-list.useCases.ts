/*
 * Developed by CQ Inversiones SAS. Copyright ©. 2023 - 2024. All rights reserved.
 * Desarrollado por CQ Inversiones SAS. Copyright ©. 2023 - 2024. Todos los derechos reservados.
 */

/*
 * Project:      nali-store
 * Developed by: Juan David Pelaez Cumbe
 * Date:         18/03/23 - 11:50 AM
 * Module name:  get-all-product-list.useCases.ts
 * File name:    get-all-product-list.useCases.ts
 * IDE:          WebStorm
 */

import {HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ProductInterface} from '../../../shared/interface';
import {IProductListRepository} from '../repository';

@Injectable()
export class GetAllProductListUseCases {
  constructor(private readonly product: IProductListRepository<HttpResponse<ProductInterface[]>>) {
  }

  execute(): Observable<HttpResponse<ProductInterface[]>> {
    return this.product.getAllProductList();
  }

}
