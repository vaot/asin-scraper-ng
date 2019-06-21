import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  constructor(
    private http: HttpClient
  ) {}

  search(asin) {
    return this.http.get(this.toApiEndpoint(`products/${asin}/fetch`))
  }

  getAll() {
    return this.http.get(this.toApiEndpoint(`products`))
  }

  get(asin) {
    return this.http.get(this.toApiEndpoint(`products/${asin}`))
  }

  private toApiEndpoint(route: string) {
    return `${this.getApiUrl()}/${route}`
  }

  private getApiUrl() {
    return `${environment.apiUrl}/api/v1`
  }
}
