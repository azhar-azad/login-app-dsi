import { Component, OnInit } from '@angular/core';
import {ShoppingItem} from './ShoppingItem';
import {ItemApiService} from '../../services/api/item-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  // public items = [
  //   new ShoppingItem(1, 'Pen', 5, 'high'),
  //   new ShoppingItem(2, 'Notebook', 120, 'medium'),
  //   new ShoppingItem(3, 'Mouse', 750, 'high')
  // ];

  items: ShoppingItem[];

  message: string;

  constructor(
    private itemApiService: ItemApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.refreshItems();
  }

  refreshItems() {
    this.itemApiService.retrieveAllItems('azad@gmail.com').subscribe(
      response => {
        console.log(response);
        this.items = response;
      }
    );
  }

  deleteItem(id: number) {
    console.log(`delete item ${id}` )
    this.itemApiService.deleteItem('azad@gmail.com', id).subscribe (
      response => {
        console.log(response);
        this.message = `Delete of Item ${id} is successful!`;
        this.refreshItems();
      }
    )
  }


  updateItem(id: number) {
    console.log(`update ${id}`)
    this.router.navigate(['item', id]);
  }

  addItem() {
    this.router.navigate(['item', -1]);
  }
}
