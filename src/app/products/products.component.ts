import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service'

@Component({
  selector: 'products-component',
  templateUrl: './products.component.html'
})

export class ProductsComponent implements OnInit {
  products: any = []

  constructor(
    private productService: ProductsService
  ) {}

  ngOnInit() {
    this.productService.getAll().subscribe((products) => {
      this.products = products
    })
  }
}
