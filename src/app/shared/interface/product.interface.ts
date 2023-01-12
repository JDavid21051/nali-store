import {ProductPromoTypeEnum} from "../enum";

export interface ProductInterface {
  name: string;
  id: number;
  price: number;
  category: number;
  promo_value: null | number;
  promo_value_unit: null | ProductPromoTypeEnum;
}
