import {HttpResponse} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {ProductInterface} from '../../../../shared/interface';
import {GetAllProductListUseCases} from '../../../application';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productList: ProductInterface[] = [];

  constructor(private readonly service: GetAllProductListUseCases) {
  }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList(): void {
    this.service.execute().subscribe({
      next: (response: HttpResponse<ProductInterface[]>) => {
        if (response.status === 200 && response.body !== null) {
          this.productList = response.body;
          console.log(this.productList);
          this.formatProductList();
        }
      },
    });
  }

  formatProductList(): void {
    this.productList.forEach((product: ProductInterface, index: number) => {
      index++;
      if (index < 11) {
        product.image_alt = 'https://picsum.photos/id/' + index + '0/280/250';
        product.image_url = 'https://picsum.photos/id/' + index + '0/280/250';
      }
    });
    this.productList.splice(10, 90);
    console.log(this.productList);
  }

}
