import { Component, OnInit } from '@angular/core';
import {ShoppingItem} from './ShoppingItem';
import {ItemApiService} from '../../services/api/item-api.service';
import {Router} from '@angular/router';
import {BasicAuthenticationService} from '../../services/auth/basic-authentication.service';

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
    private router: Router,
    private basicAuthService: BasicAuthenticationService
  ) { }

  ngOnInit(): void {
    this.refreshItems();
  }

  refreshItems() {
    const userId = this.basicAuthService.getAuthenticatedUser();
    this.itemApiService.retrieveAllItems(userId).subscribe(
      response => {
        console.log(response);
        this.items = response;
      }
    );
  }

  deleteItem(id: number) {
    console.log(`delete item ${id}` );

    const userId = this.basicAuthService.getAuthenticatedUser();
    this.itemApiService.deleteItem(userId, id).subscribe (
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
