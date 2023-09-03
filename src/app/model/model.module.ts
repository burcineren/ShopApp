
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CategoryRepository } from "./category.repostory";
import { ProductRepository } from "./product.repostory";
import { RestService } from "./rest.service";

@NgModule({
    imports:[HttpClientModule],
    providers: [RestService,ProductRepository,CategoryRepository]
})
export class ModelModule {

   
}