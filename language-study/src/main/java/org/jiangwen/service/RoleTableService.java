package org.jiangwen.service;

import org.jiangwen.entity.RoleTable;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * <p>
 * 服务类
 * </p>
 *
 * @author name：JiangWen
 * @since 2021-10-03
 */
public interface RoleTableService extends IService<RoleTable> {

    List<RoleTable> listRolesByUserId(Long userId);

    int symbolNum(String symbol);
}
