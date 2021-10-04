package org.jiangwen.controller;

import cn.hutool.core.lang.UUID;
import cn.hutool.core.map.MapUtil;
import com.google.code.kaptcha.Producer;
import lombok.extern.slf4j.Slf4j;
import org.jiangwen.common.lang.ApiRestResponse;
import org.jiangwen.common.lang.Const;
import org.jiangwen.entity.UserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.security.Principal;
import java.util.Base64;

@Slf4j
@RestController
public class AuthController extends BaseController {

    @Autowired
    Producer producer;

    @GetMapping("/captcha")
    public ApiRestResponse captcha() throws IOException {

        String key = UUID.randomUUID().toString();
        String code = producer.createText();

        //为了测试
        key = "aaaaaa";
        code = "11111";

        BufferedImage image = producer.createImage(code);
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        ImageIO.write(image, "jpg", outputStream);

        Base64.Encoder encoder = Base64.getEncoder();
        String str = "data:image/jpeg;base64,";

        String base64Img = str + encoder.encodeToString(outputStream.toByteArray());

        redisUtil.hset(Const.CAPTCHA_KEY, key, code, 120);

        return ApiRestResponse.success(
                MapUtil.builder()
                        .put("token", key)
                        .put("captchaImg", base64Img)
                        .build()
        );
    }

    // 获取当前用户信息
    @GetMapping("/userInfo")
    public ApiRestResponse userInfo(Principal principal) {

        UserInfo user = userInfoService.getByUsername(principal.getName());
        return ApiRestResponse.success(MapUtil.builder()
                .put("userId", user.getUserId())
                .put("username", user.getUsername())
                .put("picture", user.getPicture())
                .put("createTime", user.getCreateTime())
                .map()
        );
    }

}
