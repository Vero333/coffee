import { Component, OnInit } from '@angular/core';

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
      price:'1.50'
    },
    {
      name:'Capuccino',
      image: '/assets/images/capuccino.png',
      price:'2.50'
    },
    {
      name:'CaramelMachiato',
      image: '/assets/images/caramelMachiato.png',
      price:'3.00'
    },
    {
      name:'Expresso',
      image: '/assets/images/expresso.png',
      price:'2.50'
    }
  ];

  constructor() { }

  ngOnInit() { }
}