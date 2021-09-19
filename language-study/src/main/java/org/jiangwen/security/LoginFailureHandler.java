package org.jiangwen.security;

import cn.hutool.json.JSONUtil;
import org.jiangwen.common.lang.ApiRestResponse;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class LoginFailureHandler implements AuthenticationFailureHandler {

	@Override
	public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException, ServletException {

		response.setContentType("application/json;charset=UTF-8");
		ServletOutputStream outputStream = response.getOutputStream();

		ApiRestResponse apiRestResponse = ApiRestResponse.error("用户名或密码错误");

		outputStream.write(JSONUtil.toJsonStr(apiRestResponse).getBytes("UTF-8"));

		outputStream.flush();
		outputStream.close();
	}
}
