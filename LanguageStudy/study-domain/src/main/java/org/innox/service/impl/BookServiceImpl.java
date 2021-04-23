package org.innox.service.impl;


import org.innox.mapper.BookTableMapper;
import org.innox.pojo.BookTable;
import org.innox.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookServiceImpl implements BookService{
	
	@Autowired
	private BookTableMapper bookTableMapper;
	
	public BookServiceImpl (BookTableMapper bookTableMapper) {
		this.bookTableMapper = bookTableMapper;
	}
	
	@Override
	public BookTable searchBookById(long bookId) {
		return this.bookTableMapper.selectByPrimaryKey(bookId);
	}
}
