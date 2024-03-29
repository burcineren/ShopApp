import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { CategoryRepository } from 'src/app/model/category.repostory';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor(private categoryRepository: CategoryRepository) { }

  ngOnInit(): void {
  }

  getCategories(): Category[] {
    return this.categoryRepository.getCategories();
  }
  deleteCategory(category : Category){
    this.categoryRepository.deleteCategory(category);
  }

}
