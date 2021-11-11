package org.jiangwen.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.jiangwen.entity.RoleTable;
import org.jiangwen.mapper.RoleTableMapper;
import org.jiangwen.service.RoleTableService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <p>
 * 服务实现类
 * </p>
 *
 * @author name：JiangWen
 * @since 2021-10-03
 */
@Service
public class RoleTableServiceImpl extends ServiceImpl<RoleTableMapper, RoleTable> implements RoleTableService {

    @Override
    public List<RoleTable> listRolesByUserId(Long userId) {

        List<RoleTable> roles = this.list(new QueryWrapper<RoleTable>()
                .inSql("role_id", "select role_id from user_role_table where user_id=" + userId));

        return roles;
    }
}
