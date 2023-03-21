/*
 * Developed by CQ Inversiones SAS. Copyright ©. 2023 - 2024. All rights reserved.
 * Desarrollado por CQ Inversiones SAS. Copyright ©. 2023 - 2024. Todos los derechos reservados.
 */

/*
 * Project:      nali-store
 * Developed by: Juan David Pelaez Cumbe
 * Date:         18/03/23 - 9:44 AM
 * Module name:  base.service.ts
 * File name:    base.service.ts
 * IDE:          WebStorm
 */

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export class BaseService {
  constructor(private readonly http: HttpClient) {
  }

  public getJSONData(): Observable<any> {
    return this.http.get('../../assets/json/products.json ');
  }
}
