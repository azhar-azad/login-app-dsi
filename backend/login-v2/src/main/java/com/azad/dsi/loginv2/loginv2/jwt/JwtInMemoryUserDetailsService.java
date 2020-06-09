package com.azad.dsi.loginv2.loginv2.jwt;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtInMemoryUserDetailsService implements UserDetailsService {

  static List<JwtUserDetails> inMemoryUserList = new ArrayList<>();

  static {    
    inMemoryUserList.add(new JwtUserDetails(1L, "azad@gmail.com",
            "$2a$10$lSC0zwz8ZDLF6phH8FvXqedAfxVTs9f2XO4g060QiT5EktfZc5Pde", "ROLE_USER_2"));
    
    inMemoryUserList.add(new JwtUserDetails(1L, "string@string.string",
            "$2a$10$yc4x6oGZRhRNxzzAay60sex6aYDlGzVx0kZNnaxN0Ug4XkANd9RCy", "ROLE_USER_2"));
    
  }

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    Optional<JwtUserDetails> findFirst = inMemoryUserList.stream()
        .filter(user -> user.getUsername().equals(username)).findFirst();

    if (!findFirst.isPresent()) {
      throw new UsernameNotFoundException(String.format("USER_NOT_FOUND '%s'.", username));
    }

    return findFirst.get();
  }

}


