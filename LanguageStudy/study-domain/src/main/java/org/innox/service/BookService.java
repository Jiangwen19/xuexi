package org.innox.service;


import org.innox.pojo.BookTable;

public interface BookService {
	BookTable searchBookById(long bookId);
}
