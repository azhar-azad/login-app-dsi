import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ShoppingItem} from '../../components/shopping-list/ShoppingItem';

@Injectable({
  providedIn: 'root'
})
export class ItemApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  retrieveAllItems(userid) {
    return this.httpClient.get<ShoppingItem[]>(`http://localhost:8080/users/${userid}/items`);
  }

  retrieveItem(userid, id){
    return this.httpClient.get<ShoppingItem>(`http://localhost:8080/users/${userid}/items/${id}`);
  }

  deleteItem(userid, id){
    return this.httpClient.delete(`http://localhost:8080/users/${userid}/items/${id}`);
  }

  updateItem(userid, id, item){
    return this.httpClient.put(
      `http://localhost:8080/users/${userid}/items/${id}`, item);
  }

  createItem(userid, item){
    return this.httpClient.post(
      `http://localhost:8080/users/${userid}/items`, item);
  }
}
