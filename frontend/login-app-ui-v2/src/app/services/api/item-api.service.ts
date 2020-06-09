import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ShoppingItem} from '../../components/shopping-list/ShoppingItem';
import {API_URL} from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class ItemApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  retrieveAllItems(userid) {
    return this.httpClient.get<ShoppingItem[]>(`${API_URL}/users/${userid}/items`);
  }

  retrieveItem(userid, id){
    return this.httpClient.get<ShoppingItem>(`${API_URL}/users/${userid}/items/${id}`);
  }

  deleteItem(userid, id){
    return this.httpClient.delete(`${API_URL}/users/${userid}/items/${id}`);
  }

  updateItem(userid, id, item){
    return this.httpClient.put(
      `${API_URL}/users/${userid}/items/${id}`, item);
  }

  createItem(userid, item){
    return this.httpClient.post(
      `${API_URL}/users/${userid}/items`, item);
  }
}
