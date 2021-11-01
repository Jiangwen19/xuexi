package org.jiangwen.controller;

import cn.hutool.core.util.StrUtil;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import org.jiangwen.common.dto.PassDto;
import org.jiangwen.common.lang.ApiRestResponse;
import org.jiangwen.common.lang.Const;
import org.jiangwen.entity.RoleTable;
import org.jiangwen.entity.UserInfo;
import org.jiangwen.entity.UserRoleTable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.Assert;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
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
@RequestMapping("/user")
public class UserInfoController extends BaseController {

    @Autowired
    BCryptPasswordEncoder passwordEncoder;

    @GetMapping("/info/{id}")
    @PreAuthorize("hasAuthority('sys:user:list')")
    public ApiRestResponse info(@PathVariable("id") Long id) {

        UserInfo userInfo = userInfoService.getById(id);
        Assert.notNull(userInfo, "找不到该管理员");

        List<RoleTable> roles = roleTableService.listRolesByUserId(id);
        userInfo.setRoles(roles);

        return ApiRestResponse.success(userInfo);
    }

    @GetMapping("/list")
    @PreAuthorize("hasAuthority('sys:user:list')")
    public ApiRestResponse list(String username) {

        Page<UserInfo> pageData = userInfoService.page(getPage(), new QueryWrapper<UserInfo>()
                .like(StrUtil.isNotBlank(username), "username", username));

        pageData.getRecords().forEach(u -> {

            u.setRoles(roleTableService.listRolesByUserId(u.getUserId()));
        });

        return ApiRestResponse.success(pageData);
    }

    @PostMapping("/save")
    @PreAuthorize("hasAuthority('sys:user:save')")
    public ApiRestResponse save(@Validated @RequestBody UserInfo userInfo) {

        userInfo.setCreateTime(LocalDateTime.now());
        userInfo.setStatu(Const.STATUS_ON);

        // 默认密码
        String password = passwordEncoder.encode(Const.DEFULT_PASSWORD);
        userInfo.setPassword(password);

        // 默认头像
        userInfo.setPicture(Const.DEFULT_AVATAR);

        userInfoService.save(userInfo);
        return ApiRestResponse.success(userInfo);
    }

    @PostMapping("/update")
    @PreAuthorize("hasAuthority('sys:user:update')")
    public ApiRestResponse update(@Validated @RequestBody UserInfo userInfo) {

        userInfo.setUpdateTime(LocalDateTime.now());

        userInfoService.updateById(userInfo);
        return ApiRestResponse.success(userInfo);
    }

    @Transactional
    @PostMapping("/delete")
    @PreAuthorize("hasAuthority('sys:user:delete')")
    public ApiRestResponse delete(@RequestBody Long[] ids) {

        userInfoService.removeByIds(Arrays.asList(ids));
        userRoleTableService.remove(new QueryWrapper<UserRoleTable>().in("user_id", ids));

        return ApiRestResponse.success();
    }

    @Transactional
    @PostMapping("/role/{userId}")
    @PreAuthorize("hasAuthority('sys:user:role')")
    public ApiRestResponse rolePerm(@PathVariable("userId") Long userId, @RequestBody Long[] roleIds) {

        List<UserRoleTable> userRoles = new ArrayList<>();

        Arrays.stream(roleIds).forEach(r -> {
            UserRoleTable userRole = new UserRoleTable();
            userRole.setRoleId(r);
            userRole.setUserId(userId);

            userRoles.add(userRole);
        });

        userRoleTableService.remove(new QueryWrapper<UserRoleTable>().eq("user_id", userId));
        userRoleTableService.saveBatch(userRoles);

        // 删除缓存
        userInfoService.clearUserAuthorityInfo(userId);

        return ApiRestResponse.success();
    }

    @PostMapping("/repass")
    @PreAuthorize("hasAuthority('sys:user:repass')")
    public ApiRestResponse repass(@RequestBody Long userId) {

        UserInfo userInfo = userInfoService.getById(userId);

        userInfo.setPassword(passwordEncoder.encode(Const.DEFULT_PASSWORD));
        userInfo.setUpdateTime(LocalDateTime.now());

        userInfoService.updateById(userInfo);
        return ApiRestResponse.success();
    }

    @PostMapping("/updatePass")
    public ApiRestResponse updatePass(@Validated @RequestBody PassDto passDto, Principal principal) {

        UserInfo userInfo = userInfoService.getByUsername(principal.getName());

        boolean matches = passwordEncoder.matches(passDto.getCurrentPass(), userInfo.getPassword());
        if (!matches) {
            return ApiRestResponse.error("旧密码不正确");
        }

        userInfo.setPassword(passwordEncoder.encode(passDto.getPassword()));
        userInfo.setUpdateTime(LocalDateTime.now());

        userInfoService.updateById(userInfo);
        return ApiRestResponse.success("修改密码成功");
    }
}
