package org.jiangwen.service;

import com.baomidou.mybatisplus.extension.service.IService;
import org.jiangwen.common.resvo.FrontMenu;
import org.jiangwen.entity.FrontMenuTable;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 服务类
 * </p>
 *
 * @author name：JiangWen
 * @since 2021-10-03
 */
public interface FrontMenuTableService extends IService<FrontMenuTable> {

    Map<Object, Object> getCurrentUserNav();

    List<FrontMenu> tree();
}
