package org.jiangwen.controller;

import org.jiangwen.service.*;
import org.jiangwen.utils.RedisUtil;
import org.springframework.beans.factory.annotation.Autowired;

import javax.servlet.http.HttpServletRequest;

public class BaseController {

    @Autowired
    HttpServletRequest req;

    @Autowired
    RedisUtil redisUtil;

    @Autowired
    UserInfoService userInfoService;

    @Autowired
    RoleTableService roleTableService;

    @Autowired
    FrontMenuTableService frontMenuTableService;

    @Autowired
    UserRoleTableService userRoleTableService;

    @Autowired
    RoleMenuTableService roleMenuTableService;

}
