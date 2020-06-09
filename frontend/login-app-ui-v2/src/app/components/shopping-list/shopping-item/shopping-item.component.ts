import { Component, OnInit } from '@angular/core';
import {ItemApiService} from '../../../services/api/item-api.service';
import {ShoppingItem} from '../ShoppingItem';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit {

  id: number;
  item: ShoppingItem;

  constructor(
    private itemApiService: ItemApiService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.item = new ShoppingItem(this.id, '', 0, '');

    if (this.id !== -1) {
      this.itemApiService.retrieveItem('azad@gmail.com', this.id).subscribe(
        response => {
          this.item = response;
        }
      );
    }
  }

  saveItem() {
    if (this.id === -1) {
      this.itemApiService.createItem('azad@gmail.com', this.item)
        .subscribe(
          data => {
            console.log(data);
            this.router.navigate(['shopping-list']);
          }
        );
    } else {
      this.itemApiService.updateItem('azad@gmail.com', this.id, this.item)
        .subscribe(
          data => {
            console.log(data);
            this.router.navigate(['shopping-list']);
          }
        );
      // }
    }
  }
}
