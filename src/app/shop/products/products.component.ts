import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { CategoryRepository } from 'src/app/model/category.repostory';
import { Product } from 'src/app/model/product.model';
import { ProductRepository } from 'src/app/model/product.repostory';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  public selectedCategory:Category | undefined = undefined;
  public productPerPage = 2;
  public selectedPage = 1;
  public selectedProducts: Product[] = [];
 constructor(
   private productRepository: ProductRepository,
   private categoryRepository: CategoryRepository,
  
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
 getCategory(category: Category) {
   this.selectedCategory = category;
 }

}
