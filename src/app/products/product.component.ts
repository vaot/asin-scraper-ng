import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'product-component',
  templateUrl: './product.component.html'
})

export class ProductComponent implements OnInit {
  product: any = {}

  constructor(
    private productService: ProductsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((map: any) => {
      this.productService.get(map.params.asin).subscribe((product) => {
        this.product = product
      })
    })
  }
}
