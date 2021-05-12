package org.innox.web.controller;

import org.innox.model.ApiResponse;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/book")
public class BookController {
	
//	@Autowired
//	private BookService bookService;
	
	@PostMapping("/searchBookById")
	public ApiResponse<?> searchBookById(@RequestBody long bookId) {
//		return ApiResponse.ok(bookService.searchBookById(bookId));
		return ApiResponse.ok("sdf");
	}

}
