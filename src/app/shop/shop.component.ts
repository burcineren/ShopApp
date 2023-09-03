import { Component } from '@angular/core';
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
  constructor(
    private productRepository: ProductRepository,
    private categoryRepository: CategoryRepository
  ) {}

  get products(): Product[] {
    return this.productRepository.getProducts();
  }

  get categories(): Category[] {
    return this.categoryRepository.getCategories();
  }
  CahngedCategory(newCategory?: Category | undefined){
    this.selectedCategory = newCategory;
  }
}
