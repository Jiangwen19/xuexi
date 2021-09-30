package org.jiangwen.security;


import com.baomidou.mybatisplus.core.toolkit.StringUtils;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.SneakyThrows;
import org.jiangwen.common.exception.CaptchaException;
import org.jiangwen.common.lang.Const;
import org.jiangwen.utils.RedisUtil;
import org.springframework.beans.factory.annotation.Autowired;
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

    @Autowired
    RedisUtil redisUtil;

    @Autowired
    LoginFailureHandler loginFailureHandler;

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {

        //读取url
        String url = request.getRequestURI();

        if (!("/login".equals(url) && request.getMethod().equals("POST"))) {
            throw new AuthenticationServiceException("Authentication method not supported: " + request.getMethod());
        }

        Map<String, String> loginData = new HashMap<>();
        try {
            loginData = new ObjectMapper().readValue(request.getInputStream(), Map.class);
        } catch (IOException e) {
            e.printStackTrace();
        }

        if (request.getContentType().equals(MediaType.APPLICATION_JSON_UTF8_VALUE) || request.getContentType().equals(MediaType.APPLICATION_JSON_VALUE)) {
            validateCode(loginData, request, response);
            return validatePassword(loginData, request);
        } else {
            validateCode(loginData, request, response);
            return super.attemptAuthentication(request, response);
        }
    }

    @SneakyThrows
    private void validateCode(Map<String, String> loginData, HttpServletRequest request, HttpServletResponse response) {

        try {
            // 校验验证码
            validate(loginData);
        } catch (CaptchaException e) {

            // 交给认证失败处理器
            loginFailureHandler.onAuthenticationFailure(request, response, e);
        }

    }

    private void validate(Map<String, String> loginData) {
        String code = loginData.get("verificationCode");
        String key = loginData.get("codeToken");

        if (StringUtils.isBlank(code) || StringUtils.isBlank(key)) {
            throw new CaptchaException("验证码为空");
        }

        if (!code.equals(redisUtil.hget(Const.CAPTCHA_KEY, key))) {
            throw new CaptchaException("验证码错误");
        }
        // 一次性使用
        redisUtil.hdel(Const.CAPTCHA_KEY, key);
    }

    private Authentication validatePassword(Map<String, String> loginData, HttpServletRequest request) {
        String username = loginData.get(getUsernameParameter());
        username = username != null ? username : "";
        username = username.trim();
        String password = loginData.get(getPasswordParameter());
        password = password != null ? password : "";
        UsernamePasswordAuthenticationToken authRequest = new UsernamePasswordAuthenticationToken(username, password);
        this.setDetails(request, authRequest);
        return this.getAuthenticationManager().authenticate(authRequest);
    }
}
