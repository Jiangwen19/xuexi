package org.jiangwen.controller;


import cn.hutool.core.util.StrUtil;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import org.jiangwen.common.lang.ApiRestResponse;
import org.jiangwen.common.lang.Const;
import org.jiangwen.entity.RoleMenuTable;
import org.jiangwen.entity.RoleTable;
import org.jiangwen.entity.UserRoleTable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author name：JiangWen
 * @since 2021-10-03
 */
@RestController
@RequestMapping("/role")
public class RoleTableController extends BaseController {

    @GetMapping("/info/{id}")
    @PreAuthorize("hasAuthority('sys:role:list')")
    public ApiRestResponse info(@PathVariable("id") Long id) {

        RoleTable roleTable = roleTableService.getById(id);

        // 获取角色相关联的菜单ID
        List<RoleMenuTable> roleMenus = roleMenuTableService.list(new QueryWrapper<RoleMenuTable>().eq("role_id", id));
        List<Long> menuIds = roleMenus.stream().map(p -> p.getFrontMenuId()).collect(Collectors.toList());

        roleTable.setMenuIds(menuIds);

        return ApiRestResponse.success(roleTable);
    }

    @GetMapping("/list/{name}")
    @PreAuthorize("hasAuthority('sys:role:list')")
    public ApiRestResponse list(@PathVariable("name") String name) {

        Page<RoleTable> pageData = roleTableService.page(getPage(),
                new QueryWrapper<RoleTable>()
                        .like(StrUtil.isNotBlank(name), "role_name", name)
        );

        return ApiRestResponse.success(pageData);
    }

    @GetMapping("/list")
    @PreAuthorize("hasAuthority('sys:role:list')")
    public ApiRestResponse listAll(String name) {

        Page<RoleTable> pageData = roleTableService.page(getPage(),
                new QueryWrapper<RoleTable>()
                        .like(StrUtil.isNotBlank(name), "role_name", name)
        );

        return ApiRestResponse.success(pageData);
    }


    @PostMapping("/save")
    @PreAuthorize("hasAuthority('sys:role:save')")
    public ApiRestResponse save(@Validated @RequestBody RoleTable roleTable) {

        roleTable.setCreateTime(LocalDateTime.now());
        roleTable.setStatu(Const.STATUS_ON);

        roleTableService.save(roleTable);
        return ApiRestResponse.success(roleTable);
    }

    @PostMapping("/update")
    @PreAuthorize("hasAuthority('sys:role:update')")
    public ApiRestResponse update(@Validated @RequestBody RoleTable roleTable) {

        roleTable.setUpdateTime(LocalDateTime.now());

        roleTableService.updateById(roleTable);

        // 更新缓存
        userInfoService.clearUserAuthorityInfoByRoleId(roleTable.getRoleId());

        return ApiRestResponse.success(roleTable);
    }

    @Transactional
    @PostMapping("/delete")
    @PreAuthorize("hasAuthority('sys:role:delete')")
    public ApiRestResponse info(@RequestBody Long[] ids) {

        roleTableService.removeByIds(Arrays.asList(ids));

        // 删除中间表
        userRoleTableService.remove(new QueryWrapper<UserRoleTable>().in("role_id", ids));
        roleMenuTableService.remove(new QueryWrapper<RoleMenuTable>().in("role_id", ids));

        // 缓存同步删除
        Arrays.stream(ids).forEach(id -> {
            // 更新缓存
            userInfoService.clearUserAuthorityInfoByRoleId(id);
        });

        return ApiRestResponse.success();
    }

    @Transactional
    @PostMapping("/perm/{roleId}")
    @PreAuthorize("hasAuthority('sys:role:perm')")
    public ApiRestResponse info(@PathVariable("roleId") Long roleId, @RequestBody Long[] menuIds) {

        List<RoleMenuTable> roleMenus = new ArrayList<>();

        Arrays.stream(menuIds).forEach(menuId -> {
            RoleMenuTable roleMenu = new RoleMenuTable();
            roleMenu.setFrontMenuId(menuId);
            roleMenu.setRoleId(roleId);

            roleMenus.add(roleMenu);
        });

        // 先删除原来的记录，在保存新的
        roleMenuTableService.remove(new QueryWrapper<RoleMenuTable>().eq("role_id", roleId));
        roleMenuTableService.saveBatch(roleMenus);

        // 删除缓存
        userInfoService.clearUserAuthorityInfoByRoleId(roleId);

        return ApiRestResponse.success(menuIds);
    }


}
