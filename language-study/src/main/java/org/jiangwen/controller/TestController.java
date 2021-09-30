package org.jiangwen.controller;

import org.jiangwen.common.lang.ApiRestResponse;
import org.jiangwen.service.CodeTableService;
import org.jiangwen.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @Autowired
    UserInfoService userInfoService;

    @Autowired
    CodeTableService codeTableService;

    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;

    @GetMapping("/test")
    public ApiRestResponse test() {
        return ApiRestResponse.success(userInfoService.list());
    }

    @GetMapping("/code")
    public ApiRestResponse code() {
        return ApiRestResponse.success(codeTableService.list());
    }

    @GetMapping("/test/pass")
    public ApiRestResponse pass() {
        // 加密后的密码
        String password = bCryptPasswordEncoder.encode("111111");
        boolean matches = bCryptPasswordEncoder.matches("111111", password);
        System.out.println("匹配结果：" + matches);
        return ApiRestResponse.success(password);
    }

}
