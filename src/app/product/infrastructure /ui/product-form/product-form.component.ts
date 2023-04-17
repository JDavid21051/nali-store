import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  // data
  productForm: FormGroup;

  constructor(private readonly builder: FormBuilder) {
    this.productForm = builder.group({
      name: [null],
      /*price: [null],
      count: [null],
      description: [null]*/
    })
  }

  ngOnInit(): void {
  }


}
