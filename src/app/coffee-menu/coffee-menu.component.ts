import { Component, OnInit, Input} from '@angular/core';

import { Coffee } from '../shared/coffee';

@Component({
  selector: 'coffee-menu',
  templateUrl: './coffee-menu.component.html',
  styleUrls: ['./coffee-menu.component.scss']
})

export class CoffeeMenuComponent implements OnInit {

  coffees: Coffee[] = [
    {
      name:'Flat white',
      image: '/assets/images/flatWhite.png',
      price:1.50,
      quantity:0
    },
    {
      name:'Capuccino',
      image: '/assets/images/capuccino.png',
      price:2.50,
      quantity:0
    },
    {
      name:'CaramelMachiato',
      image: '/assets/images/caramelMachiato.png',
      price:3.00,
      quantity:0
    },
    {
      name:'Expresso',
      image: '/assets/images/expresso.png',
      price:2.50,
      quantity:0
    }
  ];

  total: number = 0;

  onClick(index, order) {
    this.coffees[index].quantity = order;
    for (let coffee of this.coffees) {
      this.total += coffee.price * coffee.quantity;
    }
    console.log(this.total);
  }

  constructor() { }

  ngOnInit() { }
}