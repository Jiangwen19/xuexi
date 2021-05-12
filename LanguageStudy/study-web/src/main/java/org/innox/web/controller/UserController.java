package org.innox.web.controller;

import org.innox.model.ApiResponse;
import org.innox.model.RequestregisterVo;
import org.innox.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class UserController {
	@Autowired
	private UserService userService;
	
	@PostMapping("/register")
	public ApiResponse<?> insert(@RequestBody RequestregisterVo requestregisterVo) {
		if(requestregisterVo.getPassword().equals(requestregisterVo.getPasswordAgain())) {
			return ApiResponse.ok(userService.insert(requestregisterVo));
		}
		return null;
	}
}
