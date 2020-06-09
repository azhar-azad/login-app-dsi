package com.azad.dsi.loginv2.loginv2;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BCryptEncoderTest { // run this class to get the encoded password

	public static void main(String[] args) {

		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		String encryptedPassword = encoder.encode("4321"); // give your password in this method
		
		System.out.println(encryptedPassword);
	}

}
