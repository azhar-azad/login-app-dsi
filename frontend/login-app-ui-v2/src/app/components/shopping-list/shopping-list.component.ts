import { Component, OnInit } from '@angular/core';
import {ShoppingItem} from './ShoppingItem';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  public items = [
    new ShoppingItem(1, 'Pen', 5, 'high'),
    new ShoppingItem(2, 'Notebook', 120, 'medium'),
    new ShoppingItem(3, 'Mouse', 750, 'high')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
