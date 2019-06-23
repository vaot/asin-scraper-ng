import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service'
import ActionCable from 'actioncable'
import { environment } from '../../environments/environment'

@Component({
  selector: 'products-component',
  templateUrl: './products.component.html'
})

export class ProductsComponent implements OnInit {
  products: any = []
  productChannel: any

  constructor(private productService: ProductsService) {
    let cable = ActionCable.createConsumer(`ws://${environment.apiHost}/cable`)

    cable.subscriptions.create({ channel: 'ProductsChannel' }, {
      received: (data) => {
        this.onProcessedProduct(data.product)
      }
    })
  }

  onProcessedProduct(product) {
    let index = this.products.findIndex((prod) => { return prod.asin == product.asin })
    this.products[index] = product
  }

  ngOnInit() {
    this.productService.getAll().subscribe((products) => {
      this.products = products
    })
  }

  deleteProduct(product) {
    this.productService.destroy(product.asin).subscribe((reply: any) => {
      if (reply.success) {
        let index = this.products.indexOf(product)
        this.products.splice(index, 1)
      }
    })
  }
}
