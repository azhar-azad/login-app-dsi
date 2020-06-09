import { Component, OnInit } from '@angular/core';
import {ItemApiService} from '../../../services/api/item-api.service';
import {ShoppingItem} from '../ShoppingItem';
import {ActivatedRoute, Router} from '@angular/router';
import {BasicAuthenticationService} from '../../../services/auth/basic-authentication.service';
import {JwtAuthenticationService} from '../../../services/auth/jwt-authentication.service';

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
    private router: Router,
    private jwtAuthService: JwtAuthenticationService
  ) { }

  ngOnInit(): void {

    const userId = this.jwtAuthService.getAuthenticatedUser();

    this.id = this.route.snapshot.params['id'];

    this.item = new ShoppingItem(this.id, '', 0, '');

    if (this.id !== -1) {
      this.itemApiService.retrieveItem(userId, this.id).subscribe(
        response => {
          this.item = response;
        }
      );
    }
  }

  saveItem() {
    const userId = this.jwtAuthService.getAuthenticatedUser();

    if (this.id === -1) {
      this.itemApiService.createItem(userId, this.item)
        .subscribe(
          data => {
            console.log(data);
            this.router.navigate(['shopping-list']);
          }
        );
    } else {
      this.itemApiService.updateItem(userId, this.id, this.item)
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
