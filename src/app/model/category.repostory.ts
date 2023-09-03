import { Injectable, OnInit } from '@angular/core';
import { Category } from './category.model';
import { RestService } from './rest.service';

@Injectable()
export class CategoryRepository implements OnInit {
  private categories: Category[] = [];

  constructor(private restService: RestService) {
    // TODO: product bilgileri rest servisteki get products ile dolduracağız
    this.restService
      .getCategories()
      .subscribe((categories) => (this.categories = categories)); //buradan bize gelecek olan product bilgilerini this.products içerisine aktaracağız
  }

  ngOnInit() {}
  getCategory(id: number): Category | undefined {
    return this.categories.find((i) => i.id === id);
  }
  getCategories(): Category[] {
    return this.categories;
  }
}
