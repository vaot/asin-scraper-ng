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

    // Receive updates from the backend via action cable.
    cable.subscriptions.create({ channel: 'ProductsChannel' }, {
      received: (data) => {
        this.onProcessedProduct(data.product)
      }
    })
  }

  // When products are processed/scraped we receive them
  // via action cable and perform this callback.
  // If the coming product is not in the list, it is coming from a different
  // client so we just add to the list. If it is in the list, it was created
  // by this client.
  onProcessedProduct(product) {
    let index = this.products.findIndex((prod) => { return prod.asin == product.asin })

    if (index == -1) {
      this.products.unshift(product)
    } else {
      this.products[index] = product
    }
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
