package org.jiangwen.controller;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.jiangwen.common.lang.ApiRestResponse;
import org.jiangwen.common.resvo.History;
import org.jiangwen.entity.UserInfo;
import org.jiangwen.entity.UserPracticeHistory;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

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
@RequestMapping("/history")
public class UserPracticeHistoryController extends BaseController {

    @GetMapping("/userList")
    @PreAuthorize("hasAuthority('consumer:list')")
    public ApiRestResponse historyUserList() {
        List<UserInfo> users = userInfoService.list(new QueryWrapper<UserInfo>().orderByAsc("user_id"));
        return ApiRestResponse.success(users);
    }

    @GetMapping("/userSearch/{str}")
    @PreAuthorize("hasAuthority('consumer:list')")
    public ApiRestResponse searchConsumer(@PathVariable("str") String str) {

        List<UserInfo> users = userInfoService.list(new QueryWrapper<UserInfo>().like("username", str).orderByAsc("user_id"));

        return ApiRestResponse.success(users);

    }

    @GetMapping("/favList/{userId}")
    @PreAuthorize("hasAuthority('history:list')")
    public ApiRestResponse getFavList(@PathVariable("userId") Long userId) {

        List<History> favList = userPracticeHistoryService.getFavouritesByUserId(userId);

        return ApiRestResponse.success(favList);

    }

    @GetMapping("/misList/{userId}")
    @PreAuthorize("hasAuthority('history:list')")
    public ApiRestResponse getMisList(@PathVariable("userId") Long userId) {

        List<History> favList = userPracticeHistoryService.getMistakensByUserId(userId);

        return ApiRestResponse.success(favList);

    }

    @Transactional
    @PostMapping("/favDelete")
    @PreAuthorize("hasAuthority('history:delete')")
    public ApiRestResponse deleteFavByIds(@RequestBody Long[] ids) {

        for (Long id : ids) {
            UserPracticeHistory history = userPracticeHistoryService.getById(id);
            if (!history.getMistakesFlg()) {
                userPracticeHistoryService.removeById(id);
            } else {
                history.setFavouritesFlg(false);
                userPracticeHistoryService.updateById(history);
            }
        }
        return ApiRestResponse.success();
    }

    @Transactional
    @PostMapping("/MisDelete")
    @PreAuthorize("hasAuthority('history:delete')")
    public ApiRestResponse deleteMisByIds(@RequestBody Long[] ids) {

        for (Long id : ids) {
            UserPracticeHistory history = userPracticeHistoryService.getById(id);
            if (!history.getFavouritesFlg()) {
                userPracticeHistoryService.removeById(id);
            } else {
                history.setMistakesFlg(false);
                userPracticeHistoryService.updateById(history);
            }
        }
        return ApiRestResponse.success();
    }
}
