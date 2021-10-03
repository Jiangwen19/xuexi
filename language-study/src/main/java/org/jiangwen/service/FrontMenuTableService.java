package org.jiangwen.service;

import org.jiangwen.common.dto.SysMenuDto;
import org.jiangwen.entity.FrontMenuTable;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author name：JiangWen
 * @since 2021-10-03
 */
public interface FrontMenuTableService extends IService<FrontMenuTable> {

    List<SysMenuDto> getCurrentUserNav();
}
