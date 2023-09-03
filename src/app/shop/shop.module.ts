import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { ModelModule } from "../model/model.module";
import { ShopComponent } from "./shop.component";
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    imports:[ModelModule, BrowserModule, FormsModule],
    providers: [],
    declarations: [ShopComponent, NavbarComponent], // componenet tanımlamaları
    exports: [ShopComponent]
})
export class ShopModule {

   
}