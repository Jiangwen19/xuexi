package org.jiangwen.security;


import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.AuthenticationServiceException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class CustomAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {

//        try {
//            Map<String, String> loginData = new ObjectMapper().readValue(request.getInputStream(), Map.class);
//            String code = loginData.get("verificationCode");
//            String key = loginData.get("codeToken");
//            String user = loginData.get("username");
//            String ps = loginData.get("password");
//        } catch (IOException e){
//            e.printStackTrace();
//        }


        if (!request.getMethod().equals("POST")) {
            throw new AuthenticationServiceException("Authentication method not supported: " + request.getMethod());
        }

        if (request.getContentType().equals(MediaType.APPLICATION_JSON_UTF8_VALUE) || request.getContentType().equals(MediaType.APPLICATION_JSON_VALUE)) {
            Map<String, String> loginData = new HashMap<>();

            try {
                loginData = new ObjectMapper().readValue(request.getInputStream(), Map.class);
            } catch (IOException e) {
                e.printStackTrace();
            } finally {
                String username = loginData.get(getUsernameParameter());
                username = username != null ? username : "";
                username = username.trim();
                String password = loginData.get(getPasswordParameter());
                password = password != null ? password : "";
                UsernamePasswordAuthenticationToken authRequest = new UsernamePasswordAuthenticationToken(username, password);
                this.setDetails(request, authRequest);
                return this.getAuthenticationManager().authenticate(authRequest);
            }


        } else {
            return super.attemptAuthentication(request, response);
        }

    }
}
