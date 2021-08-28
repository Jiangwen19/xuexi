package org.jiangwen.controller;

import org.jiangwen.common.lang.Result;
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
    public Result test() {
        return Result.succ(userInfoService.list());
    }

    @GetMapping("/code")
    public Result code() {
        return Result.succ(codeTableService.list());
    }
}
