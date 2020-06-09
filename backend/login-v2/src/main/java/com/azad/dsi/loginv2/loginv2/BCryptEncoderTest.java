package com.azad.dsi.loginv2.loginv2;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BCryptEncoderTest {

	public static void main(String[] args) {

		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		String encryptedPassword = encoder.encode("1234");
		
		System.out.println(encryptedPassword);
	}

}
