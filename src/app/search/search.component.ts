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
      if (!this.products.filter((obj) => { obj.asin == r.asin })[0]) {
        this.products.push(r)
      }

      this.query = ''
      this.isProcessing = false
    })
  }
}
