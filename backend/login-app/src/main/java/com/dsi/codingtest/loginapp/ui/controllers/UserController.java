package com.dsi.codingtest.loginapp.ui.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dsi.codingtest.loginapp.services.UserService;
import com.dsi.codingtest.loginapp.shared.dto.UserDto;
import com.dsi.codingtest.loginapp.ui.models.request.UserDetailsRequestModel;
import com.dsi.codingtest.loginapp.ui.models.response.UserRest;

@RestController
@RequestMapping(path = "users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

	private UserService userService;
	
	ModelMapper modelMapper = new ModelMapper();

	@Autowired
	public UserController(UserService userService) {
		this.userService = userService;
	}
	
	@PostMapping
	public UserRest createUser(@RequestBody UserDetailsRequestModel userDetails) throws Exception {
    	
//    	if (userDetails.getFirstName().isEmpty()) {
//			throw new UserServiceException(ErrorMessages.MISSING_REQUIRED_FIELDS.getErrorMessage());
//		}
    	
    	UserDto userDto = modelMapper.map(userDetails, UserDto.class);

        UserDto createdUser = userService.createUser(userDto);

        UserRest returnValue = modelMapper.map(createdUser, UserRest.class);
        return returnValue;
    }
	
	@GetMapping
	public String getUser() {
		return "GET method called";
	}
	
	@PutMapping
	public String updateUser() {
		return "PUT method called";
	}
	
	@DeleteMapping
	public String deleteUser() {
		return "DELETE method called";
	}
}
