import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ProductsComponent } from './products/products.component'
import { ProductComponent } from './products/product.component'
import { NavbarComponent } from './navbar/navbar.component'

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: '',
        outlet: 'navbar',
        component: NavbarComponent
      }
    ]
  },
  {
    path: 'products',
    children: [
      {
        path: ':asin',
        component: ProductComponent,
        children: [
          {
            path: '',
            outlet: 'navbar',
            component: NavbarComponent
          }
        ]
      }
    ]
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
