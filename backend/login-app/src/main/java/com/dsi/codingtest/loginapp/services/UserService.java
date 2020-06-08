package com.dsi.codingtest.loginapp.services;

import java.util.List;

import com.dsi.codingtest.loginapp.shared.dto.UserDto;

public interface UserService /*extends UserDetailsService*/ {

	UserDto createUser(UserDto userDto);
	
	UserDto getUser(String email);
	
	List<UserDto> getAllUserList();
	
//	List<JwtUserDetails> getJwtUserDetailsList();

}
