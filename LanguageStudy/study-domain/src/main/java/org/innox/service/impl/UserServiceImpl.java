package org.innox.service.impl;

import org.innox.mapper.UserInfoMapper;
import org.innox.model.RequestregisterVo;
import org.innox.pojo.UserInfo;
import org.innox.service.UserService;
import org.innox.util.MD5Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{
	@Autowired()
	private UserInfoMapper userInfoMapper;
	
	public UserServiceImpl (UserInfoMapper userInfoMapper) {
		this.userInfoMapper = userInfoMapper;
	}
	
	@Override
	public int insert(RequestregisterVo requestregisterVo) {
		UserInfo record = new UserInfo();
		record.setUserName(requestregisterVo.getUserName());
		record.setPassword(MD5Util.md5(requestregisterVo.getPassword()));
		return this.userInfoMapper.insert(record);
	}
	
}
