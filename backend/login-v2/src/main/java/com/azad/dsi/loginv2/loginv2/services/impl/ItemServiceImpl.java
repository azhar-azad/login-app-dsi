package com.azad.dsi.loginv2.loginv2.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.azad.dsi.loginv2.loginv2.models.Item;
import com.azad.dsi.loginv2.loginv2.repositories.ItemRepository;
import com.azad.dsi.loginv2.loginv2.services.ItemService;

@Service
public class ItemServiceImpl implements ItemService {

	private ItemRepository itemRepository;

	@Autowired
	public ItemServiceImpl(ItemRepository itemRepository) {
		this.itemRepository = itemRepository;
	}

	@Override
	public Item getItem(Long id) {
		return itemRepository.findById(id).get();
	}

	@Override
	public List<Item> getAllItems(String userid) {
		return itemRepository.findByEmail(userid);
	}

	@Override
	public void deleteById(Long id) {

		itemRepository.deleteById(id);
	}

	@Override
	public Item save(Item item) {
		
		return itemRepository.save(item);
	}

	@Override
	public Item updateItem(Long id, Item item) {
		
		Item oldItem = getItem(id);
		
		oldItem.setName(item.getName());
		oldItem.setPrice(item.getPrice());
		oldItem.setPriority(item.getPriority());
		
		return itemRepository.save(oldItem);
	}

}
