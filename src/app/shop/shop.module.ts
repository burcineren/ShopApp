import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from '../model/model.module';
import { ShopComponent } from './shop.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartDetailComponent } from './cart-detail/shoping-area.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
  providers: [],
  declarations: [
    ShopComponent,
    NavbarComponent,
    CartSummaryComponent,
    CartDetailComponent,
    CheckoutComponent,
    ProductListComponent,
    CategoryListComponent,
    CarouselComponent,
    ProductsComponent,
  ], // componenet tanımlamaları
  exports: [ShopComponent, CartDetailComponent, CheckoutComponent],
})
export class ShopModule {}
