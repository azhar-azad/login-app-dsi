package com.azad.dsi.loginv2.loginv2.services;

import java.util.List;

import com.azad.dsi.loginv2.loginv2.models.Item;

public interface ItemHardcodedService {

	public List<Item> findAll();
	
	public Item findById(Long id);
	
	public Item deleteById(Long id);
	
	public Item save(Item item);
}
