import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

const API_URL: string = "http://localhost:3000/api/v1";

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
    return `${API_URL}/${route}`
  }

  private getApiUrl() {
    return API_URL
  }
}
