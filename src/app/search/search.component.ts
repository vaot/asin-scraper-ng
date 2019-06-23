import { Component, Input } from '@angular/core'
import { ProductsService } from '../services/products.service'

@Component({
  selector: 'search-component',
  templateUrl: './search.component.html'
})

export class SearchComponent {
  query = ''
  isProcessing = false
  @Input() products: any

  constructor(
    private productsService: ProductsService
  ) {}

  search() {
    this.isProcessing = true

    this.productsService.search(this.query).subscribe((r: any) => {

      // If we dont find this product in the list, it is a new one and we
      // should add to the list.
      if (!this.products.filter((obj) => { return obj.asin == r.asin })[0]) {
        this.products.unshift(r)
      }

      this.query = ''
      this.isProcessing = false
    })
  }
}
