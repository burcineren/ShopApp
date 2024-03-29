import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { ShopModule } from './shop/shop.module';
import { CartDetailComponent } from './shop/cart-detail/shoping-area.component';
import { CheckoutComponent } from './shop/checkout/checkout.component';
import { ShopComponent } from './shop/shop.component';
import { ProductsComponent } from './shop/products/products.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShopModule,
    BrowserAnimationsModule,
    
    RouterModule.forRoot([
      {path: 'shop', component: ShopComponent},
      {path: 'cart', component: CartDetailComponent},
      {path: 'checkout', component: CheckoutComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'admin',loadChildren: () => import('./admin/admin.module').then(x => x.AdminModule) },
      {path: '**', redirectTo: "/shop"},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
