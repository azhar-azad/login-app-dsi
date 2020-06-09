package com.azad.dsi.loginv2.loginv2.services.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.azad.dsi.loginv2.loginv2.models.Item;
import com.azad.dsi.loginv2.loginv2.services.ItemHardcodedService;

@Service
public class ItemHardcodedServiceImpl implements ItemHardcodedService {

	private static List<Item> items = new ArrayList<>();
	private static long idCounter = 0;
	
	static {
		items.add(new Item(++idCounter, "azad@gmail.com", "Pencil", 15.0, "low"));
		items.add(new Item(++idCounter, "azad@gmail.com", "Keyboard", 900.0, "low"));
		items.add(new Item(++idCounter, "azad@gmail.com", "book", 200.0, "low"));
	}
	
	public List<Item> findAll() {
		return items;
	}

	@Override
	public Item deleteById(Long id) {
		
		Item item = findById(id);
		
		if (item == null) {
			return null;
		}
		
		if(items.remove(item)) {
			return item;
		};
		return null;
	}

	public Item findById(Long id) {
		
		for (Item item: items) {
			if (item.getId() == id) {
				return item;
			}
		}
		
		return null;
	}

	@Override
	public Item save(Item item) {
		
		if (item.getId() == -1 || item.getId() == 0 || item.getId() == null) {
			item.setId(++idCounter);
			items.add(item);
		} else {
			deleteById(item.getId());
			items.add(item);
		}
		
		return item;
	}
}

