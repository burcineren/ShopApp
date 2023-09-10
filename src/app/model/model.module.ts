
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { RestService } from "./rest.service";
import { CategoryRepository } from "./category.repostory";
import { Cart } from "./cart.model";
import { ProductRepository } from "./product.repostory";
@NgModule({
    imports:[HttpClientModule],
    providers: [RestService,ProductRepository,CategoryRepository,Cart]
})
export class ModelModule {

   
}