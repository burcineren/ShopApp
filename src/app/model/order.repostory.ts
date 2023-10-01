import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Order } from "./order.model";
import { RestService } from "./rest.service";

@Injectable() //servise olarak kullanacağımız için
export  class orderRepoStory {
    private orders: Order[] = [];

    constructor (private restService: RestService){}

    getOrders(): Order[] {
        console.log("dddsdd::",this.orders);
        
        return this.orders;

    }
    saveOrder(order: Order): Observable<Order[]> { 
        return this.restService.saveOrder(order);
    }
}