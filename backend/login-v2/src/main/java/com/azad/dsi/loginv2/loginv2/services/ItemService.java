package com.azad.dsi.loginv2.loginv2.services;

import java.util.List;

import com.azad.dsi.loginv2.loginv2.models.Item;

public interface ItemService {

	Item getItem(Long id);

	List<Item> getAllItems(String userid);

	void deleteById(Long id);

	Item save(Item item);

	Item updateItem(Long id, Item item);

}
