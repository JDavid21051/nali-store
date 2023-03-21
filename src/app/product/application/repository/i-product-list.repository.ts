/*
 * Developed by CQ Inversiones SAS. Copyright ©. 2023 - 2024. All rights reserved.
 * Desarrollado por CQ Inversiones SAS. Copyright ©. 2023 - 2024. Todos los derechos reservados.
 */

/*
 * Project:      nali-store
 * Developed by: Juan David Pelaez Cumbe
 * Date:         18/03/23 - 11:39 AM
 * Module name:  get-product-list.repository.com
 * File name:    i-product-list.repository.ts
 * IDE:          WebStorm
 */

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export abstract class IProductListRepository<T> {

  abstract getAllProductList(): Observable<T>;
}
