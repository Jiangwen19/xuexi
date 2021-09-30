package org.jiangwen.security;

import cn.hutool.json.JSONUtil;
import org.jiangwen.common.lang.ApiRestResponse;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint {

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {

        response.setContentType("application/json;charset=UTF-8");
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        ServletOutputStream outputStream = response.getOutputStream();

        ApiRestResponse apiRestResponse = ApiRestResponse.error("请先登录");

        outputStream.write(JSONUtil.toJsonStr(apiRestResponse).getBytes("UTF-8"));

        outputStream.flush();
        outputStream.close();
    }
}
