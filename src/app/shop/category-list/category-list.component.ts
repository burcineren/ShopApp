import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { CategoryRepository } from 'src/app/model/category.repostory';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  public selectedCategory:Category | undefined = undefined;
  @Input() categories: Category[] = [];
  @Output() category = new EventEmitter<Category>();
  constructor(
    private categoryRepository: CategoryRepository,
  ) { }

  ngOnInit(): void {
  }
  ChangedCategory(newCategory?: Category  | undefined){
    this.selectedCategory = newCategory;
    this.category.emit(newCategory);
  }
}
