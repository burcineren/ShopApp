import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../model/cart.model';
import { Category } from '../model/category.model';
import { CategoryRepository } from '../model/category.repostory';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repostory';

@Component({
  selector: 'shop',
  templateUrl: 'shop.component.html',
  styles: []
})
export class ShopComponent {
    public selectedCategory:Category | undefined = undefined;
   public productPerPage = 2;
   public selectedPage = 1;
   public selectedProducts = Product[] = [];
  constructor(
    private productRepository: ProductRepository,
    private categoryRepository: CategoryRepository,
    private cart:Cart,
    private router: Router
  ) {}

  get products(): Product[] {
    let index = (this.selectedPage-1)* this.productPerPage;
    //0*3 =>0
    //1*3 =>3
    this.selectedProducts = this.productRepository.getProducts(this.selectedCategory);

    return this.selectedProducts
      .slice(index,index + this.productPerPage);

  }
  get pageNumbers():number[]{
   return Array(
    Math.ceil(this.productRepository
    .getProducts(this.selectedCategory).length/this.productPerPage)) //diinin kaç elemanlı oldugunu hesapladık 
    .fill(0)//dizi elemanına başlangıçta 0 değerini attık
    .map((a:any,i:any) => i +1);//her bir elemanı dolaşıyoruz elemanın index numarasının dizi olarak geri dönderiyoruz
  }
  changePageSize(size:number){
    this.productPerPage = size;
    this.changePage(1);
  }
  changePage(p:number){
    this.selectedPage = p;
  }
  get categories(): Category[] {
    return this.categoryRepository.getCategories();
  }
  ChangedCategory(newCategory?: Category  | undefined){
    this.selectedCategory = newCategory;
  }
  addProductToCart(product: Product) {
    this.cart.addItem(product);
    this.router.navigateByUrl('/cart');//kullanıcıyı karta yönlendirdik
  }
}
