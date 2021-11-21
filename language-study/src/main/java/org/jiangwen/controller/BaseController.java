package org.jiangwen.controller;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import org.jiangwen.service.*;
import org.jiangwen.utils.RedisUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.ServletRequestUtils;

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

    @Autowired
    BookTableService bookTableService;

    @Autowired
    LessonTableService lessonTableService;

    /**
     * 获取页码
     *
     * @return
     */
    public Page getPage() {
        int current = ServletRequestUtils.getIntParameter(req, "current", 1);
        int size = ServletRequestUtils.getIntParameter(req, "size", 10);

        return new Page(current, size);
    }

}
