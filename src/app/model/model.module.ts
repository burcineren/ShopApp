
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { RestService } from "./rest.service";
import { CategoryRepository } from "./category.repostory";
import { Cart } from "./cart.model";
import { ProductRepository } from "./product.repostory";
import { Order } from "./order.model";
import { orderRepoStory } from "./order.repostory";
import { AuthService } from "./auth.service";
@NgModule({
    imports:[HttpClientModule],
    providers: [RestService,ProductRepository,CategoryRepository,Cart,Order,orderRepoStory,AuthService]
})
export class ModelModule {

   
}