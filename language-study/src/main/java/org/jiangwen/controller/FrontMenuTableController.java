package org.jiangwen.controller;


import cn.hutool.core.map.MapUtil;
import org.jiangwen.common.resvo.ResMenuVo;
import org.springframework.util.StringUtils;
import org.jiangwen.common.lang.ApiRestResponse;
import org.jiangwen.entity.UserInfo;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.List;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author name：JiangWen
 * @since 2021-10-03
 */
@RestController
@RequestMapping("/menu")
public class FrontMenuTableController extends BaseController {

    @GetMapping("/nav")
    public ApiRestResponse nav(Principal principal) {
        UserInfo userInfo = userInfoService.getByUsername(principal.getName());

        // 获取权限信息
        String authorityInfo = userInfoService.getUserAuthorityInfo(userInfo.getUserId());
        String[] authorityInfoArray = StringUtils.tokenizeToStringArray(authorityInfo, ",");

        // 获取导航栏信息
        List<ResMenuVo> navs = frontMenuTableService.getCurrentUserNav();

        return ApiRestResponse.success(MapUtil.builder()
                .put("authoritys", authorityInfoArray)
                .put("nav", navs)
                .map()
        );

    }

}
