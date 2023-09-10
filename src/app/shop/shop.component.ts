import { Component } from '@angular/core';
import { Cart } from '../model/cart.model';
import { Category } from '../model/category.model';
import { CategoryRepository } from '../model/category.repostory';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repostory';

@Component({
  selector: 'shop',
  templateUrl: 'shop.component.html',
  styles: [`
    .pt-100 {
        padding-top:100px;
    }
  `]
})
export class ShopComponent {
    public selectedCategory:Category | undefined = undefined;
   public productPerPage = 3;
   public selectedPage = 1;
  constructor(
    private productRepository: ProductRepository,
    private categoryRepository: CategoryRepository,
    private cart:Cart
  ) {}

  get products(): Product[] {
    let index = (this.selectedPage-1)* this.productPerPage;
    //0*3 =>0
    //1*3 =>3
    return this.productRepository
    .getProducts(this.selectedCategory)
    .slice(index,index + this.productPerPage);

  }
  get pageNumbers():number[]{
   return Array(
    Math.ceil(this.productRepository
    .getProducts(this.selectedCategory).length/this.productPerPage)) //diinin kaç elemanlı oldugunu hesapladık 
    .fill(0)//dizi elemanına başlangıçta 0 değerini attık
    .map((a:any,i:any) => i +1);//her bir elemanı dolaşıyoruz elemanın index numarasının dizi olarak geri dönderiyoruz
  }
  changePage(p:number){
    this.selectedPage = p;
  }
  get categories(): Category[] {
    return this.categoryRepository.getCategories();
  }
  ChangedCategory(newCategory?: Category | undefined){
    this.selectedCategory = newCategory;
  }
  addProductToCart(product: Product) {
    this.cart.addItem(product);
  }
}
