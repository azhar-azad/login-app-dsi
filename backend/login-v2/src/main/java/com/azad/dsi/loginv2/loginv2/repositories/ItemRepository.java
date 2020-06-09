package com.azad.dsi.loginv2.loginv2.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.azad.dsi.loginv2.loginv2.models.Item;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {

	List<Item> findByEmail(String email);
}
