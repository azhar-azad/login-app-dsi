package com.azad.dsi.loginv2.loginv2.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.azad.dsi.loginv2.loginv2.models.Item;
import com.azad.dsi.loginv2.loginv2.services.ItemHardcodedService;
import com.azad.dsi.loginv2.loginv2.services.ItemService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(path = "jpa")
public class ItemJpaController {

	
	private ItemService itemService;
	
	@Autowired
	public ItemJpaController(ItemService itemService) {
		super();
		this.itemService = itemService;
	}

	@GetMapping("/users/{userid}/items")
	public List<Item> getAllItems(@PathVariable String userid) {
//		return itemHcService.findAll();
		return itemService.getAllItems(userid);
	}

	@GetMapping("/users/{userid}/items/{id}")
	public Item getItem(@PathVariable String userid, @PathVariable Long id) {
//		return itemHcService.findById(id);
		return itemService.getItem(id);
	}
	
	@DeleteMapping("/users/{userid}/items/{id}")
	public ResponseEntity<Void> deleteItem(@PathVariable String userid, @PathVariable Long id) {
		
		itemService.deleteById(id);
		
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/users/{userid}/items/{id}")
	public ResponseEntity<Item> updateItem(@PathVariable String userid, @PathVariable Long id, 
			@RequestBody Item item) {
		
		Item updatedItem = itemService.updateItem(id, item);
		
		return new ResponseEntity<Item>(updatedItem, HttpStatus.OK);
	}
	
	@PostMapping("/users/{userid}/items")
	public ResponseEntity<Void> createItem(
			@PathVariable String userid, @RequestBody Item item){
		
		item.setEmail(userid);
		Item createdItem = itemService.save(item);
		
		//Location
		//Get current resource url
		///{id}
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(createdItem.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}
	
}
