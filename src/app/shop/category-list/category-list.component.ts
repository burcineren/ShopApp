import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  public selectedCategory:Category | undefined = undefined;
  @Input() categories: Category[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  ChangedCategory(newCategory?: Category  | undefined){
    this.selectedCategory = newCategory;
  }
}
