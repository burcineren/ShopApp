import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/model/cart.model';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[] = [];
   selectedProduct:Product | null = null;
  constructor(
    private cart:Cart,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  addProductToCart(product: Product) {
    this.cart.addItem(product);
    this.router.navigateByUrl('/cart');//kullanıcıyı karta yönlendirdik
  }
  displayDetails(product: Product) {
    this.selectedProduct = product;
  }
  hideDetails() { 
    this.selectedProduct = null;
  }
}
