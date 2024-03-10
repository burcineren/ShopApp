import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart.model';

@Component({
  selector: 'shoping-area',
  templateUrl: './shoping-area.component.html',
  styleUrls: ['./shoping-area.component.css']
})
export class CartDetailComponent implements OnInit {

  constructor(public cart: Cart ) { }

  ngOnInit() {
  }

}
