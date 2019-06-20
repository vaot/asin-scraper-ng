import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpClientModule }    from '@angular/common/http'

// ===== Routing
import { AppRoutingModule } from './app-routing.module'

// ===== Components
import { AppComponent } from './app.component'
import { NavbarComponent } from './navbar/navbar.component'
import { ProductsComponent } from './products/products.component'
import { ProductComponent } from './products/product.component'
import { SearchComponent } from './search/search.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    SearchComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
