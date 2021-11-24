package org.jiangwen.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.jiangwen.entity.FrontMenuTable;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * <p>
 * Mapper 接口
 * </p>
 *
 * @author name：JiangWen
 * @since 2021-10-03
 */

@Repository
public interface FrontMenuTableMapper extends BaseMapper<FrontMenuTable> {

    List<FrontMenuTable> selectMenuExcludeOwn(long frontMenuId, String perms);
}
