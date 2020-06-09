import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ShoppingItem} from '../../components/shopping-list/ShoppingItem';
import {API_URL, JPA_API_URL} from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class ItemApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  retrieveAllItems(userid) {
    return this.httpClient.get<ShoppingItem[]>(`${JPA_API_URL}/users/${userid}/items`);
  }

  retrieveItem(userid, id){
    return this.httpClient.get<ShoppingItem>(`${JPA_API_URL}/users/${userid}/items/${id}`);
  }

  deleteItem(userid, id){
    return this.httpClient.delete(`${JPA_API_URL}/users/${userid}/items/${id}`);
  }

  updateItem(userid, id, item){
    console.log('in update: ' + item);
    return this.httpClient.put(
      `${JPA_API_URL}/users/${userid}/items/${id}`, item);
  }

  createItem(userid, item){
    return this.httpClient.post(
      `${JPA_API_URL}/users/${userid}/items`, item);
  }
}
