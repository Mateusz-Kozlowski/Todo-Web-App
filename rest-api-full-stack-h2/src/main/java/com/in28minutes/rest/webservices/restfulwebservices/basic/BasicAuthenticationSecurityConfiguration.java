package com.in28minutes.rest.webservices.restfulwebservices.basic;

import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

//@Configuration
public class BasicAuthenticationSecurityConfiguration {
	// Filter chain
	// authenticate all requests
	// basic authentication
	// disabling csrf
	// stateless rest api
	
	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http.authorizeHttpRequests(
			auth -> auth
				.requestMatchers("/authenticate").
				permitAll().
				requestMatchers(PathRequest.toH2Console()).
				permitAll().
				requestMatchers(HttpMethod.OPTIONS,"/**")                     
				.permitAll()                     
				.anyRequest()                     
				.authenticated()
		);
		
		http.httpBasic(Customizer.withDefaults());
		http.sessionManagement(
			session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
		);
		
		http.csrf().disable();
		return http.build();
	}
}
