package org.jiangwen.controller;

import org.jiangwen.common.lang.ApiRestResponse;
import org.jiangwen.service.CodeTableService;
import org.jiangwen.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @Autowired
    UserInfoService userInfoService;

    @Autowired
    CodeTableService codeTableService;

    @GetMapping("/test")
    public ApiRestResponse test() {
        return ApiRestResponse.success(userInfoService.list());
    }

    @GetMapping("/code")
    public ApiRestResponse code() {
        return ApiRestResponse.success(codeTableService.list());
    }
}
