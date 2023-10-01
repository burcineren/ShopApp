import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Order } from 'src/app/model/order.model';
import { orderRepoStory } from 'src/app/model/order.repostory';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  orderSent: boolean = false;
  submitted: boolean = false;
  constructor(public order: Order, private orderRepository: orderRepoStory ) { }

  ngOnInit(): void {
  }
  submitOrder(form: NgForm){
   
    this.submitted = true;
    if(form.valid){
      this.orderRepository.saveOrder(this.order)
      .subscribe(order => {
        this.order.clearOrder();
        this.orderSent = true;
        this.submitted = false;
      })
    }
  }
}
