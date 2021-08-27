package org.jiangwen.controller;

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
    public Object test(){
        return userInfoService.list();
    }

    @GetMapping("/code")
    public Object code(){
        return codeTableService.list();
    }
}
