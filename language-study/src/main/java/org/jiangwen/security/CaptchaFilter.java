package org.jiangwen.security;

import com.baomidou.mybatisplus.core.toolkit.StringUtils;
import lombok.extern.slf4j.Slf4j;
import org.jiangwen.common.exception.CaptchaException;
import org.jiangwen.common.lang.Const;
import org.jiangwen.utils.RedisUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
@Component
public class CaptchaFilter extends OncePerRequestFilter {

    @Autowired
    RedisUtil redisUtil;

    @Autowired
    LoginFailureHandler loginFailureHandler;

    @Override
    protected void doFilterInternal(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, FilterChain filterChain) throws IOException, ServletException {

        String url = httpServletRequest.getRequestURI();

        if ("/login".equals(url) && httpServletRequest.getMethod().equals("POST")) {

            try {
                // 校验验证码
                validate(httpServletRequest);
            } catch (CaptchaException e) {

                // 交给认证失败处理器
                loginFailureHandler.onAuthenticationFailure(httpServletRequest, httpServletResponse, e);
            }
        }

        filterChain.doFilter(httpServletRequest, httpServletResponse);

    }

    // 校验验证码逻辑
    private void validate(HttpServletRequest httpServletRequest) {

		String code = httpServletRequest.getParameter("verificationCode");
		String key = httpServletRequest.getParameter("codeToken");

        if (StringUtils.isBlank(code) || StringUtils.isBlank(key)) {
            throw new CaptchaException("验证码为空");
        }

        if (!code.equals(redisUtil.hget(Const.CAPTCHA_KEY, key))) {
            throw new CaptchaException("验证码错误");
        }

        // 一次性使用
        redisUtil.hdel(Const.CAPTCHA_KEY, key);
    }
}
